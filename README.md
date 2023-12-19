# Chuck Norris GraphQL API

This project wraps the [Chuck Norris API](https://https://api.chucknorris.io/). A live version is deployed [here](https://cnrsapi.vercel.app/).

It uses a monorepo architechture, powered by Turborepo.

There are 2 applications within, a GraphQL api server and a react frontend created using Next.js. Each application lives in workspace under the `apps/*` directory.

## Server App

The server app is a simple GraphQL server, using Apollo server.

The GraphQL server provides queries that resolves to endpoints on the aforementioned API.

The scripts available on the server are:

- `build` - this runs the typescript compiler and outputs to the `dist` directory.
- `dev` - runs build command then start a local server on port 4000 by default. You can modify the port using env variables setting
- `start` - starts the local server without running the build step
- `types:check` - runs the typescript compiler without emitting any outputs

## Client App

The client app uses NextJs, with LESS for styling.

LESS styling is done using css modules, with each component having its own scoped CSS styles.

The client also has Apollo client for interfacing with the GraphQL API, and grapgql-codegen CLI to generate typescript types based on the API.

### Client setup

Before running the client app, you need to add environment variables. A sample template is provided under `.env.example`. You can copy the file and rename it to `.env`, the modify the variables to fit your setup.

| Variable            | Description                   | Example                |
| ------------------- | ----------------------------- | ---------------------- |
| NEXT_PUBLIC_API_URL | The URL of the GraphQL server | https://localhost:4000 |

The scripts available on the client app are:

- `gql:gen` - Generates typescript types using grapgql-codegen CLI and outputs to `client/_graphql_`. You can change this inside `codegen.ts`
- `dev` - first runs `gql:gen` then starts a development server with HMR support
- `build` - creates a production-ready build
- `start` - starts a production ready server
- `types:check` - runs the typescript compiler without generating outputs

## Developing locally

1. Clone the repo
2. run `npm install` in the root directory (the directory with `turbo.json`)
3. Start the development servers and make your changes

## Starting the development servers

You can start each server separately, or run them both in parallel

Here are the commands to start the development servers

| App                  | Command              |
| -------------------- | -------------------- |
| Server App           | `npm run server:dev` |
| Client App           | `npm run client:dev` |
| Run both in paralles | `npm run dev`        |
