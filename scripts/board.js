class BoardManager {
    cardmanager;
    node;
    numImgs;
    curNumCards;

    constructor(id, numImgs, cardmanager) {
        this.node = document.getElementById(id);
        this.numImgs = numImgs;
        this.cardmanager = cardmanager;
    }

    clear() {
        this.node.innerHTML = "";
    }

    fill(numCards) {
        numCards = parseInt(numCards);

        if (numCards > 2 * this.numImgs) {
            alert(`Erro: não há ${numCards} cartas únicas disponíveis.`);
            return;
        }

        this.curNumCards = numCards;
        this.clear();

        const randomList = this.genRandomList(numCards);

        randomList.forEach((number) => {
            const card = this.cardmanager.gen(number);
            this.addCard(card);
        });

        this.adjustCss();
    }

    adjustCss() {
        let cols = Math.sqrt(this.curNumCards);
        let size = (100 / cols) - 1;
        size += 'vmin';

        document.documentElement.style.setProperty("--numCols", cols);
        document.documentElement.style.setProperty("--size", size);
    }

    addCard(card) {
        this.node.appendChild(card);
    }

    genRandomList(size) {
        const values = [];

        // Create pairs of values
        for (let i = 0; i < size / 2; i++) {
            values.push(i, i);
        }

    
        for (let i = values.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [values[i], values[j]] = [values[j], values[i]];
        }

        return values;
    }

    check() {
        let flipped =document.getElementsByClassName('matched');
        return flipped.length >= this.curNumCards;
    }
}
