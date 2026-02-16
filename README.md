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
    You will be prompted with the following options during the installation process:
    
    1. ***Need to install the following packages:***
      - This step will list the required packages that need to be installed for Playwright to function properly. You will see something like:
        - `create-playwright@1.17.139`
      - You will be asked if you want to proceed with the installation. Respond with `(y)` to continue.

    2. ***Do you want to use TypeScript or JavaScript?***
      - At this point, you will choose the programming language for your tests. You can select:
        - `TypeScript` for type safety and better tooling support, or
        - `JavaScript` for a more straightforward approach without type annotations.
      - Choose `TypeScript` if you prefer to leverage its features.

    3. ***Where to put your end-to-end tests?***
      - You will be prompted to specify the directory where your test files will be stored. A common choice is:
        - `tests` which is a standard convention for organizing test files.
      - Enter `tests` to create a dedicated folder for your tests.

    4. ***Add a GitHub Actions workflow? (Y/n)***
      - This option allows you to set up continuous integration for your project. By selecting `true`, a GitHub Actions workflow file will be created, enabling automated testing on every push to your repository.
      - Respond with `true` to enable this feature.

    5. ***Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n)***
      - You will be asked if you want to install the necessary browsers for Playwright to run your tests. This includes Chromium, Firefox, and WebKit.
      - Respond with `true` to install the browsers automatically, ensuring your tests can run in all supported environments.
      
4. **Folder Structure Created:**







   ![alt text](<images/Screenshot 2026-02-16 at 5.08.22 PM.png>)
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
