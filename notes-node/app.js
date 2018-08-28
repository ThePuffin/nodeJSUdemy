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
    let note = notes.ajoutNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}
