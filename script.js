const emojis = [
"👀","👀","🙄","🙄","👻","👻","😂","😂","😡","😡","💀","💀","🐱","🐱","🦝","🦝"
];
let openCards = [];
let shuffledEmojis = emojis.sort(()=> (Math.random() > 0.5 ? 2 : -1)); // embaralha os emojis

for (let i = 0; i < emojis.length; i++){ // cria os emojis na tela
    let box = document.createElement("div"); // cria uma div
    box.className = "item"; // adiciona a classe item na div
box.innerHTML = shuffledEmojis[i]; // adiciona os emojis no html
box.onclick = handleClick; // adiciona o evento de click
document.querySelector(".game").appendChild(box); // adiciona os emojis na tela
}

function handleClick(){
if (openCards.length < 2){
    this.classList.add('boxOpen');
    openCards.push(this);
}
if(openCards.length === 2){
    setTimeout(checkMatch, 500);
}
}
function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];
    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert("Parabéns, você ganhou!");
    }
}