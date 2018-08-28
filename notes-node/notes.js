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

const fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
  };


let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const ajoutNote = (title, body) => {
  // console.log('adding note', title, body);
  // // permet de faire afficher deux chats lorsqu'on écrit : node app.js add --title="deux" --body="chats"
  let notes = fetchNotes();
  let note = {
    title,
    body
  }



  let duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  console.log('get all notes')
}

const getNote = (title) => {
  console.log('Getting note', title);
};

const removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  ajoutNote,
  getAll,
  getNote,
  removeNote
}
