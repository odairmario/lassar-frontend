# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deploy
To deploy application follow the steps:
### Step 1: Change API entrypoint
Edit `src/constants.tsx` and change API entrypoint. Example:
```tsx
export const API_URL="http://bbb.c3sl.ufpr.br/download/api"
export const WEBSOCKET_ADDRESS="ws://bbb.c3sl.ufpr.br/download/api"
```
### Step 2: build application
#### Step 2.1 Set public_url
before build application we need set base url from frontend, just set the following environment variable:
```
export PUBLIC_URL=/download
```
#### Step 2.2: Build
To build application run the following command:
```
yarn build
```
### Step 3: Copy builded app to /var/www/lassar
```
cp -a build/  /var/www/lassar
```
### Step 4: Configure nginx
on ./nginx/lassar has a configuration template, you can use as base.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
