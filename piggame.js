//get access to global score element
let score0 = document.getElementById("score--0");
let score1 = document.getElementById("score--1");
let current0 = document.getElementById('current--0');
let current1 = document.getElementById('current--1');
let dice = document.querySelector('.dice');
let rollDice = document.querySelector('.btn--roll');
let holdbtn = document.querySelector('.btn--hold');
let newbtn = document.querySelector('.btn--new');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let name0 = document.getElementById('name--0');
let name1 = document.getElementById('name--1');
let current;
let scores;
let activePlayer;


//initilize to zero
let newgame = function(){
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    name0.textContent = 'player 1';
    name1.textContent = 'player 2';

    dice.classList.add('hidden');
    holdbtn.classList.remove('hidden');
    rollDice.classList.remove('hidden');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');

    current = 0;
    scores = [0,0];
    activePlayer = 0;
}

let switchPlayer = function(){
    current = 0;
    document.getElementById(`current--${activePlayer}`).textContent = current;
    activePlayer = activePlayer === 0? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}
newgame();
//implement function called rolldice button
rollDice.addEventListener('click',function(){
    //1.generate a random number between 1 and 6
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    
    //2.display the corresponding dice image with randomnumber
    dice.classList.remove('hidden');
    dice.src = `C:/Users/HP/Documents/pig-game/dice${diceNumber}.png`;

    //3.if the random number is not 1 then add it to active player current score
    if(diceNumber!=1){
    current += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent = current;
    
    }

    //4.if random number is 1 then rest current score to 0 and change the active player
    else{
        switchPlayer();
    }
})


//implementing hold button
holdbtn.addEventListener('click',function(){
    //1.current is added to global score of active player
    scores[activePlayer] += current;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer]>=100){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        document.getElementById(`name--${activePlayer}`).textContent = 'Winner!!!';
        dice.classList.add('hidden');
        rollDice.classList.add('hidden');
        holdbtn.classList.add('hidden');
    }

    //2.current of active player become zero and switch player
    switchPlayer();

})

newbtn.addEventListener('click',newgame);

