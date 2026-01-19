export class ChangePasswordPage {
  constructor(page) {
    this.page = page;
    this.currentPasswordInput = page
      .locator(".oxd-input-group")
      .filter({ hasText: "Current Password" })
      .locator("input");

    this.newPasswordInput = page.locator('input[type="password"]').nth(1);

    this.confirmPasswordInput = page
      .locator(".oxd-input-group")
      .filter({ hasText: "Confirm Password" })
      .locator("input");

    this.saveBtn = page.getByRole("button", { name: "Save" });
  }

  async fillCurrentPassword(currentPassword) {
    await this.currentPasswordInput.fill(currentPassword);
  }

  async fillNewPassword(newPassword) {
    await this.newPasswordInput.fill(newPassword);
    await this.confirmPasswordInput.fill(newPassword);
  }

  async changePassword(currentPassword, newPassword) {
    await this.fillCurrentPassword(currentPassword);
    await this.fillNewPassword(newPassword);
  }

  async clickSave() {
    await this.saveBtn.click();
  }
}
