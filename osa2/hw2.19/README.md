### PREPARATIONS, your environment might differ
### `sudo npm install -g json-server`
### `json-server --port=3001 --watch db.json`
### `npm install axios --save`

There is also image resize react-image-resizer
If you are ok with the setup then
### `npm install`
### `npm run server`
### `npm start`

### IF problems accessing the external services
The data is also here for countries is also locally, edit countriesTAPI.js to point either local or remote:
http://localhost:3001/all_name_capital_population_flag_alpha3Code
http://localhost:3001/notes
http://localhost:3001/persons


### ALL HOMEWORKS FOR PART2 BY PAAVO MURANEN
All homeworks in one APP for the Part2 of https://fullstackopen.github.io/osa2
https://fullstackopen.github.io/tehtävät/

### Below all the essential source-files
```
.
├── db.json
├── package.json
├── README.md
├── src
│   ├── App.js
│   ├── components
│   │   ├── AxiosDemos
│   │   │   ├── AxiosDemoNotes.js
│   │   │   ├── AxiosDemoPersons.js
│   │   │   └── AxiosDemos.js
│   │   ├── Clock
│   │   │   └── Clock.js
│   │   ├── Hello
│   │   │   └── HelloWprops.js
│   │   ├── Kurssi
│   │   │   ├── Kurssi.js
│   │   │   ├── Kurssit.js
│   │   │   ├── montakurssia.js
│   │   │   ├── Otsikko.js
│   │   │   ├── Sisalto.js
│   │   │   └── Yhteensa.js
│   │   ├── Notes
│   │   │   ├── AppNotes.js
│   │   │   ├── NoteRow.js
│   │   │   └── services
│   │   │       └── notesTAPI.js
│   │   ├── Notification
│   │   │   ├── Notification.js
│   │   │   └── OkNotification.js
│   │   ├── PhoneBook
│   │   │   ├── AppPhoneBook.js
│   │   │   ├── FilterPersonsByString.js
│   │   │   ├── FormPersonAdd.js
│   │   │   ├── FormPersonsByString.js
│   │   │   ├── PersonRow.js
│   │   │   └── services
│   │   │       └── personsTAPI.js
│   │   ├── RestCountries
│   │   │   ├── AppCountries.js
│   │   │   ├── CountryRow.js
│   │   │   ├── FilterCountriesByString.js
│   │   │   ├── FormCountriesByString.js
│   │   │   ├── hardcodedtest.js
│   │   │   ├── Imagetest.js
│   │   │   └── services
│   │   │       └── countriesTAPI.js
│   │   └── Temperature
│   │       ├── BoilingVerdict.js
│   │       ├── TemperatureCalculator.js
│   │       ├── TemperatureInput.js
│   │       ├── toCelsius.js
│   │       ├── toFahrenheit.js
│   │       └── TryConvert.js
│   ├── datafiles
│   │   ├── Kurssit
│   │   │   ├── halfstackkurssi.js
│   │   │   └── nodekurssi.js
│   │   ├── Notes
│   │   │   └── notes.js
│   │   └── PhoneBook
│   │       └── persons.js
│   ├── index.css
│   └── index.js
├── tree.txt
└── yarn.lock

```
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
