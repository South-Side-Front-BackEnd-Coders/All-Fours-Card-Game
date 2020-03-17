const suits = ['H','S','C','D'];
const values = ['2','3','4','5','6','7','8','9','10','J', 'Q', 'K', 'A'];
//card class
 function Card (suits, values){
    this.suits =suits;
    this.values = values;
    this.cardName = this.values + this.suits;
    this.potImage= `<img class = "pot-images" 
                    src= "images/crdimg/${this.cardName}.png" 
                    alt="${this.cardName}" >`;
    this.handImage= `<img class = "hand-images" 
                    src= "images/crdimg/${this.cardName}.png" 
                    alt="${this.cardName}" >`;   
 }
 
