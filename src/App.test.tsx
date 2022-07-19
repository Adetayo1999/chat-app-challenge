import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("tests on the App component to ensure the other components integrate correctly", () => {
    test("the initial state of the app", () => {
        render(<App />);
        // expect the user to be prompted to enter a username;
        const titleElement = screen.getByText(/choose a username/i);
        expect(titleElement).toBeInTheDocument();
    });
    test("the user is taken away from the intial state when a username is chosen", () => {
        render(<App />);
        const inputElement = screen.getByTestId("username-input");
        const buttonElement = screen.getByRole("button", { name: "Submit" });
        expect(inputElement).toBeInTheDocument();
        fireEvent.change(inputElement, {
            target: { value: "omotomiwa" },
        });
        expect(inputElement).toHaveValue("omotomiwa");
        expect(buttonElement).toBeEnabled();
        fireEvent.click(buttonElement);
        const titleElement = screen.queryByText(/choose a username/i);
        expect(titleElement).not.toBeInTheDocument();

        // expect the no messages text  display
        const noMessageText = screen.getByText(/No messages yet.../i);
        expect(noMessageText).toBeInTheDocument();
    });
    test("a new message gets correctly", () => {
        render(<App />);
        const usernameInputElement = screen.getByTestId("username-input");
        const usernameButtonElement = screen.getByRole("button", {
            name: "Submit",
        });
        fireEvent.change(usernameInputElement, {
            target: { value: "omotomiwa" },
        });
        fireEvent.click(usernameButtonElement);

        const chatInputElement = screen.getByTestId("chat-input");
        const chatButtonElement = screen.getByRole("button", { name: "Send" });

        expect(chatInputElement).toBeInTheDocument();
        expect(chatButtonElement).toBeInTheDocument();

        expect(chatButtonElement).toBeDisabled();

        const chatText = "hello world";

        fireEvent.change(chatInputElement, {
            target: {
                value: chatText,
            },
        });

        expect(chatButtonElement).toBeEnabled();

        fireEvent.click(chatButtonElement);

        expect(chatInputElement).toHaveTextContent("");

        const newChat = screen.getByText(chatText);

        expect(newChat).toBeInTheDocument();
    });
    test("multiple messages show up correctly", () => {
        render(<App />);
        const usernameInputElement = screen.getByTestId("username-input");
        const usernameButtonElement = screen.getByRole("button", {
            name: "Submit",
        });
        fireEvent.change(usernameInputElement, {
            target: { value: "omotomiwa" },
        });
        fireEvent.click(usernameButtonElement);

        const chatInputElement = screen.getByTestId("chat-input");
        const chatButtonElement = screen.getByRole("button", { name: "Send" });

        expect(chatInputElement).toBeInTheDocument();
        expect(chatButtonElement).toBeInTheDocument();

        expect(chatButtonElement).toBeDisabled();

        const chatTexts = ["hello world", "goodbye world", "Hi", "I'm good"];

        for (let i = 0; i < chatTexts.length; i++) {
            fireEvent.change(chatInputElement, {
                target: {
                    value: chatTexts[i],
                },
            });

            expect(chatButtonElement).toBeEnabled();

            fireEvent.click(chatButtonElement);
        }

        expect(chatInputElement).toHaveTextContent("");

        const newChats = screen.getAllByTestId("chat-container");
        // I'm adding one the the length because jsdom does not reset after each test suite
        expect(newChats).toHaveLength(chatTexts.length + 1);
    });
});
