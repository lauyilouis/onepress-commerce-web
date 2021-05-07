# Onepress Commerce Shopfront Web
Onepress Commerce Shopfront Web is the shopfront web application of Onepress Commerce.

## Tech stack
1. [Typescript](https://www.typescriptlang.org/)
2. [React.js](https://reactjs.org/)
3. [Next.js](https://reactjs.org/)
4. [Material-UI](https://material-ui.com/)
5. [Styled-Components](https://styled-components.com/)
6. [Apollo GraphQL Client](https://www.apollographql.com/docs/react)
7. [Firebase Authentication](https://firebase.google.com/docs/auth)

### CI/CD
1. [Mocha](https://mochajs.org/)
2. [Cypress](https://www.cypress.io/)
3. [Eslint](https://eslint.org/)

### Notes of usage with styled-components
The following error may occur if you are using Next.js with version >= 9.1:
```
Warning: Prop className did not match. Server:...
```
The error is about mismatch of the server-side and client-side classname generated (by `styled-components`) which reported at [https://github.com/vercel/next.js/issues/11600](https://github.com/vercel/next.js/issues/11600).

The solution below is applied to this package to ensure the classname cnsistency after built:
1. Installed `babel-plugin-styled-components`.
2. Create a `.babelrc` config file at the project root and add the following content:
```
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}
```

Note that, if the config is correct, you will see the following message after Next.js server started and/or any content edited and triggered re-rendering.

```
info  - Using external babel configuration from [file path of .babelrc]
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)