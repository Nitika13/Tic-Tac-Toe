let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset"); 
let player1 = true;
const wins = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let newbtn = document.querySelector("#new-game");
let msg = document.querySelector("#winner");
let msgcontainer = document.querySelector(".msg-container");
let count =0 ;

const resetGame = () => {
    player1= true;
    enableBoxes();
    count =0;
    msgcontainer.classList.add("msg-container");
}

boxes.forEach ((box) => {
    box.addEventListener("click", () => {
        count++;
        console.log("box was clicked");
        if(player1) {
            box.innerText = "O";
            player1 =false;
        }
        else {
            box.innerText = "X";
            player1 =true;
        }
        box.disabled = true;
        checkwinner();
});
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled =true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled =false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
msg.innerText = `Winner is ${winner}`;
msgcontainer.classList.remove("msg-container");
disableBoxes();
}

const draw = () => {
    msg.innerText = `Draw! Try Again`;
    msgcontainer.classList.remove("msg-container");
}

checkwinner=() =>{
    for(let pattern of wins) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText ;
        if(pos1 !="" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3) {
                console.log("winner", pos1);
            showwinner(pos1);
            return;
            }
            else if (count===9){
                draw();
            }
        }
    };
};

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);