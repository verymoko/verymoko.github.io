let addedText = 'не';
let character = ' ';

function spacePosition(character) {
  let initialText = document.getElementById('textarea').value;

  let indexes = [];
  let index = initialText.indexOf(character, 0);

  while (index !== -1) {
    indexes.push(index);
    index = initialText.indexOf(character, index + 1);
  }

  let randomCharacterPosition = indexes[Math.floor(Math.random() * indexes.length)];
  let newText = initialText.slice(0, randomCharacterPosition) + ' ' + addedText + initialText.slice(randomCharacterPosition);

  document.getElementById('textarea').value = newText;
}
