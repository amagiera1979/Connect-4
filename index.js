const player1 = document.querySelector('.p-one');
const player2 = document.querySelector('.p-two');
const movePlayer1 = document.querySelector('.score-p1');
const movePlayer2 = document.querySelector('.score-p2');
const road = document.querySelector('.road');
const rowDrop = document.querySelectorAll('.row');
const rows = document.querySelector('.rows');
const arrow = document.querySelectorAll('.arrow');
let arDrop = document.querySelectorAll('.ar');
const boardCirkle = document.querySelectorAll('board-cirkle');

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
 
  // if(index===1){
  //   cirkle.style.transform = 'translateX(-3px)'
  //  } 
  //  if(index===2){
  //   cirkle.style.transform = 'translateX(-5px)'
  //  }
  //  if(index===3){
  //   cirkle.style.transform = 'translateX(-9px)'
  //  }
  //  if(index===4){
  //   cirkle.style.transform = 'translateX(-12px)'
  //  }
  //  if(index===5){
  //   cirkle.style.transform = 'translateX(-20px)'
  //  }
  //  if(index===6){
  //   cirkle.style.transform = 'translateX(-25px)'
  //  }
 
  cirkle.classList.add('animation');
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
  
    e.target.appendChild(addDiv);
    // addDiv.style.clientX= '20px'
  //  if(index===1){ 
  //   addDiv.style.left ='280px'
  //     }else if(index===2){
  //   addDiv.style.left ='334px';
  // }
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
