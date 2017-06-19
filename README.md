# Swim Team
This project will save the world!

Have you ever found yourself running a swim team and not had the correct tools to properly manage your team roster?! Fear not! This tool gives you everything you need to help you keep track of little Timmy's age and what Sally's favorite swimming stroke is. There is even a discrete area for admins to create, update, and delete swimmers from the team!

### Prerequisites
Web browser with ES6 compatibility
Examples: Chrome, Safari
* npm
* bower

### Installing

If you dont want to install to your local machine, you don't have to! I have deployed the app live at:

https://swim-team-6a663.firebaseapp.com/

These instructions have been verified to work on MacOS.
There are a few terminal commands you will need to run to get the app to launch locally on your machine. First though, you will need to clone this repository to your machine and navigate to its folder in your terminal. You will also have to add a file and obtain a firebase API key.

Obtaining your own firebase key is free and easy!
Go to https://www.firebase.com sign in or join. First you will need to create a project. Once its created you will need to edit the rules for the database. 

The rules should look like this:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

Next you will need to get the firebase API keys wich will look something like the following code snippit. The easiest way to find the keys are by going to the project overview and clicking "Add firebase to your web app".

With your keys in hand, make a file in the repository you cloned to your machine and place the keys in the file structured like the following:

`/src/app/api-keys.ts`

```javascript
export const masterFirebaseConfig = {
  apiKey: "AIzaSyCqxHZXXXXXXXX",
  authDomain: "swim-XXXXXXXX.firebaseapp.com",
  databaseURL: "https://swim-XXXXXXXX.firebaseio.com",
  projectId: "swim-XXXXXXXX",
  storageBucket: "swim-XXXXXXXX.appspot.com",
  messagingSenderId: "2419XXXXXXXX"
};
```

Almost done!

Navigate to the root directory, and run the following commands:

* bower install
* npm install
* ng serve

The required packages may take a few minutes to download and install due to the speed of your machine and your Internet connection. The last command should launch the app in your browser! If it doesn't there is likely something incorrect with the keys file so make sure it is in the right place, with the correct file name, and the code in the file follows the correct naming conventions.

## Built With
* Angular CLI
* HTML
* CSS/SASS
* Bootstrap https://getbootstrap.com/
* ES6
* Node
* Bower

## What I Learned
This week was a whirlwind! A whole new framework but I am getting much more comfortable with the MVC model! I learned that Angular has some great built-in features like *ngIf and [(ngModel)] making responsive web design and updaing objects on the fly much easier.

Future iterations of this app would include an asynchronous database, more robust sorting features, stricter limitations on input, and much much better styling.

## Authors
* Spencer Alan

## License
MIT License
Copyright (c) 2017 Spencer Alan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.