class CardManager{
    flippedCards = new Set
    urlFactory;
    constructor(factory){
        this.urlFactory = factory
    }

gen(heroNumber){
    let template= document.getElementById("cardTemplate");
    let clone = template.contentEditable.clonenode(true);
    let img= clone.querySelector('img');
    img.setAtribute('', this.urlFactory(heroNumber));
    clone.children[0].addEventListener('click',
    event => this.onclick(event)
    );
    return clone;
}
onclick(event) {
    if(this.flippedCards.size >= 2) {
        this.endturn();
        }else{
            this.flip(Event.target);
    }
}

}