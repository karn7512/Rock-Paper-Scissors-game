let userScore=0;
let comScore=0;
let choices=document.querySelectorAll(".choice");
const next=document.querySelector(".next")
const userscore=document.querySelector("#userScore")
const compscore=document.querySelector("#compScore")

const getComputerChoice=()=>{
    let options=["rock","paper","scissor"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];
}
const draw=()=>{
    next.innerText="game Draw play Again!!"
    next.style.backgroundColor="black"
    // console.log(compChoice);
}
const checkWinner=(userWin,userChoice,compChoice)=>{
    if(userWin==true){
        next.innerText=`user win your ${compChoice} beats ${userChoice}`;
        next.style.backgroundColor="green"
        // console.log(compChoice,"you win")
        userScore+=1
        userscore.innerText=userScore
    }
    else{
        next.innerText=`user loose ${userChoice} beats your ${compChoice}`;
        next.style.backgroundColor="red";
        // console.log(compChoice,"you loose")
        comScore+=1;
        compscore.innerText=comScore;
    }
}
const playGame=(userChoice)=>{
    const compChoice=getComputerChoice();
    if(userChoice==compChoice){
        draw();
    }
    else{
        let userWin=true;
        if(userChoice=='rock'){
            //secissor paper
            userWin = compChoice=='paper'? false:true;
        }
        else if(userChoice=='paper'){
            //secissor rock
            userWin=compChoice==='scissor'? false:true;
        }
        else{
            //user secissor
            //paper rock
            userWin=compChoice=='rock'? false:true;
        }
        
        checkWinner(userWin,compChoice,userChoice);
    }
    
    
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id")
        playGame(userChoice)
        // console.log(userChoice)
        
    })
    
})
