const player1 = document.querySelector('.p-one');
const player2 = document.querySelector('.p-two');
const movePlayer1 = document.querySelector('.score-p1');
const movePlayer2 = document.querySelector('.score-p2');
const road = document.querySelector('.road');
const rowDrop = document.querySelectorAll('.row');
const rows = document.querySelector('.rows');
const arrow = document.querySelectorAll('.arrow');
let arDrop = document.querySelectorAll('.ar');

// function onDragCirkle(e) {
//   console.log(e.pageX, e.pageY, 'dragging');
// }
function showDropArrow(index) {
  arrow.forEach((a, item) => {
    // console.log(index, item);
    index === item
      ? (a.style.visibility = 'visible')
      : (a.style.visibility = 'hidden');
  });
}

// Pionek żółty z animacją przeciągania i upuszczania
function createCirkleYellow() {
  const cirkleYellow = document.createElement('div');
  cirkleYellow.className = 'yellow-disc';
  cirkleYellow.id = 'yellow-disc';
  cirkleYellow.draggable = 'true';
  player2.style.backgroundColor = 'bisque';
  road.appendChild(cirkleYellow);

  cirkleYellow.addEventListener('dragstart', e => {
    e.dataTransfer.clearData();
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setData('text/plain', e.target.className);
  });

  cirkleYellow.addEventListener('dragend', e => {
    e.dataTransfer.dropEffect = 'move';
  });
}

// Pionek czerwony z animacją przeciągania i upuszczania
function createCirkleRed() {
  const cirkleRed = document.createElement('div');
  cirkleRed.className = 'red-disc';
  cirkleRed.id = 'red-disc';
  cirkleRed.draggable = 'true';
  player1.style.backgroundColor = 'bisque';
  road.appendChild(cirkleRed);

  cirkleRed.addEventListener('dragstart', e => {
    e.dataTransfer.clearData();
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setData('text/plain', e.target.className);
    console.log(e.target.classList);
  });

  cirkleRed.addEventListener('dragend', e => {
    e.dataTransfer.dropEffect = 'move';
  });
}
// Dodanie animacji spadania pionka
function fallCirkle(cirkle, ar, index) {
  cirkle.classList.add('animation');
  
  switch(ar.index){
    case 0: cirkle.style.translate = '-2px'; break;
    case 1: cirkle.clientX = '-20px'; break;
    case 6: cirkle.style.transform = 'translateX(-50em)'; break;
  }
  
  console.log(cirkle.classList, cirkle.clientX, cirkle.clientY);
}

// Wyświetlanie strzałek oraz przeciąganie i upuszczanie pionka
arDrop.forEach((ar, index) => {
  ar.ondragover = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    // Wyświetlanie strzałek po przeciągnięciu pionka w odpow.miejsce
    showDropArrow(index);
  };

  ar.ondrop = e => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    e.dataTransfer.dropEffect = 'move';
    const addDiv = document.getElementById(data);
// addDiv.style.rubyPosition= 'under'
    e.target.appendChild(addDiv);
    console.log(e.clientY, e.clientX);
    // Wywołanie f. spadania pionka
    fallCirkle(addDiv, ar, index);
  };
});

function showPlayer() {
  // createCirkleYellow();
  createCirkleRed();
}

// document.addEventListener('click', e => {
//   // console.log(e.pageX, e.pageY);
//   // console.log(e.clientX, e.clientY)
// });
window.addEventListener('load', showPlayer);
