const player1 = document.querySelector('.p-one');
const player2 = document.querySelector('.p-two');
const movePlayer1 = document.querySelector('.score-p1');
const movePlayer2 = document.querySelector('.score-p2');
const road = document.querySelector('.road');
const rowDrop = document.querySelectorAll('.row');
const rows = document.querySelector('.rows');
const arrow = document.querySelectorAll('.arrow');
const arDrop = document.querySelectorAll('.ar');

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

  // Wyświetlanie strzałek po przeciągnięciu pionka w odpow.miejsce
  arDrop.forEach((ar, index) => {
    ar.addEventListener('dragover', e => {
      // console.log(e.target);
      showDropArrow(index);
      e.preventDefault();
    });
  });
}

// Pionek czerwony z animacją przeciągania i upuszczania
function createCirkleRed() {
  const cirkleRed = document.createElement('div');
  cirkleRed.className = 'red-disc';
  cirkleRed.draggable = 'true';
  player1.style.backgroundColor = 'bisque';
  road.appendChild(cirkleRed);
  let dragged;
  // cirkleRed.addEventListener('drag', onDragCirkle);

  cirkleRed.addEventListener('dragstart', e => {
    dragged = e.target;
    e.dataTransfer.effectAllowed = 'move';
  });
  // Wyświetlanie strzałek po przeciągnięciu pionka w odpow.miejsce
  arDrop.forEach((ar, index) => {
    ar.addEventListener('dragover', e => {
      // console.log(e.target);
      showDropArrow(index);

      cirkleRed.addEventListener('drop', e=>{
        console.log('drop');
        cirkleRed.classList = 'animation';
      })
      e.preventDefault();
    });
  });

  cirkleRed.addEventListener('dragend', e => {
    e.dataTransfer.dropEffect = 'move';
    // cirkleRed.addEventListener('drop', e=>{
    //   console.log('drop');
    //   cirkleRed.classList.add('.animation');
    // })
    // arrow.style.visibility = 'hidden';
  });

  // cirkleRed.addEventListener('drop', e=>{
  //   cirkleRed.classList.add('.animation');
  // })

  // cirkleRed.addEventListener('dragend', e => {
  //   cirkleRed.style.opacity = '1';
  // });
}

function showPlayer() {
  // createCirkleYellow();
  createCirkleRed();
}

// document.addEventListener('click', e => {
//   // console.log(e.pageX, e.pageY);
//   // console.log(e.clientX, e.clientY)
// });
window.addEventListener('load', showPlayer);
