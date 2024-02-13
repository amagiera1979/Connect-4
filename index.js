const player1 = document.querySelector('.p-one');
const player2 = document.querySelector('.p-two');
const movePlayer1 = document.querySelector('.score-p1');
const movePlayer2 = document.querySelector('.score-p2');

function createCirkleYellow() {
  const cirkleYellow = document.createElement('div');
  cirkleYellow.backgroundColor = 'rgb(241, 207, 10);';
  cirkleYellow.width = '60px';
  cirkleYellow.height = '60px';
  cirkleYellow.borderRadius = '50%';
  body.appendChild(cirkleYellow);
}
function createCirkleRed() {
  const cirkleRed = document.createElement('div');
  cirkleRed.style.backgroundColor = 'red';
  cirkleRed.style.width = '60px';
  cirkleRed.style.height = '60px';
  cirkleRed.style.borderRadius = '50%';
  body.appendChild(cirkleRed);
}

function showPlayer() {
  player1.style.backgroundColor = 'rgb(212, 197, 177);';
  player1.style.border = '2px solid rgb(165, 129, 111);';
  createCirkleRed();
  console.log(cirkleRed);
}

document.addEventListener('click', e => {
  console.log(e.clientX, e.currentTarget, e.type, e.timeStamp, e.screenX);
});
window.addEventListener('load', showPlayer);
