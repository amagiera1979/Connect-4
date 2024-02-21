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
  cirkleYellow.draggable = 'true';
  player2.style.backgroundColor = 'bisque';
  road.appendChild(cirkleYellow);
  let dragged;
  // cirkleRed.addEventListener('drag', onDragCirkle);

  cirkleYellow.addEventListener('dragstart', e => {
    dragged = e.target;
    e.dataTransfer.effectAllowed = 'move';
  });
}

// Pionek czerwony z animacją przeciągania i upuszczania
function createCirkleRed() {
  const cirkleRed = document.createElement('div');
  cirkleRed.className = 'red-disc';
  cirkleRed.draggable = 'true';
  player1.style.backgroundColor = 'bisque';
  road.appendChild(cirkleRed);


  cirkleRed.addEventListener('dragstart', e => {
    e.dataTransfer.clearData();
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.dropEffect = 'move';
    e.dataTransfer.setData('text/plain', e.target.className);
    // console.log(e.target.className, e.dataTransfer);
  });
  

  cirkleRed.addEventListener('dragend', e => {
    e.dataTransfer.dropEffect = 'move';
  });
}

// Wyświetlanie strzałek po przeciągnięciu pionka w odpow.miejsce
arDrop.forEach((ar, index) => {
    
  ar.ondragover = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    showDropArrow(index);
  };

  ar.ondrop = e => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    console.log(e.target, data);
    e.dataTransfer.dropEffect = 'move';
    const addDiv = document.getElementsByClassName(data);
   
    e.target.appendChild(addDiv);
    // e.ar.appendChild(document.getElementsByClassName(data))
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
