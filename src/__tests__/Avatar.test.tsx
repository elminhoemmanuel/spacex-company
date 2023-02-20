import { render, screen } from "@testing-library/react";
import Avatar from "../components/common/Avatar";

describe("Avatar Component Tests", () => {

    test("should show the correct initials when name is passed", () => {
        render(<Avatar name="SpaceX" />);
        const textValue = screen.getByText("SX");
        expect(textValue).toBeInTheDocument();
    });

    test("should show the correct initials when name is not passed", () => {
        render(<Avatar />);
        const textValue = screen.getByText("CN");
        expect(textValue).toBeInTheDocument();
    });
})
