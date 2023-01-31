// console.log(document.querySelector('.guess-message').textContent); 
// document.querySelector('.guess-message').textContent='Right!' ;
// // console.log(document.querySelector('.guess-message').textContent); 
// console.log(document.querySelector('.question').textContent); 
// document.querySelector('.question').textContent=7;
// document.querySelector('.score').textContent=11;
// console.log(document.querySelector('.number-input').value);
// document.querySelector('.number-input').value=13;

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let higherScore=0;

const displayGuessMessange=function(message){
    document.querySelector('.guess-message').textContent=message;
}


document.querySelector(".check").addEventListener('click',function(){
    const guessingNumber=Number(document.querySelector('.number-input').value);
    console.log(guessingNumber,typeof guessingNumber);
//no input
 if(!guessingNumber){
    // document.querySelector('.guess-message').textContent='Input some number!'
    displayGuessMessange('Input some number!');
    //plear win
 }else if(guessingNumber===secretNumber){
    // document.querySelector('.guess-message').textContent='Right!'
    displayGuessMessange('Right!');
    document.querySelector('.question').textContent=secretNumber;
    document.querySelector('body').style.backgroundColor='rgb(9, 250, 21)';
    document.querySelector('.question').style.width='50rem'

    if(score>higherScore){
        higherScore=score;
        document.querySelector('.highscore').textContent=higherScore;
    }
    //number from input is wrong
 }else if(guessingNumber!=secretNumber){
    if(score>1){
        // document.querySelector('.guess-message').textContent=guessingNumber>secretNumber?'Too much!':'Too lass!';
        displayGuessMessange(guessingNumber>secretNumber?'Too much!':'Too lass!');
        score--;
        document.querySelector('.score').textContent=score;}
        else{
            // document.querySelector('.guess-message').textContent='Game over!'
            displayGuessMessange('Input some number!');
            document.querySelector('.score').textContent=0;
        }
 }
//  //too higher
//     else if(guessingNumber>secretNumber){

//     if(score>1){
//     document.querySelector('.guess-message').textContent='Too much!'
//     score--;
//     document.querySelector('.score').textContent=score;}
//     else{
//         document.querySelector('.guess-message').textContent='Game over!'
//         document.querySelector('.score').textContent=0;
//     }

//     //too low

//  }else if(guessingNumber<secretNumber){
//     if(score>1){
//     document.querySelector('.guess-message').textContent='Too lass!'
//     score--;
//     document.querySelector('.score').textContent=score;
//  }else{
//     document.querySelector('.guess-message').textContent='Game over!'
//     document.querySelector('.score').textContent=0;
// }
}
);
document.querySelector('.again').addEventListener('click',function(){
    secretNumber=Math.trunc(Math.random()*20)+1;
score=20;
document.querySelector('body').style.backgroundColor='black';
displayGuessMessange('Input some number!');
document.querySelector('.question').textContent='???';
document.querySelector('.question').style.width='25rem';
document.querySelector('.score').textContent=score;
document.querySelector('.number-input').value='';
});