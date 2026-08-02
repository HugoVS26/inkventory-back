# INKVENTORY — Back-end

**Inkventory** is a full-stack application for managing a tattoos collection. This repository contains the **REST API** that powers it: a **Node.js** and **Express** server written in **TypeScript**, backed by **MongoDB** through **Mongoose**, with request validation via **Joi** and full **CRUD** operations over the tattoos resource.

The codebase follows the same quality practices as the front-end: **version control** with **GIT** under a **trunk-based** workflow, **husky** hooks guarding every commit, **ESLint** and **Prettier** for consistent style, **Commitlint** for conventional commits, and **SonarCloud** for continuous inspection of code quality and coverage. The test suite is built with **Jest** and **Supertest**, running against an in-memory MongoDB instance so tests are fast and isolated, with no dependency on a live database.

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=HugoVS26_inkventory-back)](https://sonarcloud.io/summary/overall?id=HugoVS26_inkventory-back)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=HugoVS26_inkventory-back&metric=coverage)](https://sonarcloud.io/summary/overall?id=HugoVS26_inkventory-back)

## Features

- RESTful API exposing full CRUD over the tattoos collection.
- Request validation with Joi to guarantee well-formed payloads.
- Centralised error handling with meaningful HTTP status codes.
- Full test coverage using an in-memory MongoDB, independent of any live server.

## Technologies Used

- **Git**: Version control system used to track changes in code and collaborate on software projects.

- **Node.js**: Server-side JavaScript runtime environment for scalable and high-performance applications.

- **Express.js**: Web framework for Node.js simplifying API and web application development.

- **TypeScript**: Language extending JavaScript with static types to prevent common errors during development.

- **MongoDB / Mongoose**: NoSQL document database with an ODM layer for schema modelling and data access.

- **Joi**: Schema description and data validation library used to validate incoming requests.

- **Jest**: JavaScript testing framework used for unit and integration testing.

- **Supertest**: Library for testing HTTP endpoints, used together with Jest to test the API in-memory.

<br/>

<div align="center">  
<a href="https://github.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /></a>  
<a href="https://nodejs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg" alt="Node.js" height="50" /></a>  
<a href="https://expressjs.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg" alt="Express.js" height="50" /></a>  
<a href="https://www.typescriptlang.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="50" /></a>  
<a href="https://www.mongodb.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg" alt="MongoDB" height="50" /></a>  
<a href="https://www.jestjs.io/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/jest.svg" alt="Jest" height="50" /></a>  
</div>

## Additional Tools

- **ESLint**: Static code analysis tool to identify and report problematic patterns in the code.

- **Prettier**: Code formatting tool that keeps a consistent style across the project.

- **Husky**: Git hooks manager used to run linting, formatting and tests before commits and pushes.

- **Commitlint**: Enforces conventional commit messages for a clean, readable history.

- **SonarCloud**: Continuous inspection service that analyses code quality, coverage, bugs, code smells and security issues on every commit or pull request.

## Setup

1. Clone this repository and install its dependencies:

   ```bash
   npm i
   ```

2. Create a `.env` file in the root of the project (see **Environment variables** below).

3. Start the development server:

   ```bash
   npm run start:dev
   ```

4. The API will be available at your configured localhost port.

## Environment variables

Create a `.env` file with the following variables:

```
PORT=<port the server will listen on>
DEBUG=<debug namespace, optional>
MONGODB_CONNECTION=<your MongoDB connection string>
```

## Available scripts

`npm run build`: compiles the TypeScript source to JavaScript.

`npm run build:dev`: compiles in watch mode.

`npm start`: runs the compiled app.

`npm run start:dev`: runs the app in watch mode for development.

`npm test`: runs the test suite.

`npm run test:dev`: runs the tests in watch mode.

`npm run test:coverage`: runs the tests and reports coverage.

## Endpoints

### `GET /`

- Health-check endpoint handled by the ping controller.
- Returns the message `"Leeeeroy Jenkins!"` with status `200`.

### Unknown route

- Any request to a non-existent endpoint.
- Returns the message `"Endpoint not found"` with status `404`.

### `GET /tattoos`

- Returns the full list of tattoos.
- Responds with the collection of tattoos and status `200`.

### `GET /tattoos/:id`

- Returns a single tattoo by its id.
- Responds with the requested tattoo and status `200`.

### `POST /tattoos/add`

- Creates a new tattoo.
- Responds with the message `"The tattoo has been created successfully"`, the created tattoo, and status `201`.

### `PATCH /tattoos/:id`

- Updates an existing tattoo by its id.
- Responds with the updated tattoo and status `200`.

### `DELETE /tattoos/delete/:id`

- Deletes a tattoo by its id.
- Responds with the message `"The tattoo has been deleted"` and status `200`.
