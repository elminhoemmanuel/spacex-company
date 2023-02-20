import { render, screen } from "@testing-library/react";
import Badge from "../components/common/Badge";

describe("Badge Component Tests", () => {

    test("should render the badge icon image", () => {
        render(<Badge text="Test" />);
        const textValue = screen.getByAltText("badge icon");
        expect(textValue).toBeInTheDocument();
    });

    test("should render the correct text passed to the badge", () => {
        render(<Badge text="Test" />);
        const textValue = screen.getByText("Test");
        expect(textValue).toBeInTheDocument();
    });
})
