# 🎭 Playwright E2E Web Testing – Starter Project

This is a starter project for End-to-End (E2E) web testing using Playwright with JavaScript.
It is designed to be easy to understand, scalable, and CI-ready.

## 📌 Tech Stack

- Node.js
- Playwright
- JavaScript
- HTML Report

## ✅ Prerequisites

Make sure your environment meets the following requirements:

- Node.js v18+ (recommended)
- npm or yarn
- Chromium / Firefox / WebKit (installed automatically by Playwright)

Check Node.js version:

```bash
node -v
```

## 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/ferdyciputra/playwright-starter-project-web
cd playwright-starter-project-web
```

2. Install dependencies

```bash
npm install
```

3. Install Playwright browsers

```bash
npx playwright install
```

## 📂 Project Structure

```txt
tests/
 ├── setup/
 │   └─ login.setup.js           # Generate storage state (login once)
 |
 ├── auth/                      # ❌ NO storage state support
 │   └── login.spec.js
 |
 ├── e2e/                       # ✅ Uses storage state
 │   └── change-password.spec.js
 │
 ├── pages/                     # Page Object Model (locators & actions)
 │   ├── LoginPage.js
 │   └── DashboardPage.js
 │
 ├── fixtures/                  # Test data (JSON files)
 │   └── users.json
 └── utils/                     # Reusable helpers
     └── login.helper.js

playwright.config.js
README.md
```

📌 Folder Description

- `e2e/` → Real user end-to-end flows
- `auth/` → Testcase user authentication flows
- `setup/` → Generate storage state (login once)
- `pages/` → Page Object Model (locators & actions only)
- `fixtures/` → Test data (users, roles, credentials)
- `utils/` -> Shared helpers (login, setup, etc.)

## 🔄 Test Execution Flow

```txt
setup
↓
generate storage/auth.json
↓
auth tests (manual login only)
↓
e2e tests (auto login via storage state)
```

## ▶️ Running Tests

### 1️⃣ Run Tests (Headless – Default)

Playwright runs headless by default.

```bash
npx playwright test
```

- ✔ No browser UI
- ✔ Fast execution
- ✔ Recommended for CI

### 2️⃣ Run Tests (Non-Headless / Headed)

Use this for local debugging.

```bash
npx playwright test --headed
```

- ✔ Browser is visible
- ✔ Easier to debug test steps

### 3️⃣ Run Tests with UI Mode

UI Mode is used for visual debugging and locator inspection.

```bash
npx playwright test --ui
```

UI Mode features:

- Run tests per file or per test case
- Browser preview
- Locator inspector
- Time-travel debugging

📌 Note: UI Mode always runs in non-headless mode

### 4️⃣ Run Tests on a Specific Configuration Browser

There is 3 value for End to End Test folder `tests/e2e` `chromium-e2e`, `firefox-e2e`, and `webkit-e2e`
This configuration automatically use storageState session

With storage state:

1. Login happens once
2. All E2E tests reuse the same session
3. Tests run 5–10× faster
4. Tests are more stable and CI-friendly

```bash
npx playwright test --project=chromium-e2e
```

or

There is 3 value for Authentication Test folder `tests/auth` `chromium-auth`, `firefox-auth`, and `webkit-auth`
This configuration not use storageState session

```bash
npx playwright test --project=chromium-auth
```

### 5️⃣ Run a Specific Test File

```bash
npx playwright test tests/e2e/auth/login.e2e.spec.js
```

### 📊 Test Report

After test execution, open the HTML report:

```bash
npx playwright show-report
```

## 📚 References

- https://playwright.dev/docs/intro
- https://playwright.dev/docs/test-ui-mode
