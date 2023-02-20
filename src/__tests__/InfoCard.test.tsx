import { render, screen } from "@testing-library/react";
import InfoCard from "../components/common/InfoCard";

describe("InfoCard Component Tests", () => {

    test("should show the correct position and name when these props are passed", () => {
        render(<InfoCard position="CTO" name="John" />);
        const positionTextValue = screen.getByText("CTO");
        const nameTextValue = screen.getByText("John");
        expect(positionTextValue).toBeInTheDocument();
        expect(nameTextValue).toBeInTheDocument();
    });
})
