import { renderUI } from "../../../test/renderUI";
import UserProfile from "./UserProfile";

describe("UserProfile", () => {
  it("renders login message when user is not authenticated", () => {
    const { getByText } = renderUI(<UserProfile />);

    expect(getByText("Please log in")).toBeInTheDocument();
  });

  it("allows user to toggle theme and logout", async () => {
    const { getByText, getByTestId, user } = renderUI(<UserProfile />, {
      initialAuth: { id: "1", name: "John Doe" },
    });

    const profile = getByTestId("profile");
    expect(profile).toHaveClass("light");

    await user.click(getByText(/toggle theme/i));
    expect(profile).toHaveClass("dark");

    await user.click(getByText("Logout"));
    expect(getByText("Please log in")).toBeInTheDocument();
  });
});
