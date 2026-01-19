import { test, expect } from "@playwright/test";
import { DashboardPage } from "../../pages/DashboardPage";
import { ChangePasswordPage } from "../../pages/ChangePasswordPage";
import { loginAsValidUser } from "../../utils/login.helper.js";
import users from "../../fixtures/users.json";

test.describe("Change Password E2E", () => {
  test("User Successfully Changes Password", async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const changePasswordPage = new ChangePasswordPage(page);

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

    await test.step("User clicks on the change password option", async () => {
      await dashboardPage.clickChangePassword();
      await expect(page).toHaveURL(/updatePassword/);
    });

    await test.step("User changes password", async () => {
      const currentPasswordInput = users.validUser.password;
      const newPasswordInput = "NewValidPassword123!";

      await changePasswordPage.changePassword(
        currentPasswordInput,
        newPasswordInput,
      );
    });

    await test.step("User submits the change password form", async () => {
      await changePasswordPage.clickSave();
      await expect(page.getByText("Successfully Saved")).toBeVisible();
    });
  });
});
