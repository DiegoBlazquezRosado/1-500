/*
Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
1º Almacenar todos los números en un array
2º Almacenar en otro array los números comprendidos entre el 1 y 250
3º Almacenar en otro array los números comprendidos entre el 251 y 500
*/

const arr=[];
const arr250=[];
const arr500=[];
let ten = 0;
let userInput = "";

function partirNumeros () {
    while (ten<10) {
        userInput = prompt('Escribe un número: ');
        if (isNaN(userInput)===false) {
            if (userInput>=1 && userInput<=500) {
                arr.push(userInput);
                ten++;
                if (userInput>=1 && userInput<=250) {
                    arr250.push(userInput);
                } else if (userInput>=251 && userInput<=500) {
                    arr500.push(userInput);
                }
            }
        }
    }
    return console.log(arr, arr250, arr500);
}

partirNumeros();