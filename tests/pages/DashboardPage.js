export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.userDropdown = page.locator(".oxd-userdropdown-tab");
    this.logoutOption = page.getByText("Logout");
    this.changePasswordOption = page.getByText("Change Password");
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
