### HW2.11 PhoneBook uses axios via json-server and split to components: duplicate prevention,phonenumbers and search



## Preparations
### `sudo npm install -g json-server`
### `json-server --port=3001 --watch db.json`

### multiple files supporet for [json-server](https://www.npmjs.com/package/json-server)
  Resources
  http://localhost:3001/notes
  http://localhost:3001/persons

  Home
  http://localhost:3001

### `npm install axios --save`
### `npm install json-server --save`

See package.json for server-script:
### `npm run server`

### `curl http://localhost:3001/notes`
### `curl http://localhost:3001/persons`


### Event loops
Philip Roberts: What the heck is the event loop anyway? JSConf EU [event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
Web Workers is a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. [web worker]https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers

### Web workers and single thread
Web workers - firefox vs. chrome doesn't allow [single thread](https://medium.com/techtrument/multithreading-javascript-46156179cf9a)

### Axios
Promise based HTTP client for the browser and node.js [axios](https://github.com/axios/axios)

### Default create-react-app stuff ...
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
