# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code 

## project 4

```javascript

const randomNumber = parseInt(Math.random()*100 +1);

    const submit = document.querySelector("#subt");
    const userInput = document.querySelector("#guessField");
    const guessSlot = document.querySelector(".guesses");
    const remaining = document.querySelector(".lastResult");
    const loeOrHi = document.querySelector(".lowOrHi");
    const startOver = document.querySelector(".resultParas");

    const p = document.createElement("p")

    let prevGuess = [];
    let numGuess = 1;

    let playGame = true;

    if (playGame) {
        submit.addEventListener("click" , function (e) {
            e.preventDefault();
            const guess = parseInt(userInput.value);
            console.log(guess);
        });
    }

    function validateGuess(guess){
        if(isNan(guess)){
            alery("please enter a valid number")
        } else if(guess < 1){
           alery("please enter a number more than 1") 
        } else if(guess < 100){
           alery("please enter a number less than 100") 
        } else {
            prevGuess.push(guess)
            if(numGuess === 11){
                displayGuess(guess)
                displayMessage(`Game over. Random number was ${randomNumber} `)
                endGame()
            } else {
                displayGuess(guess)
                checkGuess(guess)
            }
        }
    }

    function checkGuess(guess){
        if(guess === randomNumber){
            displayMessage(`you guessed it right`);
            endGame();
        } else if (guess < randomNumber){
            displayMessage(`Number is TOOO low`);
        } else if (guess > randomNumber){
            displayMessage(`Number is TOOO high`);
    }
}


    function displayGuess(guess){
        userInput.value = "";
        guessSlot.innerHTML += `${guess},  `;
        numGuess++;
        remaining.innerHTML = `${11 - numGuess}`;
    }

    function displayMessage(message){
        loeOrHi.innerHTML = `<h2>${message}</h2>`

    }

    function endGame(){
        userInput.value = ""
        userInput.setAttribute("disabled", "")
        p.classList.add("button")
        p.innerHTML = `<h2 id="newGame"> start new game</h2>`;
        startOver.appendChild(P)
        playGame() = false;
        newGame();
    }

    function newGame(){
        const newGameButton = document.querySelector("#newGame")
        newGameButton.addEventListener("click", function(e){
            randomNumber = parseInt(math.random() * 100 + 1);
            prevGuess = []
            numGuess = 1
            guessSlot.innerHTML = "";
            remaining.innerHTML = `${11 - numGuess}`;
            userInput.removeAttribute("disable");
            startOver.removeChild(p);

            playGame = true;

        });
    }
```