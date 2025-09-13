function urlBuilder(number){
    number+= 
    number=number.padStart(2,'0');
    return `imagens/card${number}.jpeg`;
}
let card = new CardManager(urlBuilder);
let board = new BoardManager("board", 5 ,card)

let menu = document.getElementById('menu')
let select = document.getElementById('numCards')
let start = document.getElementById('start')

