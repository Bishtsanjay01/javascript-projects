const noteInput = document.getElementById('noteInput');
const addNoteBtn = document.getElementById('addNoteBtn');
const notesContainer = document.getElementById('notesContainer');
const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
const clearAllBtn = document.getElementById('clearAllBtn');
const quoteElement=document.querySelector('.quote')
// Load notes and dark mode on page load
document.addEventListener('DOMContentLoaded', () => {
    const notes = JSON.parse(localStorage.getItem('storedNotes')) || [];
    notes.forEach(noteText => addNoteToDom(noteText));

    const darkMode = localStorage.getItem('darkModeKey');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }
});

// Add note event
addNoteBtn.addEventListener('click', () => {
    const noteText = noteInput.value;
    if (noteText) {
        addNoteToDom(noteText);
        saveNoteToLocalStorage(noteText);
        noteInput.value = '';  // Clear input field
    }
});

// Add note to DOM
function addNoteToDom(noteText) {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');

    const noteP = document.createElement('p');
    noteP.textContent = noteText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';

    // Delete note event
    deleteBtn.addEventListener('click', () => {
        notesContainer.removeChild(noteDiv);
        removeNoteFromLocalStorage(noteText);
    });

    noteDiv.appendChild(noteP);
    noteDiv.appendChild(deleteBtn);
    notesContainer.appendChild(noteDiv);
}

// Save note to localStorage
function saveNoteToLocalStorage(noteText) {
    let notes = JSON.parse(localStorage.getItem('storedNotes')) || [];
    notes.push(noteText);
    localStorage.setItem('storedNotes', JSON.stringify(notes));
}

// Remove note from localStorage
function removeNoteFromLocalStorage(noteText) {
    let notes = JSON.parse(localStorage.getItem('storedNotes')) || [];
    notes = notes.filter(note => note !== noteText);
    localStorage.setItem('storedNotes', JSON.stringify(notes));
}

// Dark mode toggle
toggleDarkModeBtn.addEventListener('click', () => {
    const darkMode = localStorage.getItem('darkModeKey');
    if (darkMode !== 'enabled') {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkModeKey', 'enabled');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkModeKey', 'disabled');
    }
});

// Clear all notes event
clearAllBtn.addEventListener('click', () => {
    notesContainer.innerHTML = '';  // Remove all notes from DOM
    localStorage.removeItem('storedNotes');  // Clear notes from localStorage
});

//fetch random quote
async function fetchRandomQuote(){
try{
    const response=await fetch('http://api.quotable.io/random')
    const data=await response.json();
    const quote=data.content;
    const author=data.author;
    const date=data.dateAdded
    console.log(data)
    quoteElement.innerHTML=`${quote} By:${author} on ${date}`
}catch(error){
  console.log('Error fetching the quote:',error);
}
}
fetchRandomQuote()
