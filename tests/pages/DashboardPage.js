export class DashboardPage {
  constructor(page) {
    this.page = page;
    this.userDropdown = page.locator(".oxd-userdropdown-tab");
    this.logoutOption = page.getByText("Logout");
  }

  async clickUserDropdown() {
    await this.userDropdown.click();
  }

  async clickLogout() {
    await this.logoutOption.click();
  }
}
