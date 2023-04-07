import HomeMenu from "@/components/home/HomeMenu";
import theme from "@/theme/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

test("renders GAME RULES in Link Element", () => {
  render(
    <ThemeProvider theme={theme}>
      <HomeMenu />
    </ThemeProvider>
  );
  const helloWorldElement = screen.getByText("GAME RULES");
  expect(helloWorldElement).toBeInTheDocument();
});
