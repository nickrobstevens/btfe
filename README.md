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
The services have the stubs of unit tests implemented, so they at least initialise and pass one test each.


## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
E2E tests are delivered via Cypress. For this mini app cypress will open a testing browser and allow you to automate each test spec.
Future work could include configuring cypress to run in a CI as part of an automated build process.
Tests include core functionality such as:
- Testing the users get loaded
- Navigating through the app
- Testing posts get loaded
- Testing that the "load more" button works
- Testing that the comments load in



# Front end UI
A very simple UI has been created with Bootstrap 5 and SCSS, and styled reasonably closely to the wireframes provided.
Given more time this could be set up more thoroughly and better styling implemented

# Interesting technical decisions
- I've set up the foundation for automated build and deploy: multiple environments, unique build jobs, build setting per environment
- The classes for the API (user, post and comment) are created as interfaces under `src/app/models`
- Services are defined 1:1 for the corresponding endpoints
- A pipe is used to reduce the people to their first names, with a bit of additional logic to remove titles
- We are caching the users from the API - data is used in several places and this improves performance
- Cypress is used for front end and e2e testing. 
