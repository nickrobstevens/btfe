# Btfe

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.11.
Alex mentioned that most of the current work is with Angular 14... but he also said not to quote him on that :)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4208/`. The application will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

There are 3 environments configured in this application:
- Dev - The development environment
- Stage - A production-like environment for testing and previewing releases
- Prod - The full production environment

Each has its own environment config and builds to an environment specific directory 
eg. `dist/dev` for the dev environment config.
This allows a single build process to create one set of outputs that can then be artifacted.



## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
E2E tests are delivered via Cypress. For this mini app cypress will open a testing browser and allow you to automate each test spec.
Future work could include configuring cypress to run in a CI as part of an automated build process.

