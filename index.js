const player1 = document.querySelector('.p-one');
const player2 = document.querySelector('.p-two');
const movePlayer1 = document.querySelector('.score-p1');
const movePlayer2 = document.querySelector('.score-p2');
const road = document.querySelector('.road');

function createCirkleYellow() {
  const cirkleYellow = document.createElement('div');
  cirkleYellow.backgroundColor = 'goldenrod';
  cirkleYellow.width = '60px';
  cirkleYellow.height = '60px';
  cirkleYellow.borderRadius = '50%';
  cirkleYellow.style.left = '759px';
  cirkleYellow.style.top = '289px';
  cirkleYellow.style.position = 'absolute';
  road.appendChild(cirkleYellow);
}
function createCirkleRed() {
  const cirkleRed = document.createElement('div');
  cirkleRed.style.backgroundColor = 'red';
  cirkleRed.style.width = '60px';
  cirkleRed.style.height = '60px';
  cirkleRed.style.borderRadius = '50%';
  cirkleRed.style.left = '132px';
  cirkleRed.style.top = '289px';
  //   cirkleRed.style.display= 'flex';
  cirkleRed.style.position = 'absolute';
  //   cirkleRed.style.transform = 'translate(-50%, -50%)'
  road.appendChild(cirkleRed);
}

function showPlayer() {
  createCirkleYellow();
  createCirkleRed();
}

document.addEventListener('click', e => {
  console.log(e.pageX, e.pageY);
});
window.addEventListener('load', showPlayer);
