import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { DashboardPage } from "../../pages/DashboardPage";
import users from "../../fixtures/users.json";

test.describe("Logout E2E", () => {
  test("User Succesfully Logout", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const userValid = users.validUser;

    await test.step("User already in Dashboard Page", async () => {
      await loginPage.goto();
      await loginPage.login(userValid.username, userValid.password);
      await expect(page).toHaveURL(/dashboard/);
      await expect(
        page.getByRole("heading", { name: "Dashboard" })
      ).toBeVisible();
    });

    await test.step("User clicks on the user dropdown", async () => {
      await dashboardPage.clickUserDropdown();
    });

    await test.step("User clicks on the logout option", async () => {
      await dashboardPage.clickLogout();
    });

    await test.step("User successfully logout and back to login page", async () => {
      await expect(page).toHaveURL(/auth\/login/);
      await expect(loginPage.loginBtn).toBeVisible();
    });
  });
});
