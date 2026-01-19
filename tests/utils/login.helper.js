import { LoginPage } from "../pages/LoginPage.js";
import users from "../fixtures/users.json";

export async function loginAsValidUser(page) {
  const loginPage = new LoginPage(page);
  const userValid = users.validUser;

  await loginPage.goto();
  await loginPage.login(userValid.username, userValid.password);
}
