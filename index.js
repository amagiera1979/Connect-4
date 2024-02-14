const player1 = document.querySelector('.p-one');
const player2 = document.querySelector('.p-two');
const movePlayer1 = document.querySelector('.score-p1');
const movePlayer2 = document.querySelector('.score-p2');
const road = document.querySelector('.road');


function createCirkleYellow() {
  const cirkleYellow = document.createElement('div');
  cirkleYellow.className = 'yellow-disc';
  player2.style.backgroundColor = 'bisque';
  road.appendChild(cirkleYellow);
}
function createCirkleRed() {
  const cirkleRed = document.createElement('div');
  cirkleRed.className = 'red-disc';
  player1.style.backgroundColor = 'bisque';
  road.appendChild(cirkleRed);
}

function showPlayer() {
  // createCirkleYellow();
  // createCirkleRed();
}

document.addEventListener('click', e => {
  console.log(e.pageX, e.pageY);
});
window.addEventListener('load', showPlayer);
