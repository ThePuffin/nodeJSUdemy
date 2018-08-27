console.log('open notes.js')

// module.exports.age = 25;

// module.exports.addNote = () => {
//     console.log('addNote');
//     return 'New note';
// }

// module.exports.add = (a,b) => {
//  return a+b;
// }

const fs = require('fs')

const ajoutNote = (title, body) => {
  // console.log('adding note', title, body);
  // // permet de faire afficher deux chats lorsqu'on écrit : node app.js add --title="deux" --body="chats"
  let notes = []
  let note = {
    title,
    body
  }

  try {
    let notesString = fs.readFileSync('notes-data.json')
    notes = JSON.parse(notesString)
  } catch (e) {}

  let duplicateNotes = notes.filter(notes => note.title === title);

  if (duplicateNotes.length === 0){
    notes.push(note)
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
  }

  
}

const getAll = () => {
  console.log('get all notes')
}

module.exports = {
  ajoutNote,
  getAll
}
