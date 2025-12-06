let npc = ["snake", "water", "gun"];
let cscore = 0;
let uscore = 0;
const computerchoice = () => {
    const randomIndex = Math.floor(Math.random() * npc.length);
    return npc[randomIndex];
 };

const winning = (coms,user)=>{
    let win = 1
    if(coms > user){
        return win = 1
    }
    else if (coms == user){
        return win = 2
    }
    else{
        return win = 0
    }
}
let ask = confirm("Are you ready?");
if(ask){
    for(let rounds = 1;rounds<11;rounds++){
        alert("Round : "+ rounds);
        let user = prompt("Enter snake,water,or gun")
        let compt = computerchoice()
        if (user == "snake" && compt == "gun"){
            alert("Snake shooted")
             cscore++;
        }
        else if (user == "gun" && compt == "snake"){
            alert("Snake shooted")
            uscore++;
        }
        else if (user == "snake" && compt == "water"){
            alert("Snake drunk the water")
             uscore++;
        }
        else if (user == "water" && compt == "snake"){
            alert("Snake drunk the water")
             cscore++; 
        }
        else if(user == "gun" && compt == "water"){
            alert("The gun drowned in water")
            cscore++;
        }
        else if (user == "water" && compt == "gun"){
            alert("The gun drowned in water")
            uscore++;
        }else{
            alert("Its a tie")
        }
        
    }
}

alert("Computer score is " + cscore)
alert("User score is " + uscore)
let winner = winning(cscore,uscore);
if(winner == 1){
    alert("Computer wins the game")
    document.body.style.background = "red"
    document.write("Computer won")
}

else if(winner == 2){
    alert("Draw the match")
    document.body.style.background = "yellow"
    document.write("Draw the Game")
}

    else{
    alert("Congratulations You won the game")
    document.body.style.background = "green"
    document.write("You won")
}