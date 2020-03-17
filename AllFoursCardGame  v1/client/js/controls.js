//Placed all my element setters in seperate file for easier referencing
//
//Display Elements
const
    //Getting player 4 card display elements
    p4crd1 = document.getElementById("p4crd1"),
    p4crd2 = document.getElementById("p4crd2"),
    p4crd4 = document.getElementById("p4crd4"),
    p4crd3 = document.getElementById("p4crd3"),
    p4crd5 = document.getElementById("p4crd5"),
    p4crd6 = document.getElementById("p4crd6"),
    //Getting player 3 card display elements
    p3crd1 = document.getElementById("p3crd1"),
    p3crd2 = document.getElementById("p3crd2"),
    p3crd4 = document.getElementById("p3crd4"),
    p3crd3 = document.getElementById("p3crd3"),
    p3crd5 = document.getElementById("p3crd5"),
    p3crd6 = document.getElementById("p3crd6"),
    //Getting player 2 card display elements
    p2crd1 = document.getElementById("p2crd1"),
    p2crd2 = document.getElementById("p2crd2"),
    p2crd4 = document.getElementById("p2crd4"),
    p2crd3 = document.getElementById("p2crd3"),
    p2crd5 = document.getElementById("p2crd5"),
    p2crd6 = document.getElementById("p2crd6"),
    // Getting player 1 card display elements
    card1 = document.getElementById("crd1"),
    card2 = document.getElementById("crd2"),
    card3 = document.getElementById("crd3"),
    card4 = document.getElementById("crd4"),
    card5 = document.getElementById("crd5"),
    card6 = document.getElementById("crd6"),
    // Getting Pot Display Elements
    pile = document.getElementById("pot"),
    pile1 = document.querySelector(".pot1"),
    pile2 = document.querySelector(".pot2"),
    pile3 = document.querySelector(".pot3"),
    //Getting Error Box Display element
    errBox = document.querySelector(".playerInfo"),
    //Gtting Player Name Elements
    p1name = document.querySelector(".p1h2"),
    p2name = document.querySelector(".p2h2"),
    p3name = document.querySelector(".p3h2"),
    p4name = document.querySelector(".p4h2"),
    //Button Press Log for Test Purposes
    btnLog = document.querySelector(".button-log");

//Input Elements
const playerNameInput = document.querySelector("#nameInput");

//Button Elements
const btn_newGame = document.getElementById("newgame"),
    btn_playCard = document.getElementById("playcard"),
    btn_playCard2 = document.getElementById("playcard2"),
    btn_playCard3 = document.getElementById("playcard3"),
    btn_playCard4 = document.getElementById("playcard4"),
    btn_shuffleDeck = document.getElementById("shuffle"),
    btn_dealDeck = document.getElementById("deal"),
    btn_teams = document.getElementById("team"),
    btn_knock = document.getElementById("knock"),
    btn_newDeck = document.getElementById("newdeck"),
    btn_singlePlayer = document.getElementById("singleplayer");

//Dynamic button switching function/object
    btnLog.innerText = "Click on button to get ID";
    btn_newGame.onclick = buttonSwitch;
    btn_playCard.onclick = buttonSwitch;
    btn_playCard2.onclick = buttonSwitch;
    btn_shuffleDeck.onclick = buttonSwitch;
    btn_teams.onclick = buttonSwitch;
    btn_knock.onclick = buttonSwitch;
    btn_singlePlayer.onclick = buttonSwitch;
    btn_dealDeck.onclick = buttonSwitch;
    btn_newDeck.onclick = buttonSwitch;

//Player 1
    card1.onclick = chooseCardToPlay;
    card2.onclick = chooseCardToPlay;
    card3.onclick = chooseCardToPlay;
    card4.onclick = chooseCardToPlay;
    card5.onclick = chooseCardToPlay;
    card6.onclick = chooseCardToPlay;
//Player 4 for test
    p4crd1.onclick = chooseCardToPlay4;
    p4crd2.onclick = chooseCardToPlay4;
    p4crd4.onclick = chooseCardToPlay4;
    p4crd3.onclick = chooseCardToPlay4;
    p4crd5.onclick = chooseCardToPlay4;
    p4crd6.onclick = chooseCardToPlay4;
//Player 3 for test
    p3crd1.onclick = chooseCardToPlay3;
    p3crd2.onclick = chooseCardToPlay3;
    p3crd4.onclick = chooseCardToPlay3;
    p3crd3.onclick = chooseCardToPlay3;
    p3crd5.onclick = chooseCardToPlay3;
    p3crd6.onclick = chooseCardToPlay3;
//Player 2 for test
    p2crd1.onclick = chooseCardToPlay2;
    p2crd2.onclick = chooseCardToPlay2;
    p2crd4.onclick = chooseCardToPlay2;
    p2crd3.onclick = chooseCardToPlay2;
    p2crd5.onclick = chooseCardToPlay2;
    p2crd6.onclick = chooseCardToPlay2;
    //Dynamic button switching function
function buttonSwitch(clicked) {
    switch (this.id) {
        case "singleplayer":
            GameManager.playerSetupSingle();
            break;
        case "team":
            GameManager.playerSetupFour();
            break;
        case "newgame":
            newGame();
            break;
        case "playcard":
            playerPlays.playCard1();
            Display.updateHand();
            Display.updateHandP2();
            Display.updateHandP3();
            Display.updateHandP4();
            Display.updatePot();
            break;
        case "playcard2":
            playerPlays.playCard2();
            Display.updateHand();
            Display.updateHandP2();
            Display.updateHandP3();
            Display.updateHandP4();
            Display.updatePot();
            break;
        case "knock":
            playerPlays.knock();
            Display.updateHand();
            Display.updateHandP2();
            Display.updateHandP3();
            Display.updateHandP4();
            Display.updatePot();
            break;
        case "deal":
            team1[0].deal();
            Display.updateHand();
            Display.updateHandP2();
            Display.updateHandP3();
            Display.updateHandP4();
            Display.updatePot();
            break;
        case "shuffle":
            console.log(team1[0].shuffleDeck());
            break;
        case "newdeck":
            console.log(team1[0].createDeck(suits, values));
            break;
    }
    btnLog.innerHTML = "Button clicked, id = "
        getElementById
}
//Dynamic Crd selecttion and play
function chooseCardToPlay(clicked) {
    switch (this.id) {
        case "crd1":
            pot.push(team1[0].hand[0]);
            team1[0].hand.splice(0, 1);
            Display.updateHandP2();
            Display.updateHand();
            Display.updatePot();
            break;
        case "crd2":
            //choosen = team1[0].hand.splice(1,1);
            //pot.push(choosen);             
            pot.push(team1[0].hand[1]);
            team1[0].hand.splice(1, 1);
            Display.updateHandP2();
            Display.updateHand();
            Display.updatePot();
            break;
        case "crd3":
            pot.push(team1[0].hand[2]);
            team1[0].hand.splice(2, 1);
            Display.updateHandP2();
            Display.updateHand();
            Display.updatePot();
            break;
        case "crd4":
            pot.push(team1[0].hand[3]);
            team1[0].hand.splice(3, 1);
            Display.updateHandP2();
            Display.updateHand();
            Display.updatePot();
            //pot.push(team1[0].hand[3].pop());
            break;
        case "crd5":
            pot.push(team1[0].hand[4]);
            team1[0].hand.splice(4, 1);
            Display.updateHandP2();
            Display.updateHand();
            Display.updatePot();
            //pot.push(team1[0].hand[4].pop());
            break;
        case "crd6":
            pot.push(team1[0].hand[5]);
            team1[0].hand.splice(5, 1);
            Display.updateHandP2();
            Display.updateHand();
            Display.updatePot();
            //pot.push(team1[0].hand[5].pop());
            break;


    }
}
function chooseCardToPlay2(clicked) {
    switch (this.id) {
        case "p2crd1":
            pot.push(team2[1].hand[0]);
            team2[1].hand.splice(0, 1);
            Display.updateHandP2();
            Display.updateHand();
            Display.updatePot();
            break;
        case "p2crd2":
            pot.push(team2[1].hand[1]);
            team2[1].hand.splice(1, 1);
            Display.updateHandP2();
            Display.updateHand();
            Display.updatePot();
            break;
        case "p2crd3":
            pot.push(team2[1].hand[2]);
            team2[1].hand.splice(2, 1);
            Display.updateHandP2();
            Display.updateHand();
            Display.updatePot();
            break;
        case "p2crd4":
            pot.push(team2[1].hand[3]);
            team2[1].hand.splice(3, 1);
            Display.updateHandP2();
            Display.updateHand();
            Display.updatePot();

            break;
        case "p2crd5":
            pot.push(team2[1].hand[4]);
            team2[1].hand.splice(4, 1);
            Display.updateHandP2();
            Display.updateHand();
            Display.updatePot();

            break;
        case "p2crd6":
            pot.push(team2[1].hand[5]);
            team2[1].hand.splice(5, 1);
            Display.updateHandP2();
            Display.updateHand();
            Display.updatePot();

            break;


    }
}
function chooseCardToPlay3(clicked) {
    switch (this.id) {
        case "p3crd1":
            pot.push(team2[0].hand[0]);
            team2[0].hand.splice(0, 1);
            Display.updateHandP3();
            Display.updatePot();
            break;
        case "p3crd2":
            pot.push(team2[0].hand[1]);
            team2[0].hand.splice(1, 1);
            Display.updateHandP3();
            Display.updatePot();
            break;
        case "p3crd3":
            pot.push(team2[0].hand[2]);
            team2[0].hand.splice(2, 1);
            Display.updateHandP3();
            Display.updatePot();
            break;
        case "p3crd4":
            pot.push(team2[0].hand[3]);
            team2[0].hand.splice(3, 1);
            Display.updateHandP3();
            Display.updatePot();
            break;
        case "p3crd5":
            pot.push(team2[0].hand[4]);
            team2[0].hand.splice(4, 1);
            Display.updateHandP3();
            Display.updatePot();
            break;
        case "p3crd6":
            pot.push(team2[0].hand[5]);
            team2[0].hand.splice(5, 1);
            Display.updateHandP3();
            Display.updatePot();
            break;


    }
}
function chooseCardToPlay4(clicked) {
    switch (this.id) {
        case "p4crd1":
            pot.push(team1[1].hand[0]);
            team1[1].hand.splice(0, 1);
            Display.updateHandP4();
            Display.updatePot();
            break;
        case "p4crd2":
            pot.push(team1[1].hand[1]);
            team1[1].hand.splice(1, 1);
            Display.updateHandP4();
            Display.updatePot();
            break;
        case "p4crd3":
            pot.push(team1[1].hand[2]);
            team1[1].hand.splice(2, 1);
            Display.updateHandP4();
            Display.updatePot();
            break;
        case "p4crd4":
            pot.push(team1[1].hand[3]);
            team1[1].hand.splice(3, 1);
            Display.updateHandP4();
            Display.updatePot();
            break;
        case "p4crd5":
            pot.push(team1[1].hand[4]);
            team1[1].hand.splice(4, 1);
            Display.updateHandP4();
            Display.updatePot();
            break;
        case "p4crd6":
            pot.push(team1[1].hand[5]);
            team1[1].hand.splice(5, 1);
            Display.updateHandP4();
            Display.updatePot();
            break;


    }
}
