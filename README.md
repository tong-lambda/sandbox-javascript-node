# sandbox-typescript

## Starting new project

- Install node using nvm

  - Install nvm https://github.com/nvm-sh/nvm
  - Use `.nvmrc` file for best practice
  - Set up autorun `.nvmrc` in `.zshrc` file https://github.com/nvm-sh/nvm#zsh

- Initialize new node project
  - Run `npm init` to generate a `package.json` file which is used by npm and node
  - Setup mocha https://mochajs.org/#getting-started
    - using `npm install --save-dev mocha` instead
    - change script test to `mocha` in package.json to enable `npm test` command
