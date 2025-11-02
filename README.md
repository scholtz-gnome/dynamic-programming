# Typescript Base

A base typescript project with a testing environment set up.

# Set up

Use Node `v22.13.1`

```bash
nvm use
```

Install NPM dependencies

```bash
npm ci
```

# Running TypeScript

To run `src/main.ts` once without compiling

```bash
npm run start
```

To compile your TS

```bash
npm run build
```

To run `src/main.ts` and compile on file changes and run after each save

```bash
npm run start:dev
```

To run tests in the `tests` directory once

```bash
npm run test
```

To run the same tests in watch mode

```bash
npm run test:watch
```

To generate test coverage

```bash
npm run test:cov
```
