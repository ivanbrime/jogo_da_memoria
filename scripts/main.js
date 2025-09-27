function urlBuilder(number) {
    let strNum = number.toString().padStart(2, '0');
    return `imagens/card${strNum}.jpeg`;
}
let card = new CardManager(urlBuilder);
let board = new BoardManager("board", 5, card);

let menu = document.getElementById('menu');
let select = document.getElementById('numCards');
let start = document.getElementById('start');
for (let i = 4; i <= 10; i += 2) {
    let op = document.createElement('option');
    op.value = i;
    op.innerHTML = i;
    select.appendChild(op);
}
start.addEventListener("click", () => {
    menu.classList.add("hidden");
    board.node.classList.remove("hidden");
    board.fill(select.value);              
});
board.node.addEventListener("click", () => {
    if (board.check()) {
        setTimeout(() => {
            menu.classList.remove("hidden");
            board.node.classList.add("hidden");
        }, 2000);
    }
});
