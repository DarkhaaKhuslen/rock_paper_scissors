var cPoint = document.querySelector('.cPoint');
var pPoint = document.querySelector('.pPoint');
var cChoice = document.querySelector('.cChoice');
var pChoice = document.querySelector('.pChoice');
var winner = document.querySelector('.winner');
var computerChoice; 
var cCount=0, pCount=0;
console.log(cPoint);
function player(playerChoice){
    //alert(playerChoice);
    pChoice.innerText="Player choice:"+playerChoice;
    // computer -> 0,1,2 -> 0->scissors,1->rock,2->paper
    var random= Math.floor(Math.random()*3);
    console.log(random);
    if(random==0){
        cChoice.innerText = "computer choice:scissors";
        computerChoice="scissors";
    }else if (random == 1){
        cChoice.innerText="computer choice: paper"
        computerChoice="rock";
    }else{
        cChoice.innerText= "computer choice: rock"
        computerChoice="paper";
    }
    // winner p-> rock: scissors, paper: rock,scissors: paper 
    if(playerChoice=="rock" && computerChoice=="scissors"
        ||(playerChoice=="paper" && computerChoice=="rock")
        ||(playerChoice=="rock" && computerChoice=="scissors")
    ){
        winner.innerText="winner:player";
        pCount++;
        pCount.innerText="player:"+pCount;
    }else if( playerChoice== computerChoice){
        winner.innerText="winner:Tie";
    }else{
        winner.innerText="winner:computer";
        cCount++;
    }
    cPoint.innerText="computer:"+cCount;
}
function restart(){
    cPoint.innerText="Computer: 0";
    cCount=0;
    pChoice.innerText="Player choice:";
    cChoice.innerText="computer choice";
    winner.innerText="winnner";
    pPoint.innerText="player: 0";
    pCount=0;
}