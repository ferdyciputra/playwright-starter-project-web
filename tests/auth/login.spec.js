import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import users from "../fixtures/users.json";

test.describe("Login E2E", () => {
  test("User Succesfully Login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const userValid = users.validUser;

    await test.step("User open login page", async () => {
      await loginPage.goto();
    });

    await test.step("User login with valid credentials", async () => {
      await loginPage.login(userValid.username, userValid.password);
    });

    await test.step("User successfully login and can see dashboard menu", async () => {
      await expect(page).toHaveURL(/dashboard/);
      await expect(
        page.getByRole("heading", { name: "Dashboard" }),
      ).toBeVisible();
    });
  });

  test("User Login with invalid username and password", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const userInvalid = users.invalidUser;

    await test.step("User open login page", async () => {
      await loginPage.goto();
    });

    await test.step("User login with invalid credentials", async () => {
      await loginPage.login(userInvalid.username, userInvalid.password);
    });

    await test.step("User failed to login and can see error message", async () => {
      const errorMessage = page.getByText("Invalid credentials");
      await expect(errorMessage).toBeVisible();
    });
  });
});
