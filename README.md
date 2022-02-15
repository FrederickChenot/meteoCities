# Create React App (CRA)


https://create-react-app.dev/

## Quick start
Pour créer un projet:
> `yarn create react-app <nomDeMonApp>`
> `cd <nomDeMonApp>`

Démarrer le projet:
> `yarn start`

### Sass
Si on veut utiliser des fichier sass, on dois ajouter le loader pour sass: `yarn add sass --dev`

## Eslint
Eslint est déjà en partit installé par CRA, si on veut pouvoir préciser nos propres regles de syntaxe on dois initialiser eslint.

Pour initialiser eslint, on fait:
> `yarn add eslint --save-dev`
> `yarn create @eslint/config`
> On choisi le framework react
> puis on installe les eventuelles dependances necessaire à notre config (exemple: `yarn add eslint-config-airbnb --dev `)

## Dependances utiles
```bash
yarn add classnames prop-types axios
yarn add sass --dev
```

## Variable d'env
Pour utiliser une variable d'environnement avec CRA, il faut obligatoirement la nommer en commencant par `REACT_APP_`

On créer un `.env.dist` avec le nom des variables d'environnement necessaire mais sans les valeurs. Et on créer un fichier `.env` propre à chaque devellopeur sur sa machine, ces fichiers `.env` ne sont pas commit, ils sont dans le `.gitignore`
> NB: dotenv est inclue dans CRA par defaut

Il est possible grace à dotenv d'avoir des fichiers d'environnement spécifique à l'environnment. En creant par exemple un fichier `.env.production` ou `.env.development`, on peut ainsi donner des variables qui ne seront utilisé que pour tel ou tel environnement.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
