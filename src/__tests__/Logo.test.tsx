import { render, screen } from "@testing-library/react";
import Logo from "../components/common/Logo";

describe("Logo Component Tests", () => {

    test("should render the loading indicator properly when used", () => {
        render(<Logo />);
        const logoImg = screen.getByAltText("Company logo");
        expect(logoImg).toBeInTheDocument();
    });
})
