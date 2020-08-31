This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It consists of a simple React app and an express.js backend with two API endpoints.

## Local Installation

Clone the repository. Run `yarn install` in the root directory. Create a `.env` file containing the following:
```
USERNAME=your-chosen-username
PASSWORD=your-chosen-password
```

## Running the project

Use `yarn start` to run the React app, it will be accessible at `http://localhost:3000`. Use `yarn start-server` to run the API, it will be accessible at `http://localhost:4000`.

## Using the app

Use your `USERNAME` and `PASSWORD` and input any card number. Click submit to display the mock data from the API.

## API Description

### GET /check-status

No payload. Returns the string "API running!".

### GET /card/:cardNumber

No payload. Set the Authorization Header to `Basic: { USERNAME:PASSWORD encoded in base64 }`. Returns
```
{
  validTill: string // format D.M.YYYY
  cardDetails: string
}
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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
