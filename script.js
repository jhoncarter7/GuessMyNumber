


let guessNumber = document.querySelector(".randomNumber").textContent = Math.round(Math.random()*20);

// document.querySelector(".innerscore").textContent

// document.querySelector(".indicator").textContent;

let score = 20;

document.querySelector(".submitt").addEventListener("click", function(){
    const currentNumber = Number(document.querySelector(".number").value);
   
    if(!currentNumber){
        document.querySelector(".indicator").textContent = "please put the number";
    }
    else if(currentNumber === guessNumber){
        document.querySelector(".indicator").textContent = "yep you did it !" ;
        score++;
        document.querySelector(".innerscore span").textContent = score;
    }
     else if (currentNumber > guessNumber){
        document.querySelector(".indicator").innerHTML = "📈 you are to high";
        score--;
        document.querySelector(".innerscore span").textContent = score;
     }
     else if(currentNumber < guessNumber){
        document.querySelector(".indicator").innerHTML = "📉 you are to low";
        score--;
        document.querySelector(".innerscore span").textContent = score;
     }
})