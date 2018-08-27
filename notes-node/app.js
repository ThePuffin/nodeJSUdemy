console.log("starting app.js!")

const fs = require("fs")
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes.js');

const argv = yargs.argv;

const command = process.argv[2];
console.log("command :", command);
console.log("process :",process.argv);
// permet d'afficher un argument quand on tape ex: npm app list
console.log('yargs :', argv)
//permet d'afficher mieux un argument en le parsing

if (command === "add"){
    console.log('adding a new note ');
    notes.ajoutNote(argv.title, argv.body)
}
else if (command === "list"){
    console.log('listing all notes');
    notes.getAll()
}
else{
    console.log(('command not reconnized'));
}