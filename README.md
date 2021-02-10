# sandbox-typescript

## Starting new project

- Install node using nvm

  - Install nvm https://github.com/nvm-sh/nvm
  - Use `.nvmrc` file for best practice
  - Set up autorun `.nvmrc` in `.zshrc` file https://github.com/nvm-sh/nvm#zsh

- Initialize new node project

  - Run `npm init` to generate a `package.json` file which is used by npm and node
  - Setup mocha https://mochajs.org/#getting-started
    - Use `npm install --save-dev mocha` instead to install as a development dependency for the project
    - Change script test to `mocha` in package.json to enable `npm test` command
    - To run tests in watch mode, add `"tw": "mocha --watch --watch-files 'test/**/*.js' --reporter dot"` to the script

- In `package.json`, add `--require esm` to scripts to enable tests to support both ES and commonJS patterns, like `import` and `require`.
