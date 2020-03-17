let Enemy;
//player class
function Enemy (name) {
    this.name = name;
    this.hand = deck.deal();  
    this.cardPlayed = playCard();   
    this.playCard = function () {
        return pot.push(this.hand.pop());
    }
    this.knock = function () {
        this.hand.push(pot.pop());
    }
    this.info =()=>{
        let info = `<p class="firstP">Name: ${this.name}</p>
                </br><p>Player Id: ${this.plyId}</p></br></br>
                <p>Welcome ${ this.name}
                    click new game button to start a game!</p>`
        return info;
    }
    
    this.dealPlayer = ()=> {
        playerObj.forEach(player => {
            while (player.hand.length < 6) {
                player.hand.push(deck.pop());        
            }
            return player.hand;
            
        });
        
    }
}

