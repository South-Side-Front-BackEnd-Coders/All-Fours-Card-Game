let team1 =[], team2 = [];
let playerList = ["kevon","keeon","shooter"];
let GameManager = {
    playerSetupSingle:function () {
        this.setPlayerSingle();
        this.setTeamsSingle();   
    },
    playerSetupFour:function () {
        this.setPlayerFour();
        this.setTeamsFour();
    },
    /*
    Setting up Player object rules for single and four player all fours game.
    Created options for single player where if user selects either single player or teams button.
    */
    setPlayerSingle: function () {
        if(playerList.length <2){
            if (playerNameInput.value === "" || playerNameInput.value.length <= 4 ){
                let nameErr = "Name Must be at least 5 Letters!"            
                errBox.innerHTML = nameErr;                                  
            } else {                              
                playerList.push(playerNameInput.value);
                playerNameInput.value = "";
                errBox.innerHTML = playerList.toString() + " " +playerList.length;
                /*if(playerList.length==1){
                    errBox.innerHTML = playerList[0] + " " +playerList.length;
                }
                else{
                    errBox.innerHTML = playerList[0] + " " + playerList[1] + " " + playerList.length;
                }*/                                                
            }
        }

    },
        setPlayerFour: function () {
            if(playerList.length <=3){
                let boxMessage = ()=>{
                    let mess;
                if(playerList.length ==1){
                        mess = `<p> Player List : </br> ${playerList[0]}`
                } else if(playerList.length ==2){
                        mess = `<p> Player List : </br> ${playerList[0]} </br> ${playerList[1]}`
                } else if(playerList.length ==3){
                        mess = `<p> Player List : </br> ${playerList[0]} </br> ${playerList[1]} </br> ${playerList[2]}`
                        this.setTeamsFour();
                    }
                return mess;
            } 
                if (playerNameInput.value === "" || playerNameInput.value.length <= 4 ){
                    let nameErr = "Name Must be at least 5 Letters!"            
                    errBox.innerHTML = nameErr;                     
                } else {
                    playerList.push(playerNameInput.value);
                    playerNameInput.value = "";                     
                    errBox.innerHTML = boxMessage(); 
                    return playerList;              
                    }
                }
     },
/*
Sets the Teams for the game. If the player list only has 1 or 3 players then no team is created.
*/ 

    setTeamsSingle: function () {        
            if ( playerList.length == 2){                 
                    team1[0] = new Player(playerList[0]);
                    team2[0] = new Player(playerList[1]);                       
                errBox.innerHTML = `<p> Team 1: ${team1[0].name} </br> Team2: ${team2[0].name}</p>`;
                Display.updatePlayerNames();
                btn_newGame.style.visibility = "visible";
                 return team1, team2;
        }else {
            btn_newGame.style.visibility = "hidden";
        }
    },        

        setTeamsFour:function() {
            if (playerList.length == 4){
                team1[0] = new Player(playerList[0]);
                team2[0] = new Player(playerList[1]); 
                team1[1] = new Player(playerList[2]);
                team2[1] = new Player(playerList[3]);
                //errBox.innerHTML = teams.toString(); 
                errBox.innerHTML = `<p>Team1: ${team1[0].name} and ${team1[1].name}</br></br>
                Team2: ${team2[0].name} and ${team2[1].name}</p>`;
                Display.updatePlayerNames();
                btn_newGame.style.visibility = "visible";           
                return team1, team2;
        } else {
            btn_newGame.style.visibility = "hidden";
        }
    },
    
    gameId: ()=>{
             let id = 1;
             return id;
    },
  } 

function newGame(){
    console.log(deck.createDeck(suits, values));
    deck.shuffleDeck();              
        for(let player of playerObj){    
            console.log(player.deck.deal());  
            console.log(player);                  
            console.log(player.playCard());            
            console.log(pot);               
            pile.innerHtml = pot[0].suit + " " +pot[0].value;
            for ( let i=0; i <pot.length; i++){
                if ( pot == null ){
                    pile.innerHTML="Pot has no cards"
                } else {
                pile.innerHTML = pot[i];
                }           
            }      
        }
}  
