let noteTitle = document.querySelector('.note-title')
let noteText = document.querySelector('.note-textarea')
let saveNoteBtn = document.querySelector('.save-note')
let newNoteBtn = document.querySelector('.new-note')
let deleteNoteBtn = document.querySelector('.delete-note')
let noteList = document.querySelectorAll('.list-container .list-group')
let notesList = document.getElementById('notes-list')

// Show an element
const show = (elem) => {
  elem.style.display = 'inline'
}

// Hide an element
const hide = (elem) => {
  elem.style.display = 'none'
}

// activeNote is used to keep track of the note in the textarea
let activeNote = {}

const getNotes = () => {
  fetch('/api/notes', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error('Error fetching /api/notes')
      }
    })
    .then((notes) => {
      notesList.innerHTML = notes.map(
        (note) =>
          `<li class="list-group-item">${note.text}<i class="fas fa-trash text-danger delete-note"></i></li>`
      )
    })
    .catch((error) => {
      console.error(error)
    })
}

const saveNote = (note) =>
  fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  })

const deleteNote = (id) =>
  fetch(`/api/notes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })

const renderActiveNote = () => {
  hide(saveNoteBtn)

  if (activeNote.id) {
    noteTitle.setAttribute('readonly', true)
    noteText.setAttribute('readonly', true)
    noteTitle.value = activeNote.title
    noteText.value = activeNote.text
  } else {
    noteTitle.removeAttribute('readonly')
    noteText.removeAttribute('readonly')
    noteTitle.value = ''
    noteText.value = ''
  }
}

window.onload = () => getNotes()
