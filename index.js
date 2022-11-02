
let cards =[]
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = '';
let messageEl =document.getElementById('message-el');
let cardsEl =document.getElementById('cards-el');
let sumEl =document.getElementById('sum-el');
let player ={
    name: "Mari",
    chips: 200
}
let playerEl =document.getElementById('player-el');
playerEl.textContent = player.name+": $"+player.chips;


function startGame(){
    isAlive = true;
    let firstCard = getRendomCard();
    let secondCard = getRendomCard();
    cards = [firstCard, secondCard]
    sum = firstCard+secondCard; 
    renderGame();
}

function renderGame(){
    cardsEl.textContent = 'Cards: '
    cards.forEach(card =>cardsEl.textContent += card + " ")
    
    sumEl.textContent = 'Sum: '+sum;
    if (sum<21){
        message = "Do you want to draw a new card?";
    }else if(sum === 21){
        message = "Congrats! You've got Blackjack!"
        hasBlackJack =true;
    }else{
        message = "You're out of the game!"
        isAlive =false;
    }
    messageEl.textContent = message; 
}

function newCard(){
    if(isAlive && hasBlackJack === false){
        let card = getRendomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
   
}

function getRendomCard(){

    let randomCard =  Math.floor(Math.random()*13)+1;
    if(randomCard === 1){
        return 11;
    } else if(randomCard > 10 ){
        return 10;
    }else{
        return randomCard;
    }
}