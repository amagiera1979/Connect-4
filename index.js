const player1 = document.querySelector('.p-one');
const player2 = document.querySelector('.p-two');
const movePlayer1 = document.querySelector('.score-p1');
const movePlayer2 = document.querySelector('.score-p2');
const road = document.querySelector('.road');
const rowDrop = document.querySelectorAll('.row');
const rows = document.querySelector('.rows');
const arrow = document.querySelectorAll('.arrow');
let arDrop = document.querySelectorAll('.ar');
const boardCirkle = document.querySelectorAll('.board-cirkle');
let col = [];
let moveP1 = 0;
let moveP2 = 0;
const results = {
  columns: {
    col1: [0, 7, 14, 21, 28, 35],
    col2: [1, 8, 15, 22, 29, 36],
    col3: [2, 9, 16, 23, 30, 37],
    col4: [3, 10, 17, 24, 31, 38],
    col5: [4, 11, 18, 25, 32, 39],
    col6: [5, 12, 19, 26, 33, 40],
    col7: [6, 13, 20, 27, 34, 41],
  },
  rows: {
    row1: [0, 1, 2, 3, 4, 5, 6],
    row2: [7, 8, 9, 10, 11, 12, 13],
    row3: [14, 15, 16, 17, 18, 19, 20],
    row4: [21, 22, 23, 24, 25, 26, 27],
    row5: [28, 29, 30, 31, 32, 33, 34],
    row6: [35, 36, 37, 38, 39, 40, 41],
  },
  rightSkewed: {
    rs1: [14, 22, 30, 38],
    rs2: [7, 15, 23, 31, 39],
    rs3: [0, 8, 16, 24, 32, 40],
    rs4: [1, 9, 17, 25, 33, 41],
    rs5: [2, 10, 18, 26, 34],
    rs6: [3, 11, 19, 27],
  },
  leftSkewed: {
    ls1: [3, 9, 15, 21],
    ls2: [4, 10, 16, 22, 28],
    ls3: [5, 11, 17, 23, 29, 35],
    ls4: [6, 12, 18, 24, 30, 36],
    ls5: [13, 19, 25, 31, 37],
    ls6: [20, 26, 32, 38],
  },
};

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
    // console.log(e.target.classList);
  });

  cirkleRed.addEventListener('dragend', e => {
    e.dataTransfer.dropEffect = 'move';
  });
}

// Dodanie animacji spadania pionka
function fallCirkle(cirkle, index) {
  // cirkle.classList.add('animation');
  const animation = cirkle.animate(
    [{ transform: `translateY(0)` }, { transform: `translateY(470px)` }],
    { duration: 5000, ease: 'linear' }
  );
  // animation.pause();
  console.log(index, cirkle);
  animation.onstart = checkColumn(index);
  // console.log(col);

  animation.oniteration = fillBoard(col, cirkle, animation);
  animation.oncancel = changePlayer(col, cirkle);
}

function changePlayer(col, cirkle) {
  if(cirkle.id === 'red-disc'){
    moveP1+=1;
    player1.style.backgroundColor = 'antiquewhite'
    createCirkleYellow();
  }else{
    moveP2++;
    player2.style.backgroundColor = 'antiquewhite';
    createCirkleRed();
  }
}

function fillBoard(col, cirkle, animation) {
  boardCirkle.forEach((bc, index) => {
    col.map(c => {
      if (bc.innerHTML === '' && index === c) {
        bc.appendChild(cirkle);
        animation.cancel();
        cirkle.draggable = false;

        // console.log(index)
      }
    });
  });
}

function checkColumn(arIndex) {
  switch (arIndex) {
    case 0:
      col = results.columns.col1;
      break;
    case 1:
      col = results.columns.col2;
      break;
    case 2:
      col = results.columns.col3;
      break;
    case 3:
      col = results.columns.col4;
      break;
    case 4:
      col = results.columns.col5;
      break;
    case 5:
      col = results.columns.col6;
      break;
    case 6:
      col = results.columns.col7;
      break;
    default:
      break;
  }

  col.reverse();
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

    e.target.appendChild(addDiv);

    // Wywołanie f. spadania pionka
    fallCirkle(addDiv, index);
  };
});

function showPlayer() {
  // createCirkleYellow();
  createCirkleRed();
  movePlayer1.innerHTML = `Move: ${moveP1}`;
  movePlayer2.innerHTML = `Move: ${moveP2}`;
}

window.addEventListener('load', showPlayer);
