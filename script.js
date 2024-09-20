const boxes = document.querySelectorAll('.box');
const resetBtn = document.querySelector('.reset');
const mesage = document.querySelector('.msg');
const msgContainer = document.querySelector('.msgContainer');

const newGame = document.querySelector('.newGame');


 let turnO = true;
 let winingPattan = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],
   ];
   
   const resetGame = ()=> {
     enableBoxes();
     msgContainer.classList.add('hide');
   }
   
 boxes.forEach((box)=> {
   box.addEventListener('click',()=> {
     if (turnO) {
       box.innerHTML = 'o';
       turnO = false;
     } else {
       box.innerHTML = 'x';
       turnO = true;
     };
     box.disabled = true;
     checkWinner();
   });
 });
 
 const disableBoxes = ()=> {
   for(let box of boxes){
     box.disabled = true;
   }
 };
 
 const enableBoxes = () => {
   for (let box of boxes) {
     box.disabled = false;
     box.innerText = '';
   }  
 };
 
 const showWinner = (winner)=> {
   mesage.innerText = `🎉🎉  Congratulations, Winner is ${winner}`;
   msgContainer.classList.remove('hide');
  disableBoxes();
 }
 let checkWinner = ()=> {
   for (let patten of winingPattan){
     let pos1 = boxes[patten[0]].innerText;
     let pos2 =  boxes[patten[1]].innerText;
     let pos3 =  boxes[patten[2]].innerText;
     
     if (pos1!="" && pos2!="" && pos3!="") {
       if (pos1 === pos2 && pos2 === pos3) {
         showWinner(pos1);
       } 
       }
     }
   }
   resetBtn.addEventListener('click',resetGame);
   newGame.addEventListener('click',resetGame);