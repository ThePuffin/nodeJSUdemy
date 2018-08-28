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
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  const allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note => {
    notes.logNote(note)
  });
} else if (command === 'read') {
  
  let note = notes.getNote(argv.title);
  if (note !== undefined) {
    console.log('Note reading ...');
    console.log('--');
    console.log(`Title: ${argv.title}`);
    console.log(`Body: ${note}`);
  } else {
    console.log('Note does not exist');
  }
} else if (command === 'remove') {
  let noteRemove = notes.removeNote(argv.title);
  let message = noteRemove?'note was removed' : 'note not found';
  console.log(message); 
} else {
  console.log('Command not recognized');
}
