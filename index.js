let computer 
let add = [];
let tentativa = 0;

function up(){
    computer = Math.floor(Math.random() *100 + 1) 
}

function tentando(){
    let inputBox = Number(document.getElementById('inputBox').value);
    add.push(' ' + inputBox);
    document.getElementById('guesses').innerHTML = add;

    if(inputBox > computer){
        document.getElementById('textOutput').innerHTML = 'O número é muito alto';
        document.getElementById('inputBox').value = '';
        tentativa++
        document.getElementById('attempts').innerHTML = tentativa;
    } else if(inputBox < computer){
        document.getElementById('textOutput').innerHTML = 'O número é muito baixo';
        document.getElementById('inputBox').value = '';
        tentativa++
        document.getElementById('attempts').innerHTML = tentativa;
    } else {
        document.getElementById('textOutput').innerHTML = 'PAREBÉNS, VOCÊ ACERTOU O NÚMERO!';    
        tentativa++
        document.getElementById('attempts').innerHTML = tentativa;
    }
}



document.getElementById('newGameButton').addEventListener('click', function(){
    inputBox.value = ''
    attempts.innerHTML = '0';
    guesses.innerHTML = '0';
});