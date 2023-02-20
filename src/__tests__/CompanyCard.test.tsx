import { render, screen } from "@testing-library/react";
import CompanyCard from "../components/page-elements/CompanyCard";

const testData = {
    name: "My Company",
    ceo: "Jane Doe",
    cto: "John Doe",
}

describe("CompanyCard Component Tests", () => {

    test("should render the correct company name", () => {
        render(<CompanyCard data={testData} />);
        const companyName = screen.getByText("My Company");
        expect(companyName).toBeInTheDocument();
    });

    test("should render the correct ceo name", () => {
        render(<CompanyCard data={testData} />);
        const ceoName = screen.getByText("Jane Doe");
        expect(ceoName).toBeInTheDocument();
    });

    test("should render the correct cto name", () => {
        render(<CompanyCard data={testData} />);
        const ctoName = screen.getByText("John Doe");
        expect(ctoName).toBeInTheDocument();
    });

})
