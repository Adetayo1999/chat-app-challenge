import { render, screen, fireEvent } from "@testing-library/react";
import { SetUsername } from ".";

const setUsernameProps = {
    handleUsername: jest.fn(),
};

describe("tests on the set-username component", () => {
    test("the title element displays", () => {
        render(<SetUsername {...setUsernameProps} />);
        const titleElement = screen.getByText(/choose a username/i);
        expect(titleElement).toBeInTheDocument();
        expect(titleElement).toHaveTextContent("Choose A Username");
    });
    test("the button remains disabled when the text input is empty", () => {
        render(<SetUsername {...setUsernameProps} />);
        const buttonElement = screen.getByRole("button", { name: "Submit" });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toBeDisabled();
    });
    test("the button becomes enabled when the user types in the text input", () => {
        render(<SetUsername {...setUsernameProps} />);
        const inputElement = screen.getByTestId("username-input");
        const buttonElement = screen.getByRole("button", { name: "Submit" });
        expect(inputElement).toBeInTheDocument();
        fireEvent.change(inputElement, {
            target: { value: "omotomiwa" },
        });
        expect(inputElement).toHaveValue("omotomiwa");
        expect(buttonElement).toBeEnabled();
        fireEvent.click(buttonElement);
        expect(setUsernameProps.handleUsername).toHaveBeenCalledTimes(1);
    });
});
