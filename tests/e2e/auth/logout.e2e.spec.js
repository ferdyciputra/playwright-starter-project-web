import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { DashboardPage } from "../../pages/DashboardPage";
import { loginAsValidUser } from "../../utils/login.helper.js";

test.describe("Logout E2E", () => {
  test("User Succesfully Logout", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const loginPage = new LoginPage(page);

    await test.step("User can login successfully", async () => {
      await loginAsValidUser(page);
      await expect(page).toHaveURL(/dashboard/);
      await expect(
        page.getByRole("heading", { name: "Dashboard" }),
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
