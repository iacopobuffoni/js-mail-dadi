const _Email = prompt ('Inserisci la tua email, vediamo se sei sulla lista');
const _EmailList = ['tsukabi@yahoo.it', 'madpupp@yahoo.it', 'cptmadpupp@outlook.it', 'pentest@gmail.com', 'debug@hotmail.it'];

for (let i = 0; i < _EmailList.length; i ++) {
    
    if (_Email == _EmailList[i]) {

        alert('Complimenti! La tua email: ' + _Email + ' è presente nella lista, puoi entrare.');
        i = _EmailList.length;

    } else if (i == _EmailList.length - 1) {

        alert('Ci dispiace, sembra che la tua email: ' + _Email + ' non sia presente nella lista. Partecipa di nuovo alla nostra selezione!');

    }

}






