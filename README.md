# Note App
This project is one of my showcases of using React, a frontend framework, to illustrate some skills 
that I've learn through out the time that I spend on self-studying in order to switch my career into the web development field. It also acts as a confirmation/verification of my knowledge which will help me to develop the realworld application in the near future.

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
These instructions will get you a copy of the project up and running on your local machine for development purpose only.

### Installations
1. You can clone this repo or download the zip file. 
2. Whichever method you choose, once you have a copy of it, you need to install every dependencies that this project is needed by running a following command:
`npm install`
3. Finally, to run the dev server, follow by this command: `npm start`

## Limitations
1. This app, by no means, not building to operate in the offline condition. But it is fully usable when goes offline, because it's only one page with multiple components composed together.
2. Although, it can use when no internet connection. But the font using by this app serves through CDN, so it requires some connection beforehand.

## Features
This App can:
* Create, Edit, Delete and/or mark the note as done.
* Sort notes by provided categories.
* For any note that is too long to show, it will be minimized. But still, any note's detail can be shown in fullview. Read next.
* All notes can be clicked to show in fullview, provide all detail of the selected note
* Fully responsive and usable in any variety of display's width and height.
  * Achieve by using *media query* provided in *Material-UI*.
* Persist all notes data even the app is closed and reopened.
  * Achived by using browser's *LocalStorage*

## Build With
- **React 16.8** - The web framework used
- **Material-UI** - Design system, general UI-component and styling solution in **JSS**
- **[React material-ui form validator]**(https://www.npmjs.com/package/react-material-ui-form-validator) - Used to validate Material-UI's forms
- **Moment.js** - Used to manipulate, parse and format dates
- **uuid** - Used to conviniently generate UUIDs for the React compenent

### React Specifics
* This app is solely implemented using **React Hooks**. So, there is no class base component.
* The `useReducer` is useed and preferred over the `useState` when state operation can be clearly bundled together.
* Some `Promise` async is used to simplify some asynchronous task. Together with `setTimeout` it makes asynchronous task more readable.

## What can be improved
These following are some parts of the app that can be improved:
* For all asynchronous task can be implemented using `async`/`await` which will be a better way to express asynchronousity.
* For some transition effect which is not provided by Material-UI can be achieved using [React Transition Group](http://reactcommunity.org/react-transition-group/) (to be honest, I tried to use it once and it is pretty confusing. But I can feel some power in it, something could possibly be build easily by using it. So, I will try it next time)

## Acknowledgments
The idea of note app itself is pretty simple and general but very very extensible.
Many thanks to **Colt Steele**, the instructor of this course, [The Modern React Bootcamp](https://www.udemy.com/modern-react-bootcamp/); one of my first resources to learn React.
Thanks to **whoever contribute to the React docs**. It is always very initutive to read and learn from the creator.
And finally, thanks to me - myself. To stay resilience all this time. But, it is not yet done but I know what's come next, getting a job. So..? let's go!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

