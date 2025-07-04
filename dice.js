const dice=document.querySelector('.dice-img');
const rollButton=document.querySelector('.btn-roll');
const holdButton=document.querySelector('.btn-hold');
const newGameButton=document.querySelector('.btn-new');
const player0Score=document.querySelector('#score1');
const player1Score=document.querySelector('#score2');
const player0Current=document.querySelector('#current-0');
const player1Current=document.querySelector('#current-1');
const player0=document.querySelector('.player-0');
const player1=document.querySelector('.player-1');
const player0Name=document.querySelector('#name1');
const player1Name=document.querySelector('#name2');

let currentScore=0;
let activePlayer=0;
let playing=true;
function switchPlayer(){
    currentScore=0;
    switch(activePlayer){
        case 0:
            activePlayer=1; break;
        default: activePlayer=0;break;
    }
    player0Current.textContent=0;
    player1Current.textContent=0;
    player0.classList.toggle('active');
    player1.classList.toggle('active');
    dice.style.display='none';
   
}
function rollDice(){
    if(playing){
        const diceNumber=Math.trunc(Math.random()*6)+1;
        dice.src=`dice-${diceNumber}.jpg`;
        dice.style.display='block';
        if(diceNumber!==1){
            currentScore+=diceNumber;
            document.querySelector(`#current-${activePlayer}`).textContent=currentScore;
        }else{
            switchPlayer();
        }
    }
}
function holdScore(){
    if(playing){
        const currentplayerscore=document.querySelector(`#current-${activePlayer}`);
        const playerscore=document.querySelector(`#score${activePlayer + 1}`);
        currentplayerscore.textContent=0;
        dice.style.display='none';
        playerscore.textContent=parseInt(playerscore.textContent)+currentScore;
        if(parseInt(playerscore.textContent)>=100){
            playing=false;
            document.querySelector(`.player-${activePlayer}`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}`).classList.remove('active');
            document.querySelector(`#name${activePlayer + 1}`).textContent="Winner";
        }
        switchPlayer();
        
    }
   
}
rollButton.addEventListener('click',rollDice);
holdButton.addEventListener('click',holdScore);
newGameButton.addEventListener('click',function(){
    currentScore=0;
    activePlayer=0;
    playing=true;
    player0Score.textContent=0;
    player1Score.textContent=0;
    player0Current.textContent=0;
    player1Current.textContent=0;
});
player0.classList.remove('winner');
player1.classList.remove('winner');
player0.classList.add('active');
player1.classList.remove('active');
player0Name.textContent='Player 1';
player1Name.textContent='Player 2';
dice.style.display='none';
player0Score.textContent=0;
player1Score.textContent=0;
player0Current.textContent=0;
player1Current.textContent=0;
player0.classList.remove('winner');
player1.classList.remove('winner'); 
player0.classList.add('active');
player1.classList.remove('active'); 
player0Name.textContent='Player 1';
player1Name.textContent='Player 2';
      