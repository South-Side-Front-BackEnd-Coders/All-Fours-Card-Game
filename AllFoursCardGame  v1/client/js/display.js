let Display = {
    getCard: () => {
    },
    updatePot: () => {
        if (pot.length == 4) {
            pile.innerHTML = pot[3].potImage;
            pile1.innerHTML = pot[2].potImage;
            pile2.innerHTML = pot[1].potImage;
            pile3.innerHTML = pot[0].potImage;
        } else if (pot.length == 3) {
            pile.innerHTML = pot[2].potImage;
            pile1.innerHTML = pot[1].potImage;
            pile2.innerHTML = pot[0].potImage;
        } else if (pot.length == 2) {
            pile.innerHTML = pot[1].potImage;
            pile1.innerHTML = pot[0].potImage;
        } else if (pot.length == 1) {
            pile.innerHTML = pot[0].potImage;
        } else {
            pile.innerHTML = "Play a card";
        }
    },
    updateHand: () => {
        if (team1[0].hand.length == 6) {
            card1.innerHTML = team1[0].hand[0].handImage;
            card2.innerHTML = team1[0].hand[1].handImage;
            card3.innerHTML = team1[0].hand[2].handImage;
            card4.innerHTML = team1[0].hand[3].handImage;
            card5.innerHTML = team1[0].hand[4].handImage;
            card6.innerHTML = team1[0].hand[5].handImage;
        } else if (team1[0].hand.length == 5) {
            card1.innerHTML = team1[0].hand[0].handImage;
            card2.innerHTML = team1[0].hand[1].handImage;
            card3.innerHTML = team1[0].hand[2].handImage;
            card4.innerHTML = team1[0].hand[3].handImage;
            card5.innerHTML = team1[0].hand[4].handImage;
            card6.innerHTML = "";
        } else if (team1[0].hand.length == 4) {
            card1.innerHTML = team1[0].hand[0].handImage;
            card2.innerHTML = team1[0].hand[1].handImage;
            card3.innerHTML = team1[0].hand[2].handImage;
            card4.innerHTML = team1[0].hand[3].handImage;
            card5.innerHTML = "";
            card6.innerHTML = "";
        } else if (team1[0].hand.length == 3) {
            card1.innerHTML = team1[0].hand[0].handImage;
            card2.innerHTML = team1[0].hand[1].handImage;
            card3.innerHTML = team1[0].hand[2].handImage;
            card4.innerHTML = "";
            card5.innerHTML = "";
            card6.innerHTML = "";
        }
        else if (team1[0].hand.length == 2) {
            card1.innerHTML = team1[0].hand[0].handImage;
            card2.innerHTML = team1[0].hand[1].handImage;
            card3.innerHTML = "";
            card4.innerHTML = "";
            card5.innerHTML = "";
            card6.innerHTML = "";
        } else if (team1[0].hand.length == 1) {
            card1.innerHTML = team1[0].hand[0].handImage;
            card2.innerHTML = "";
            card3.innerHTML = "";
            card4.innerHTML = "";
            card5.innerHTML = "";
            card6.innerHTML = "";
        } else {
            card1.innerHTML = "";
            card2.innerHTML = "";
            card3.innerHTML = "";
            card4.innerHTML = "";
            card5.innerHTML = "";
            card6.innerHTML = "";
        }
    },
    updateHandP2: () => {
        if (team2[1].hand.length == 6) {
            p2crd1.innerHTML = team2[1].hand[0].handImage;
            p2crd2.innerHTML = team2[1].hand[1].handImage;
            p2crd3.innerHTML = team2[1].hand[2].handImage;
            p2crd4.innerHTML = team2[1].hand[3].handImage;
            p2crd5.innerHTML = team2[1].hand[4].handImage;
            p2crd6.innerHTML = team2[1].hand[5].handImage;
        } else if (team2[1].hand.length == 5) {
            p2crd1.innerHTML = team2[1].hand[0].handImage;
            p2crd2.innerHTML = team2[1].hand[1].handImage;
            p2crd3.innerHTML = team2[1].hand[2].handImage;
            p2crd4.innerHTML = team2[1].hand[3].handImage;
            p2crd5.innerHTML = team2[1].hand[4].handImage;
            p2crd6.innerHTML = "";
        } else if (team2[1].hand.length == 4) {
            p2crd1.innerHTML = team2[1].hand[0].handImage;
            p2crd2.innerHTML = team2[1].hand[1].handImage;
            p2crd3.innerHTML = team2[1].hand[2].handImage;
            p2crd4.innerHTML = team2[1].hand[3].handImage;
            p2crd5.innerHTML = "";
            p2crd6.innerHTML = "";
        } else if (team2[1].hand.length == 3) {
            p2crd1.innerHTML = team2[1].hand[0].handImage;
            p2crd2.innerHTML = team2[1].hand[1].handImage;
            p2crd3.innerHTML = team2[1].hand[2].handImage;
            p2crd4.innerHTML = "";
            p2crd5.innerHTML = "";
            p2crd6.innerHTML = "";
        }
        else if (team2[1].hand.length == 2) {
            p2crd1.innerHTML = team2[1].hand[0].handImage;
            p2crd2.innerHTML = team2[1].hand[1].handImage;
            p2crd3.innerHTML = "";
            p2crd4.innerHTML = "";
            p2crd5.innerHTML = "";
            p2crd6.innerHTML = "";
        } else if (team2[1].hand.length == 1) {
            p2crd1.innerHTML = team2[1].hand[0].handImage;
            p2crd2.innerHTML = "";
            p2crd3.innerHTML = "";
            p2crd4.innerHTML = "";
            p2crd5.innerHTML = "";
            p2crd6.innerHTML = "";
        } else {
            p2crd1.innerHTML = "";
            p2crd2.innerHTML = "";
            p2crd3.innerHTML = "";
            p2crd4.innerHTML = "";
            p2crd5.innerHTML = "";
            p2crd6.innerHTML = "";
        }
    },
    updateHandP3: () => {
        if (team2[0].hand.length == 6) {
            p3crd1.innerHTML = team2[0].hand[0].handImage;
            p3crd2.innerHTML = team2[0].hand[1].handImage;
            p3crd3.innerHTML = team2[0].hand[2].handImage;
            p3crd4.innerHTML = team2[0].hand[3].handImage;
            p3crd5.innerHTML = team2[0].hand[4].handImage;
            p3crd6.innerHTML = team2[0].hand[5].handImage;
        } else if (team2[0].hand.length == 5) {
            p3crd1.innerHTML = team2[0].hand[0].handImage;
            p3crd2.innerHTML = team2[0].hand[1].handImage;
            p3crd3.innerHTML = team2[0].hand[2].handImage;
            p3crd4.innerHTML = team2[0].hand[3].handImage;
            p3crd5.innerHTML = team2[0].hand[4].handImage;
            p3crd6.innerHTML = "";
        } else if (team2[0].hand.length == 4) {
            p3crd1.innerHTML = team2[0].hand[0].handImage;
            p3crd2.innerHTML = team2[0].hand[1].handImage;
            p3crd3.innerHTML = team2[0].hand[2].handImage;
            p3crd4.innerHTML = team2[0].hand[3].handImage;
            p3crd5.innerHTML = "";
            p3crd6.innerHTML = "";
        } else if (team2[0].hand.length == 3) {
            p3crd1.innerHTML = team2[0].hand[0].handImage;
            p3crd2.innerHTML = team2[0].hand[1].handImage;
            p3crd3.innerHTML = team2[0].hand[2].handImage;
            p3crd4.innerHTML = "";
            p3crd5.innerHTML = "";
            p3crd6.innerHTML = "";
        } else if (team2[0].hand.length == 2) {
            p3crd1.innerHTML = team2[0].hand[0].handImage;
            p3crd2.innerHTML = team2[0].hand[1].handImage;
            p3crd3.innerHTML = "";
            p3crd4.innerHTML = "";
            p3crd5.innerHTML = "";
            p3crd6.innerHTML = "";
        } else if (team2[0].hand.length == 1) {
            p3crd1.innerHTML = team2[0].hand[0].handImage;
            p3crd2.innerHTML = "";
            p3crd3.innerHTML = "";
            p3crd4.innerHTML = "";
            p3crd5.innerHTML = "";
            p3crd6.innerHTML = "";
        } else {
            p3crd1.innerHTML = "";
            p3crd2.innerHTML = "";
            p3crd3.innerHTML = "";
            p3crd4.innerHTML = "";
            p3crd5.innerHTML = "";
            p3crd6.innerHTML = "";
        }
    },
    updateHandP4: () => {
        if (team1[1].hand.length == 6) {
            p4crd1.innerHTML = team1[1].hand[0].handImage;
            p4crd2.innerHTML = team1[1].hand[1].handImage;
            p4crd3.innerHTML = team1[1].hand[2].handImage;
            p4crd4.innerHTML = team1[1].hand[3].handImage;
            p4crd5.innerHTML = team1[1].hand[4].handImage;
            p4crd6.innerHTML = team1[1].hand[5].handImage;
        } else if (team1[1].hand.length == 5) {
            p4crd1.innerHTML = team1[1].hand[0].handImage;
            p4crd2.innerHTML = team1[1].hand[1].handImage;
            p4crd3.innerHTML = team1[1].hand[2].handImage;
            p4crd4.innerHTML = team1[1].hand[3].handImage;
            p4crd5.innerHTML = team1[1].hand[4].handImage1
            p4crd6.innerHTML = "";
        } else if (team1[1].hand.length == 4) {
            p4crd1.innerHTML = team1[1].hand[0].handImage;
            p4crd2.innerHTML = team1[1].hand[1].handImage;
            p4crd3.innerHTML = team1[1].hand[2].handImage;
            p4crd4.innerHTML = team1[1].hand[3].handImage;
            p4crd5.innerHTML = "";
            p4crd6.innerHTML = "";
        } else if (team1[1].hand.length == 3) {
            p4crd1.innerHTML = team1[1].hand[0].handImage;
            p4crd2.innerHTML = team1[1].hand[1].handImage;
            p4crd3.innerHTML = team1[1].hand[2].handImage;
            p4crd4.innerHTML = "";
            p4crd5.innerHTML = "";
            p4crd6.innerHTML = "";
        }
        else if (team1[1].hand.length == 2) {
            p4crd1.innerHTML = team1[1].hand[0].handImage;
            p4crd2.innerHTML = team1[1].hand[1].handImage;
            p4crd3.innerHTML = "";
            p4crd4.innerHTML = "";
            p4crd5.innerHTML = "";
            p4crd6.innerHTML = "";
        } else if (team1[1].hand.length == 1) {
            p4crd1.innerHTML = team1[1].hand[0].handImage;
            p4crd2.innerHTML = "";
            p4crd3.innerHTML = "";
            p4crd4.innerHTML = "";
            p4crd5.innerHTML = "";
            p4crd6.innerHTML = "";
        } else {
            p4crd1.innerHTML = "";
            p4crd2.innerHTML = "";
            p4crd3.innerHTML = "";
            p4crd4.innerHTML = "";
            p4crd5.innerHTML = "";
            p4crd6.innerHTML = "";
        }
    },
    updatePlayerNames: () => {
        if (team1.length == 1 && team2.length == 1) {
            p1name.innerHTML = team1[0].name;
            p2name.innerHTML = team2[1].name;
            p3name.innerHTML = "";
            p4name.innerHTML = "";
        } else if (team2.length == 2 && team2.length == 2) {
            p1name.innerHTML = team1[0].name;
            p2name.innerHTML = team2[1].name;
            p3name.innerHTML = team2[0].name;
            p4name.innerHTML = team1[1].name;
        }
    }


}



