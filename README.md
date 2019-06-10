# Note App
This project is one of my showcases of using React, a frontend framework, to illustrate some skills that I've learn through out the time that I spend on self-studying in order to switch my career into the web development field. It also acts as a confirmation/verification of my knowledge which will help me to develop the realworld application in the near future.

## Table of Contents
- [Installations](#installations)
- [Features](#features)
- [Thought Process](#thoughts)

## Installations
You can clone this repo or download the zip file. Whichever method you choose, once you clone or extract it from the zip file, you can run this project by using this command:
### `npm start`

## Features
The Note App can:
1. Create the note by providing note titile and note message.
2. Edit the note message.
3. Edit the note status which represent the completion of the task.
4. Delete the note of choices.
5. Sort the list of notes by last edited, recently created or note status.
6. Hide/show completed note.

<a id='thoughts'></a>

## Challenges
1. At 1# commit, if we think about the state of this application. This following state might well -represented a single note: { id: "1", noteTitle: "note1", noteText: "some text 1" }. I use an object represent a note because I'm not interested the sequence of the data of a note and there will be no reason to sort it.
But for representing all notes, we need an array because the sequence does matter here.
2. At 2#, I foreseen that the state data can be quite complex, right now it involves multiple sub-values and it will only increse as I continue to implement. So instead of using ```useState``` which is not a man of this job, I decided to introduce a ```useReducer``` and ```reducer``` here.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

