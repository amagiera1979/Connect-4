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

function showDropArrow(index) {
  arrow.forEach((a, item) => {
    // console.log(index, item);
    index === item
      ? (a.style.visibility = 'visible')
      : (a.style.visibility = 'hidden');
  });
}

// function fillBoardByCirkle(cirkle, arIndex) {
//   // let fieldTable = [];
//   // boardCirkle.forEach((bc, index) => {
//   //  fieldTable.push(bc[0]);
//   // //  console.log(fieldTable)
//   // });
//   // console.log(fieldTable)
//   // cirkle.classList.remove('animation');
//   if (arIndex === 0) {
//     if(boardCirkle.id ===36 && boardCirkle.innerHTML===''){
//       console.log(boardCirkle.id)
//       boardCirkle.appendChild(cirkle)
//       cirkle.classList.remove('animation');
//     }
//     // boardCirkle.appendChild(cirkle);

//     // cirkle.classList.remove('animation');
//   }
  
// }

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
  cirkle.classList.add('animation');
  console.log(index, cirkle);
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
    //  fillBoardByCirkle(addDiv, index);
   
    };

});

boardCirkle.forEach((bc, index)=>{
  const red = document.getElementById('red-disc')
  if(index===35&&bc.innerHTML===''){
    bc.appendChild(red)
    console.log(index)
    red.className.remove('animation')
    // bc.innerHTML = red;
  }
})

function showPlayer() {
  // createCirkleYellow();
  createCirkleRed();
}

window.addEventListener('load', showPlayer);
