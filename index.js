const player1 = document.querySelector('.p-one');
const player2 = document.querySelector('.p-two');
const movePlayer1 = document.querySelector('.score-p1');
const movePlayer2 = document.querySelector('.score-p2');
const road = document.querySelector('.road');

function onDragCirkle(e) {
  console.log(e.pageX, e.pageY, 'dragging');
}

function createCirkleYellow() {
  const cirkleYellow = document.createElement('div');
  cirkleYellow.className = 'yellow-disc';
  cirkleYellow.draggable = 'true'
  player2.style.backgroundColor = 'bisque';
  road.appendChild(cirkleYellow);
}
function createCirkleRed() {
  const cirkleRed = document.createElement('div');
  cirkleRed.className = 'red-disc';
  cirkleRed.draggable = 'true'
  player1.style.backgroundColor = 'bisque';
  road.appendChild(cirkleRed);
  let dragged;
  // cirkleRed.addEventListener('drag', onDragCirkle);

  cirkleRed.addEventListener('dragstart', e => {
    dragged = e.target;
    e.dataTransfer.effectAllowed ='move'
    console.log(e.target, e.dataTransfer)
    // cirkleRed.style.opacity = '.9';
  });
  cirkleRed.addEventListener('dragend', e =>{
    e.dataTransfer.dropEffect ='move'
  })

  // cirkleRed.addEventListener('dragend', e => {
  //   cirkleRed.style.opacity = '1';
  // });
}

function showPlayer() {
  // createCirkleYellow();
  createCirkleRed();
}

// document.addEventListener('click', e => {
//   console.log(e.pageX, e.pageY);
// });
window.addEventListener('load', showPlayer);
