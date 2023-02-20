import { render, screen } from "@testing-library/react";
import NotificationsExplainer from "../components/page-elements/NotificationsExplainer";

describe("NotificationsExplainer Component Tests", () => {

    test("should render the notifications header", () => {
        render(<NotificationsExplainer />);
        const notificationHeader = screen.getByTestId("header");
        expect(notificationHeader).toBeInTheDocument();
    });

    test("should render the notifications  text explainer", () => {
        render(<NotificationsExplainer />);
        const notificationExplainer = screen.getByTestId("text");
        expect(notificationExplainer).toBeInTheDocument();
    });
})
