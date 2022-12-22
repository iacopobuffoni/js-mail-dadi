let _PlayerUno = Math.ceil(Math.random() * 6).toFixed(0);
let _PlayerDue = Math.ceil(Math.random() * 6).toFixed(0);
alert('Il giocatore 1 ha fatto uscire : ' + _PlayerUno);
alert('Il giocatore 2 ha fatto uscire : ' + _PlayerDue);


if (_PlayerUno > _PlayerDue) {
    
    alert('Vince il giocatore 1 con il numero : ' + _PlayerUno);

} else if (_PlayerUno == _PlayerDue) {

    alert('Attenzione! Abbiamo un pareggio : ' + _PlayerUno);
    alert('Rigiochiamo!');

    for (i = 0; i < 2; i++) {

        _PlayerUno = (Math.random() * 6).toFixed(0);
        _PlayerDue = (Math.random() * 6).toFixed(0);
        alert('Il giocatore 1 ha fatto uscire : ' + _PlayerUno);
        alert('Il giocatore 2 ha fatto uscire : ' + _PlayerDue);

        if (_PlayerUno > _PlayerDue) {
    
            alert('Vince il giocatore 1 con il numero : ' + _PlayerUno);
            i = 1;
        
        } else if (_PlayerUno == _PlayerDue) {

            alert('Attenzione! Abbiamo un pareggio : ' + _PlayerUno);
            alert('Rigiochiamo!');
            i = 0;
        
        } else {

            alert('Vince il giocatore 2 con il numero : ' + _PlayerDue);
            i = 1;
        }
    }

} else {

    alert('Vince il giocatore 2 con il numero : ' + _PlayerDue);

}




