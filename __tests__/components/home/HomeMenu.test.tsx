import HomeMenu from "@/components/home/HomeMenu";
import theme from "@/theme/theme";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";

describe("HomePage component", () => {
  test("renders 'GAME RULES' in Link Element", () => {
    render(
      <ThemeProvider theme={theme}>
        <HomeMenu />
      </ThemeProvider>
    );
    const linkElement = screen.getByText("GAME RULES");
    expect(linkElement).toBeInTheDocument();
  });

  // TEST ONLY ONE THING

  // clicked
  // userEvent.click(outputElement);

  // test if something is not displayed
  // screen.queryByText() // returns null if not displayed
  //expect(element).toBeNull()
});
