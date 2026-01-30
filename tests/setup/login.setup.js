import { test as setup, expect } from "@playwright/test";
import { loginAsValidUser } from "../utils/login.helper.js";

setup("Authenticate User", async ({ page }) => {
  await loginAsValidUser(page);
  await expect(page).toHaveURL(/dashboard/);

  await page.context().storageState({
    path: `storage/auth.json`,
  });
});
