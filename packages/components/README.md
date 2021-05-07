#### Onepress Commerce Web UI

Onepress Commerce Web UI is the web application UI library used by Onepress Commerce.

## Tech stack
1. [Typescript](https://www.typescriptlang.org/)
2. [React.js](https://reactjs.org/)
3. [Storybook](https://storybook.js.org/)
4. [Material-UI](https://material-ui.com/)
5. [Styled-Components](https://styled-components.com/)

### CI/CD
1. [Mocha](https://mochajs.org/)
2. [Cypress](https://www.cypress.io/)
3. [Eslint](https://eslint.org/)

### Notes of usage with Next.js and styled-component SSR
The following error may occur if you are using Next.js with version >= 9.1:
```
Warning: Prop className did not match. Server:...
```
The error is about mismatch of the server-side and client-side classname generated (by `styled-components`) which reported at [https://github.com/vercel/next.js/issues/11600](https://github.com/vercel/next.js/issues/11600).

The solution below is applied to this package to ensure the classname cnsistency after built:
1. Installed `typescript-plugin-styled-components` and `ttypescript`.
2. Add the following to `tsconfig.json`:
```
{
  "compilerOptions": {
    "plugins": [
      {
        "transform": "typescript-plugin-styled-components",
        "type": "config",
        "ssr": true
      }
    ]
  },
}
```
3. Use `ttsc` command to build the bundle.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)