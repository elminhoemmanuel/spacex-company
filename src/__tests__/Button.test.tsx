import { render, screen } from "@testing-library/react";
import Button from "../components/common/Button";

describe("Button Component Tests", () => {

    test("should show the correct child element passed", () => {
        render(<Button>Test</Button>);
        const textValue = screen.getByText("Test");
        expect(textValue).toBeInTheDocument();
    });

    test("should show the loading indicator when isLoading prop is passed", () => {
        render(<Button isLoading>Test</Button>);
        const laoderTestId = screen.getByTestId("loader");
        expect(laoderTestId).toBeInTheDocument();
    });
})
