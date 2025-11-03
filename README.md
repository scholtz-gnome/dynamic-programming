# Typescript Base

Dynamic Programming is an algorithmic technique with the following properties:

- It is mainly an optimization over plain recursion. Wherever we see a recursive solution that has repeated calls for the same inputs, we can optimize it using Dynamic Programming.
- The idea is to simply store the results of subproblems so that we do not have to re-compute them when needed later. This simple optimization typically reduces time complexities from exponential to polynomial.
- Some popular problems solved using Dynamic Programming are Fibonacci Numbers, Diff Utility (Longest Common Subsequence), Bellman–Ford Shortest Path, Floyd Warshall, Edit Distance and Matrix Chain Multiplication.

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
