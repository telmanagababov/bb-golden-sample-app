# AI Rules for Golden Sample Angular App

This document outlines the core technologies used in this application and provides clear guidelines on which libraries to use for specific functionalities.

## Tech Stack Overview

This application is built using a modern Angular ecosystem, leveraging Backbase-specific libraries for banking functionalities.

*   **Angular**: The primary framework for building the single-page application.
*   **Nx**: A powerful monorepo tool for managing multiple Angular applications and libraries within a single workspace.
*   **TypeScript**: The main programming language, providing strong typing and improved code quality.
*   **Backbase UI-Angular (`@backbase/ui-ang`)**: A comprehensive suite of UI components designed for banking applications, ensuring a consistent look and feel.
*   **Backbase Journeys & Foundation (`@backbase/journey-bundles`, `@backbase/foundation-ang`, `@backbase/identity-auth`)**: Libraries providing pre-built banking journeys, foundational services, and identity management.
*   **NgRx**: Used for state management across the application, following a reactive programming paradigm.
*   **RxJS**: Essential for handling asynchronous operations and event-based programming.
*   **Angular OAuth2 OIDC (`angular-oauth2-oidc`)**: Manages authentication flows using OpenID Connect.
*   **SCSS (Sass)**: The styling preprocessor, with a strong emphasis on leveraging Backbase's UI-Angular SCSS utilities and custom theme overrides.
*   **Playwright**: The framework for end-to-end testing, ensuring application stability and correctness.
*   **Jest**: The testing framework for unit tests.

## Library Usage Rules

To maintain consistency, readability, and best practices, please adhere to the following guidelines when developing:

*   **UI Components**:
    *   **Always** prioritize components from `@backbase/ui-ang` for all user interface elements (buttons, inputs, dropdowns, modals, alerts, etc.).
    *   For specific dropdown functionalities not covered by `@backbase/ui-ang`, use components from `@ng-bootstrap/ng-bootstrap` (e.g., `NgbDropdownModule`).
*   **State Management**:
    *   Use **NgRx** (`@ngrx/store`, `@ngrx/effects`, `@ngrx/component-store`) for managing application state.
    *   For local component state, `ComponentStore` from NgRx is preferred.
*   **Routing**:
    *   Use **Angular Router** (`@angular/router`) for all navigation within the application. Keep main application routes in `src/App.tsx`.
*   **HTTP Requests**:
    *   Utilize **Angular's `HttpClientModule`** and `HTTP_INTERCEPTORS` from `@angular/common/http` for all API interactions.
*   **Authentication**:
    *   Handle authentication and authorization flows using `angular-oauth2-oidc` and `@backbase/identity-auth`.
*   **Form Handling**:
    *   Implement forms using **Angular Reactive Forms** (`@angular/forms`), leveraging `FormBuilder` and `FormGroup`.
*   **Internationalization (i18n)**:
    *   Use Angular's built-in i18n features (`@angular/localize/init`) and the provided `LocaleSelectorModule` for multi-language support.
*   **Analytics and Observability**:
    *   Integrate tracking and observability features using `@backbase/foundation-ang/observability` (e.g., `TrackerModule`).
*   **Entitlements and Permissions**:
    *   Manage user permissions and access control using `@backbase/foundation-ang/entitlements` and `@backbase/shared/util/permissions`.
*   **Styling**:
    *   Apply styles using **SCSS**. Leverage the utility classes and theming capabilities provided by `@backbase/ui-ang/scss/main`. Avoid inline styles or direct DOM manipulation for styling.
*   **Utility Functions**:
    *   For common application-wide utilities, check `libs/shared/util/app-core`.