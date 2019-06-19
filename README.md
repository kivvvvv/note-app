# Note App
This project is one of my showcases of using React, a frontend framework, to illustrate some skills 
that I've learned through out the time that I spent on self-studying in order to switch my career into the web development field. It also acts as a confirmation/verification of my knowledge which will help me to develop the realworld application in the near future.

## Table of Contents
- [Getting Started](#getting-started)
  - [Installations](#installations)
- [Limitations](#limitations)
- [Features](#features)
- [Build With](#build-with)
  - [React Specifics](#react-specifics)
- [What can be improved](#what-can-be-improved)
- [Acknowledgments](#acknowledgments)

## Getting Started

### Installations
1. You can clone this repo or download the zip file. 
2. Whichever method you choose, once you have a copy of it, you have to install every dependencies that this project is needed by running a following command:
`npm install`
3. Finally, to run the dev server, follow by this command: `npm start`

## Limitations
1. This app, by no means, not building to operate in the offline condition. However, it is still usable when it goes offline, because, in fact, it is only one page with multiple components composed together.
2. Although, it can operate when no internet connection. But the font, using by this app is served through CDN, so it requires some connection beforehand.

## Features
The idea of note app itself is pretty simple but very extensible.
This App can:
* __Create__, __Edit__, __Delete__ and/or __mark__ the note as done.
* __Sort__ notes by provided categories.
* For any note that is too long to show, it will be shown in __minimized view__. However, any note detail can be shown in __full view__. Read next.
* All notes can be clicked to show in __full view__, providing all detail of the selected note
* __Fully responsive__ and usable in any variety of display's width and height.
  * Achieved by using *media query* provided in *Material-UI*.
* __Persist__ all notes data across different program state, even when it is closed or reopened.
  * Achieved by using browser's *LocalStorage*

## Build With
- __React 16.8__ - A web framework used
- __Material-UI__ - A Design system, general UI-component and styling solution in __JSS__
- __[React material-ui form validator](https://www.npmjs.com/package/react-material-ui-form-validator)__ - Used to validate Material-UI's forms
- __Moment.js__ - Used to manipulate, parse and format dates
- __uuid__ - Used to conviniently generate UUIDs for the React compenent

### React Specifics
* This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* This app is solely implemented using __React Hooks__. So, there is no class base component.
* The `useReducer` is used and preferred over the `useState` when the state operation can be clearly bundled together.
* The `Promise` is used to simplify some asynchronous task with the `setTimeout`, it improves readability of asynchronous task.

## What can be improved
These following are some parts of the app that can be improved:
* For all asynchronous task can be further implemented using `async`/`await`, which will be a better way to express asynchronousity.
* For some extra transition effect which is not provided by *Material-UI* can be achieved using [React Transition Group](http://reactcommunity.org/react-transition-group/) (to be honest, I tried to use it once and it is pretty confusing. But I think that it can be useful. So, I will try it next time)

## Acknowledgments
Many thanks to __Colt Steele__, the instructor of [The Modern React Bootcamp](https://www.udemy.com/modern-react-bootcamp/); one of my first resources to learn React.

Thanks to __whoever contribute to the React docs__. It is always very initutive to read and learn from the creator.

And finally, thanks to me - myself. To stay resilience all this time. But, it is not yet done but I know what's come next, getting a job. So..? let's go!