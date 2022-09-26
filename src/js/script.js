'use strict';

// element selectors
const createNoteSectionEl = document.querySelector('.create-note');
const titleInputEl = document.querySelector('.title-input');
const textareaEl = document.querySelector('.note-textarea');
const charsLeftEl = document.querySelector('.chars-left');
const createdNotesEl = document.querySelector('.created-notes');
const noteFormEl = document.querySelector('.note-form');

const eventListeners = () => {
  noteFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    createNote();

    // reseting input
    titleInputEl.value = '';
    textareaEl.value = '';
  });
};

const charsLeftCount = () => {
  const maxNoteLength = Number(textareaEl.getAttribute('maxlength'));
  charsLeftEl.innerHTML = maxNoteLength;
  textareaEl.addEventListener('input', () => {
    const text = textareaEl.value;
    const textLength = maxNoteLength - text.length;
    charsLeftEl.innerHTML = textLength;
  });
};

const createNote = () => {
  const [title, text] = [titleInputEl.value, textareaEl.value];

  const markup = `
    <article class="note">
      <h2 class="note-title">${title}</h2>
      <p class="note-text">
        ${text}
      </p>
    </article>
    `;
  createdNotesEl.insertAdjacentHTML('beforeend', markup);
};

const init = async () => {
  eventListeners();
  charsLeftCount();
};

init();
