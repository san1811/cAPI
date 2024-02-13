# calendar-BE-cases

Welcome to the calendar-BE-cases repository! This repository serves as a proof of concept for automating Google API backend using Cypress.

## Steps to Execute Test Cases

Follow these steps to execute the test cases:

1. **Install Dependencies**: Before running the test cases, ensure you have all the necessary dependencies installed. You can do this by running the following command: => **npm install**

2. **Generate Authentication Token**: Generate an authentication token and add it to the `utils` file. Make sure to update the `auth` variable with the generated token.

3. **Run Test Cases in Headless Mode**: To run the test cases in headless mode, use the following command:

   **npx cypress run**:
This command will execute the test cases without opening the Cypress Test Runner interface.

4. **Run Test Cases in UI Mode**: If you prefer to run the test cases in UI mode for interactive debugging, use the following command.

   **npx cypress open**
This command will open the Cypress Test Runner interface where you can select and run individual test cases.

5. **GitHub Actions**: Setup is done but on my local machine, I will keep server on for 2 days so that you can check the flow.
**Cases will get execute on PR raise and master merge**

That's it! You're all set to execute the test cases for the calendar BE automation using Cypress. If you have any questions or encounter any issues, feel free to reach out for assistance. Happy testing!
