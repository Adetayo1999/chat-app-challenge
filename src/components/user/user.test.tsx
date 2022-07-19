import { render, screen } from "@testing-library/react";
import { User } from ".";

const userProps = {
    username: "omotomiwa",
};

describe("tests on the user component", () => {
    test("the username displays correctly", () => {
        render(<User {...userProps} />);
        const username = screen.getByText(userProps.username);
        expect(username).toBeInTheDocument();
    });
    test("the user image displays correctly", () => {
        render(<User {...userProps} />);
        const userImage = screen.getByAltText(userProps.username);
        expect(userImage).toBeInTheDocument();
    });
});
