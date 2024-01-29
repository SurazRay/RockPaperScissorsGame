//alert("Welcome to the classic game of our childhood.\nBy Suraj Ray\nHave fun !!");

const sign = document.querySelectorAll(".sign"); //1

//Array of Choices for Computer, Variables

const choice = ["Rock", "Paper", "Scissors"];  // 3
let computer, move;  // 1, 3
var displayId = document.getElementById("cmpRock");  //6
let result = document.querySelector("h1");  //7
let userWin = true;  //4, 7
let countUser = 0, countComp = 0;  //7

//Game Result Out -- 7

const gameResult = (userWin) => {
    if (userWin) {
        result.innerText = "Congrats! You Won";
        result.style.backgroundColor = "green";
        let win = document.querySelector("#user");
        win.innerText = ++countUser;
    }
    else {
        result.innerText = "Oops! You lost"
        result.style.backgroundColor = "red";
        let win = document.querySelector("#computer");
        win.innerText = ++countComp;
    }
};

//Comparing user and computer -- 4

const compareMove = () => {
    if (move === computer) {
        console.log("Game Draw");
        result.innerText = "Game Draw !";
    }
    else {
        if (move === "Rock") {
            userWin = computer === "Paper" ? false : true;
        }
        else if (move === "Paper") {
            userWin = computer === "Rock" ? true : false;
        }
        else {
            userWin = computer === "Rock" ? false : true;
        }

        console.log("You win (Boolean) :", userWin);
        gameResult(userWin); // 7
    }
};

//Computer Choice Display message -- 5

const compMsg = (compChoice) => {
    let compMessage = document.querySelector("#compMsg");
    compMessage.innerText = `Computer chose ${compChoice}`;
    compMessage.classList.add("color2");
    console.log(compMessage.innerText);
};

//Computer choice Circle border appears -- 6

const compDisplay = (display) => {

    //console.log("Id of element chosen by Computer is " ,display);
    //Removing Border of previous move and adding border to current move

    displayId.classList.remove("border");
    displayId = document.getElementById(display);
    displayId.classList.add("border");
};

//Computer chooses -- 3

const comp = () => {
    computer = choice[Math.floor(Math.random() * 3)];

    compMsg(computer); //5
    compDisplay("cmp" + computer); //6
    compareMove(); //4
};

//Print Message -- 2

const message = (msg) => {
    let user = document.querySelector("#msg");
    user.innerText = `You chose ${msg}`;
    user.classList.add("color");
    console.log(user.innerText);

    comp(); //3
};

//Adding eventand Accessing all values of the node -- 1

sign.forEach((hand) => {

    hand.addEventListener("click", () => {
        move = hand.getAttribute("id");

        message(move); //2
    });

});

