import { render, screen } from "@testing-library/react";
import moment from "moment";
import { Chat } from ".";

const chatProps = {
    text: "Hello world",
    sender: "omotomiwa",
    isCurrentUser: true,
    time: new Date().toISOString(),
};

describe("tests on the chat component", () => {
    test("checks for the chat message", () => {
        render(<Chat {...chatProps} />);
        const chatMessage = screen.getByText(/hello world/i);
        expect(chatMessage).toBeInTheDocument();
    });
    test("checks the user image displays correctly", () => {
        render(<Chat {...chatProps} />);
        const userImage = screen.getByAltText(chatProps.sender);
        expect(userImage).toBeInTheDocument();
    });
    test("checks for the timestamp of the chat", () => {
        render(<Chat {...chatProps} />);
        const chatTimeStamp = screen.getByText(
            moment(chatProps.time).fromNow()
        );
        expect(chatTimeStamp).toBeInTheDocument();
    });
});
