const form = document.getElementById('post-form');
const input = document.getElementById('input-box');
const moods = document.querySelectorAll('.mood');
const noteBoard = document.querySelector('.note-board');

let lastNote = null;
let savedNotes = JSON.parse(localStorage.getItem('notes')) || [];

window.addEventListener('DOMContentLoaded', () => {
  savedNotes.forEach(noteObj => createNoteFromData(noteObj));
});

 const moodData = {
    happy: { color: "#ffe74c", emoji: "😄" },
    sad: { color: "#6fa3ef", emoji: "😢" },
    angry: { color: "#f44336", emoji: "😡" },
    relaxed: { color: "#00d580", emoji: "😌" },
    confused: { color: "#b388ff", emoji: "😕" },
    love: { color: "#ff69b4", emoji: "💖" },
  };


moods.forEach((moodDiv) => {
    moodDiv.addEventListener('click', () => {
        const moodKey = moodDiv.classList[1];
        const moodInfo = moodData[moodKey] || moodData['happy'];

        // create note
        const note = document.createElement('div');
        note.classList.add('note-page');

        // Random position within board (adjust as needed)
        const x = Math.random() * 77;
        const y = Math.random() * 75;
        const r = Math.random() < 0.5
            ? Math.floor(Math.random() * 17)         // 0–16
            : Math.floor(Math.random() * 19) + 342;  // 342–360
        note.style.top = `${y}%`;
        note.style.left = `${x}%`;
        note.style.rotate = `${r}deg`;

        // Style & content
        note.style.background = moodInfo.color
        note.innerHTML = `<p class="note-text user-thoughts"></p>
        <div class="emoji">${moodInfo.emoji}</div>
        `;

        noteBoard.appendChild(note);
        lastNote = note;
        makeDraggable(note);
        // attachDeleteFunction(note, { mood, x, y, r, text });

        const noteData = {
            mood: moodKey,
            x, y, r,
            text: '' // initial empty
        };
        // attachDeleteFunction(note, noteData);
        savedNotes.push(noteData);
        localStorage.setItem('notes', JSON.stringify(savedNotes));
    });
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`${input.value} :submited`);
    const thought = input.value.trim(); // trim the before & after blank spaces

    if (thought && lastNote) {
        const thoughtsDiv = lastNote.querySelector('.note-text');
        thoughtsDiv.textContent =  `${thought}`;

        // Update last note's text in savedNotes
        const lastIndex = savedNotes.length - 1;
        savedNotes[lastIndex].text = thought;
        localStorage.setItem('notes', JSON.stringify(savedNotes));
    }
    input.value= '';
});


function makeDraggable(note) {
    let isDragging = false;
    let offsetX, offsetY;

    note.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.offsetX;
        offsetY = e.offsetY;
        note.style.transition = 'none';
        note.style.zIndex = 100;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const boardArea = noteBoard.getBoundingClientRect();
        let left = e.clientX - boardArea.left - offsetX;
        let top = e.clientY - boardArea.top - offsetY;

        // Restrict movement within board
        left = Math.max(0, Math.min(left, boardArea.width - note.offsetWidth));
        top = Math.max(0, Math.min(top, boardArea.height - note.offsetHeight));

        note.style.left = `${left}px`;
        note.style.top = `${top}px`;
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            note.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease'; // restore animation
            note.style.zIndex = ''; // reset z-index
        }
        isDragging = false;
    });

    // Touch Events
  note.addEventListener('touchstart', (e) => {
    isDragging = true;
    const touch = e.touches[0];
    const rect = note.getBoundingClientRect();
    offsetX = touch.clientX - rect.left;
    offsetY = touch.clientY - rect.top;
    note.style.transition = 'none';
    note.style.zIndex = 100;
  });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const touch = e.touches[0];
    const boardArea = noteBoard.getBoundingClientRect();

    let left = touch.clientX - boardArea.left - offsetX;
    let top = touch.clientY - boardArea.top - offsetY;

    left = Math.max(0, Math.min(left, boardArea.width - note.offsetWidth));
    top = Math.max(0, Math.min(top, boardArea.height - note.offsetHeight));

    note.style.left = `${left}px`;
    note.style.top = `${top}px`;
  });

  document.addEventListener('touchend', () => {
    if (isDragging) {
      note.style.transition = 'transform 0.2s ease, box-shadow 0.2s ease';
      note.style.zIndex = '';
    }
    isDragging = false;
  });
}

function createNoteFromData({ mood, x, y, r, text }) {
    const moodInfo = moodData[mood] || moodData['happy'];

    const note = document.createElement('div');
    note.classList.add('note-page');
    note.style.top = `${y}%`;
    note.style.left = `${x}%`;
    note.style.rotate = `${r}deg`;
    note.style.background = moodInfo.color;
    note.innerHTML = `<button class="delete-btn">✖</button>
                     <p class="note-text user-thoughts">${text}</p>
                      <div class="emoji">${moodInfo.emoji}</div>`;

    noteBoard.appendChild(note);
    makeDraggable(note);
    attachDeleteFunction(note, { mood, x, y, r, text });
}


function attachDeleteFunction(note, noteObj) {
    const deleteBtn = note.querySelector('.delete-btn');

    deleteBtn.addEventListener('click', () => {
        note.remove();

        // Remove from savedNotes array
        savedNotes = savedNotes.filter(n =>
            !(n.mood === noteObj.mood &&
              n.x === noteObj.x &&
              n.y === noteObj.y &&
              n.r === noteObj.r &&
              n.text === noteObj.text)
        );
        localStorage.setItem('notes', JSON.stringify(savedNotes));
    });
}

// localStorage.clear()