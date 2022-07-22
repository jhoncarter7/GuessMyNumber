

// this generate randome number on ? place

let guessNumber = Math.round(Math.random() * 20);

// document.querySelector(".innerscore").textContent

// document.querySelector(".indicator").textContent;

// this function take the message to display on guess position 
const displayMassage = function(message){
    document.querySelector(".indicator").innerHTML = message;
};

let score = 20;
let highscore = 0;

// on clicking the button check it fetch the below data 

document.querySelector(".submitt").addEventListener("click", function (){
    const currentNumber = Number(document.querySelector(".number").value);

    if (!currentNumber) {
        displayMassage("please put a number");
    }
    // when ur answer is correct 
    else if (currentNumber === guessNumber) {
        displayMassage( "yep you did it !");
        score++;
        document.querySelector(".innerscore span").textContent = score;
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".randomNumber").textContent = guessNumber;

        // for adding highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore span").textContent = highscore;
        }
    }
    // when ur answer is not correct 
    else if (currentNumber !== guessNumber) {
     
        if (score > 1) {
    //  below code do both work if value is lesser
    //  than the correct  value it will return 2nd option 
        displayMassage(currentNumber > guessNumber ? "📈 you are to high" : "You are to Low"); 
            score--;
            document.querySelector(".innerscore span").textContent = score;
            document.querySelector("body").style.backgroundColor = "red";
        }
        else {
            displayMassage("You lost the game");
        }
    }}
    )
    

    //     else if(currentNumber < guessNumber) {

    //         if(score > 1){
    //             document.querySelector(".indicator").innerHTML = "you are to low";
    //             score--;
    //             document.querySelector(".innerscore span").textContent = score;
    //             document.querySelector("body").style.backgroundColor = "red";
    //         }
    //         else{
    //             document.querySelector(".indicator").innerHTML = "You lost the game";
    //                 }  
    //     }
    // })


    //  Reset the game button

    document.querySelector(".btn").addEventListener("click", function () {
        score = 20;
        document.querySelector(".innerscore span").textContent = score;
        guessNumber = Math.round(Math.random() * 20);
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector(".number").value = "";
        displayMassage("Guess the number.....");
        document.querySelector(".randomNumber").textContent = "?";
    })