function urlBuilder(number){
    // Convert number to string and pad with '0' if necessary
    let strNum = number.toString().padStart(2, '0');
    return `imagens/card${strNum}.jpeg`;
}

let card = new CardManager(urlBuilder);
let board = new BoardManager("board", 5, card);

let menu = document.getElementById('menu');
let select = document.getElementById('numCards');
let start = document.getElementById('start');

for(let i = 4; i <= 10; i += 2) {
    let op = document.createElement('option');
    op.value = i;    
    op.innerHTML = i; 
    select.appendChild(op);
}
    start.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
    
