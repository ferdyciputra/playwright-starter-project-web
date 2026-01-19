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
 ├── e2e/                 # End-to-End test scenarios (user journeys)
 │   ├── auth/
 │       └── login.e2e.spec.js
 │
 ├── pages/               # Page Object Model (locators & actions)
 │   ├── LoginPage.js
 │   └── DashboardPage.js
 │
 ├── fixtures/            # Test data (JSON files)
 │   └── users.json
 └── utils/               # Reusable helpers
     └── login.helper.js

playwright.config.js
README.md
```

📌 Folder Description

- `e2e/` → Real user end-to-end flows
- `pages/` → Page Object Model (locators & actions only)
- `fixtures/` → Test data (users, roles, credentials)
- `utils/` -> Shared helpers (login, setup, etc.)

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

### 4️⃣ Run Tests on a Specific Browser

There is 3 value for valid browser `chromium`, `firefox`, and `webkit`

```bash
npx playwright test --project=chromium
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
