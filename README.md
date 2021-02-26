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

## Regular Expression

- Tools
  - RegExr: An online tool to learn, build, & test Regular Expressions.
    https://regexr.com/
  - Regex Tester: An online regex builder/debugger.
    https://regex101.com/

## NPM

- To install a package

  - How to install as a dependency
    `npm intall (-P or --save-prod is optional)`
  - How to install as a dev dependency
    `npm install - D or --save-dev`
  - How to install a specific version of a package
    `npm install <package-name>@<version-number>`
  - How to install from a GitHub repository
    `npm install <github-tarball-url>`
    example: `npm install git+https://github.com/visionmedia/express.git`

- npm ci
  `npm ci` will do the following things:

  - It will delete your node_modules folder to ensure a clean state.
  - It will look in your `package-lock.json` to install all the dependencies with the exact version.
  - Unlike `npm install`, `npm ci` will never modify your `package-lock.json`. It does however expect a `package-lock.json` file in your project — if you do not have this file, `npm ci` will not work and you have to use `npm install`. instead.

- Check outdated packages

  - Run `npm outdated` or `npm outdated <package name>` for a specific pagage
  - Run `npm update` to update the packages

- Run `npm repo <package name>` to open package's github url

Ideally we should:

- Run `npm outdated`
- Run `npm repo <package name>`
  - Read the changelog for major version bumps.
  - Read the changelog for minor version bumps for core packages.
- Run `npm install <package name>@latest`
  - If it's a good idea to upgrade, then I usually upgrade to the latest version.
  - Sometimes latest might not be best for a project. specify a version as needed.

## Node

- Check the latest version:
  https://nodejs.org/en/
- Check the support schedule:
  https://nodejs.org/en/about/releases/
  Node 12.X will be supported until Apr 2022.
- Documentation:
  - The latest 14.X version https://nodejs.org/dist/latest-v14.x/docs/api/
  - The doc for 12.X version https://nodejs.org/docs/latest-v12.x/api/
