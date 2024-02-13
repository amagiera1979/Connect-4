const player1 = document.querySelector('.p-one');
const player2 = document.querySelector('.p-two');
const movePlayer1 = document.querySelector('.score-p1');
const movePlayer2 = document.querySelector('.score-p2');



function createCirkleRed() {
    const cirkleYellow = document.createElement('div');
    cirkleYellow.backgroundColor = 'rgb(241, 207, 10);';
    cirkleYellow.width = '60px';
    cirkleYellow.height = '60px';
    cirkleYellow.borderRadius = '50%';
}
function createCirkleYellow() {
    const cirkleRed = document.createElement('div');
    cirkleRed.style.backgroundColor = 'red';
    cirkleRed.style.width = '60px';
    cirkleRed.style.height = '60px';
    cirkleRed.style.borderRadius = '50%';
}

function showPlayer(){
   createCirkleRed();
  


}

window.addEventListener('click', e=>{
    console.log(e.target, e.currentTarget)
   })
window.addEventListener('load', showPlayer)