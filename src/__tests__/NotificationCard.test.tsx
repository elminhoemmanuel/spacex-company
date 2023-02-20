import { render, screen } from "@testing-library/react";
import NotificationsCard from "../components/page-elements/NotificationsCard";

describe("NotificationsCard Component Tests", () => {

    test("should render the notification icon", () => {
        render(<NotificationsCard />);
        const notificationIcon = screen.getAllByAltText("notification icon");
        expect(notificationIcon[0]).toBeInTheDocument();
    });
})
