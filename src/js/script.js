// element selectors
const createNoteSectionEl = document.querySelector('.create-note');
const titleInputEl = document.querySelector('.title-input');
const textareaEl = document.querySelector('.note-textarea');
const charsLeftEl = document.querySelector('.chars-left');
const createdNotesEl = document.querySelector('.created-notes');
const noteFormEl = document.querySelector('.note-form');
const closeBtnEl = document.querySelector('.close-btn');

const formSubmit = () => {
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

const createNote = async () => {
  const [title, text] = [titleInputEl.value, textareaEl.value];
  const colors = ['violet', 'green', 'red', 'blue', 'orange'];

  // random number for note background-color and randomRot for note rotation
  const randomColor = Math.floor(Math.random() * colors.length);
  const randomRot =
    Math.ceil(Math.random() * 20) * (Math.round(Math.random()) ? 1 : -1);
  const markup = `
    <article class="note" style="background-color: ${colors[randomColor]}; rotate: ${randomRot}deg">
    <button class="close-btn">X</button>
      <h2 class="note-title">${title}</h2>
      <p class="note-text">
        ${text}
      </p>
    </article>
    `;
  createdNotesEl.insertAdjacentHTML('beforeend', markup);

  // adding event to delete notes and eventListener of that note
  createdNotesEl.addEventListener('click', function (event) {
    if (event.target.className === 'close-btn') {
      event.target.closest('.note').remove();
      event.target.removeEventListener('click', arguments.callee, false);
    }
  });
};

const init = async () => {
  formSubmit();
  charsLeftCount();
};

init();
