# Playwright-Learn
This repo is for creating a learning site for playwright.
## Getting Started

This guide will help you set up a Playwright automation project step by step.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 12 or later)
- npm (Node package manager)

### Installation

1. **Create a new directory for your project:**



2. **Initialize a new Node.js project:**


3. **Install Playwright:**

    ```bash
    npm init playwright@latest
    ```
    You will be prompted with below options.
    - Need to install the following packages:
      create-playwright@1.17.139
      Ok to proceed? (y) y
    - ✔ Do you want to use TypeScript or JavaScript? · TypeScript
    - ✔ Where to put your end-to-end tests? · tests
    - ✔ Add a GitHub Actions workflow? (Y/n) · true
    - ✔ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true

### Writing Your First Test

1. **Create a new file for your test:**

    ```bash
    touch example.spec.js
    ```

2. **Add the following code to `example.spec.js`:**

    ```javascript
    const { test, expect } = require('@playwright/test');

    test('basic test', async ({ page }) => {
         await page.goto('https://example.com');
         const title = await page.title();
         expect(title).toBe('Example Domain');
    });
    ```

### Running Your Tests

To run your tests, use the following command:
