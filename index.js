var correctAnswer=document.querySelector('.correctAnswer')
var wrongAnswer=document.querySelector('.wrongAnswer')
var numberOfUses=document.querySelector('.numberOfUses')
var question=document.querySelector('.question')
var correct=0;
var wrong=0;
var gameNumber=10;
var array=[]
var arr=[['Nile river is the longest river','t'],['Vatican is a country','t'],['Melbourne is the capital of Australia','f'],
['Mount Fuji is the highest mountain in Japan','t'],['The skull is the strongest bone in the human body','f'],['The black box of the plane is black','f'],
['Tomato is a fruit','t'],['Cleopatra was Egyptian','f'],['Coffee is made from berries','t'],['If you add the two numbers on the opposite side of the dice, the answer is always seven','t'],
['you can sneeze while sleeping','f']]

    var cevir= Math.floor(Math.random()*arr.length)
    question.innerText=arr[cevir][0]

 function Resetgame(){
    if(correct>5){
        alert('You are a winner')
    }
    else{
        alert('You lost')
    }
    wrong=0;
    wrongAnswer.innerText=wrong;
    correct=0;
    correctAnswer.innerText=correct;
    gameNumber=10
    numberOfUses.innerText=gameNumber



 }
window.onkeypress=function(e){
    gameNumber--
    numberOfUses.innerText=gameNumber
    if(gameNumber==0){
        Resetgame()
    }
    if(e.key=='f' || e.key=='t'){
    if(e.key==arr[cevir][1]){
        correct++
        correctAnswer.innerText=correct
        }
        else{
            wrong++
            wrongAnswer.innerText=wrong


        }

    }
    else{
        alert(`Please enter the correct letter "t or f"`)
    }
    cevir= Math.floor(Math.random()*arr.length)
    question.innerText=arr[cevir][0]
    
}