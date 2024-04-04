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
let yellowScore = [];
let redScore = [];
const results = [
  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [15, 22, 29, 36],
  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14, 21, 28, 35],
  [2, 9, 16, 23],
  [9, 16, 23, 30],
  [16, 23, 30, 37],
  [3, 10, 17, 24],
  [10, 17, 24, 31],
  [17, 24, 31, 38],
  [4, 11, 18, 25],
  [11, 18, 25, 32],
  [18, 25, 32, 39],
  [5, 12, 19, 26],
  [12, 19, 26, 33],
  [19, 26, 33, 40],
  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [20, 27, 34, 41],
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],
  [14, 22, 30, 38],
  [7, 15, 23, 31],
  [15, 23, 31, 39],
  [0, 8, 16, 24],
  [8, 16, 24, 32],
  [16, 24, 32, 40],
  [1, 9, 17, 25],
  [9, 17, 25, 33],
  [17, 25, 33, 41],
  [2, 10, 18, 26],
  [10, 18, 26, 34],
  [3, 11, 19, 27],
  [3, 9, 15, 21],
  [4, 10, 16, 22],
  [10, 16, 22, 28],
  [5, 11, 17, 23],
  [11, 17, 23, 29],
  [17, 23, 29, 35],
  [6, 12, 18, 24],
  [12, 18, 24, 30],
  [18, 24, 30, 36],
  [13, 19, 25, 31],
  [19, 25, 31, 37],
  [20, 26, 32, 38],
];

function checkWinner(x) {
  // if (x === 'red') {
  //   redScore.sort(function (a, b) {
  //     return a - b;
  //   });
  // }
  results.forEach(res => {
    let winner = [];
    res.forEach(el => {
      redScore.forEach(rs => {
        el === rs ? winner.push(el) : null;
      });
    });
    winner.length === 4 ? console.log('winner') : console.log('0');
  });
}

function showDropArrow(index) {
  arrow.forEach((a, item) => {
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

  // Sprawdznie wartości pól kolumny przy starcie anim.
  animation.onstart = checkColumn(index);
  // Wypełnianie tablicy przy wykonywaniu animacji
  animation.oniteration = fillBoard(col, cirkle, animation);
  // Zmiana gracza przy anulowaniu animacji
  animation.oncancel = changePlayer(col, cirkle, '');
  // console.log(index);
}

// Zmiana gracza, zliczanie ruchów, czyszczenie tab.col i strzałek
function changePlayer(col, cirkle, winner) {
  // if (winner === 'red') {
  // road.innerHTML = 'Player 1 wins!';
  // road.style.color = 'red';
  // road.style.fontSize = '28px';
  // } else if (winner === 'yellow') {
  //   road.innerHTML = 'Player 2 wins!';
  //   road.style.color = 'darkyellow';
  //   road.style.fontSize = '28px';
  // }
  if (cirkle.id === 'red-disc') {
    moveP1++;

    movePlayer1.innerHTML = `Move: ${moveP1}`;
    player1.style.backgroundColor = 'antiquewhite';
    createCirkleYellow();
  } else {
    moveP2++;

    movePlayer2.innerHTML = `Move: ${moveP2}`;
    player2.style.backgroundColor = 'antiquewhite';
    createCirkleRed();
  }

  col = [];
  arrow.forEach(a => {
    a.style.visibility = 'hidden';
  });
}

// Wypełnianie tablicy w odpowiedniej koljności
function fillBoard(col, cirkle, animation) {
  var a;
  var b = [];
  boardCirkle.forEach((bc, index) => {
    col.map(c => {
      // Przypisanie pionka do odpowiedniego pola na planszy
      if (bc.innerHTML === '' && index === c) {
        a = bc.appendChild(cirkle);
        b.push(c);
        // Wyłączenie animacji, usunięcie możliwości przeciągania
        animation.cancel();
        cirkle.draggable = false;
      }
    });
  });
  // Dodawanie wyniku do odpowiedniej tablicy wyników
  let c = b.pop();
  a.className === 'red-disc' ? redScore.push(c) : yellowScore.push(c);
  let x;

  // console.log(redScore, yellowScore, b);
  if (redScore.length >= 4 && a.className === 'red-disc') {
    x = 'red';
    checkWinner(x);
  } else if (yellowScore.length >= 4 && a.className === 'yellow-disc') {
    x = 'yellow';
    checkWinner(x);
  }
}

// Sprawdzanie kolumny wrzutu i odwrócenie kolejności
function checkColumn(arIndex) {
  const columns = {
    col1: [0, 7, 14, 21, 28, 35],
    col2: [1, 8, 15, 22, 29, 36],
    col3: [2, 9, 16, 23, 30, 37],
    col4: [3, 10, 17, 24, 31, 38],
    col5: [4, 11, 18, 25, 32, 39],
    col6: [5, 12, 19, 26, 33, 40],
    col7: [6, 13, 20, 27, 34, 41],
  };
  switch (arIndex) {
    case 0:
      col = columns.col1;
      break;
    case 1:
      col = columns.col2;
      break;
    case 2:
      col = columns.col3;
      break;
    case 3:
      col = columns.col4;
      break;
    case 4:
      col = columns.col5;
      break;
    case 5:
      col = columns.col6;
      break;
    case 6:
      col = columns.col7;
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
