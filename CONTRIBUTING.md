# Contributing

## Project structure
The project is following the [atomic design philosophy](https://bradfrost.com/blog/post/atomic-web-design/). It contains an `app` folder within `utils` and `components`. 
Inside components you will find folders called `molecules`, `organisms`, and `atoms`. This project combines the atomic design methodology with [Next.js project structure](https://nextjs.org/docs/getting-started/project-structure), taking advantage of routing fundamentals concepts for files and folders.


### Commit message convention

The project follows the [conventional commits specification](https://www.conventionalcommits.org/en) for commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, e.g. add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

### Linting and tests

[ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [TypeScript](https://www.typescriptlang.org/)

The project uses [TypeScript](https://www.typescriptlang.org/) for type checking, [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/) for linting and formatting the code.