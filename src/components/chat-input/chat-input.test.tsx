import { render, screen} from "@testing-library/react";
import { ChatInput } from ".";

const chatInputProps = {
    chat: "",
    handleChat: jest.fn(),
    handleChatSend: jest.fn(),
};

describe("tests on the chat-input component", () => {
    test("the button element is disabled when the textbox is empty", () => {
        render(<ChatInput {...chatInputProps} />);
        const buttonElement = screen.getByRole("button", { name: "Send" });
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toBeDisabled();
    });
});
