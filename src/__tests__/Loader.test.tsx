import { render, screen } from "@testing-library/react";
import Loader from "../components/common/Loader";

describe("Loader Component Tests", () => {

    test("should render the loading indicator properly when used", () => {
        render(<Loader />);
        const loaderTestId = screen.getByTestId("loader");
        expect(loaderTestId).toBeInTheDocument();
    });
})
