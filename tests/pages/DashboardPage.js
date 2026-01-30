export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.userDropdown = page.locator(".oxd-userdropdown-tab");
    this.logoutOption = page.getByText("Logout");
    this.changePasswordOption = page.getByText("Change Password");
  }

  async goto() {
    await this.page.goto("/web/index.php/dashboard/index");
  }

  async clickUserDropdown() {
    await this.userDropdown.click();
  }

  async clickLogout() {
    await this.logoutOption.click();
  }

  async clickChangePassword() {
    await this.changePasswordOption.click();
  }
}
