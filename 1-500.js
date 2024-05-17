/*
Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
1º Almacenar todos los números en un array
2º Almacenar en otro array los números comprendidos entre el 1 y 250
3º Almacenar en otro array los números comprendidos entre el 251 y 500
*/

const arr=[];
const arr250=[];
const arr500=[];
let counter = 0;
const amount = 10;
let userInput;

const partirNumeros = () => {
    while (counter<amount) {
        userInput = prompt(`Números introducidos: (${counter}/${amount})`);
        if (isNaN(userInput)===false) { //null, undefined??
            if ((userInput - Math.floor(userInput)) === 0) {
                if (userInput>=1 && userInput<=500) {
                    userInput = Math.floor(userInput); //force whole number
                    arr.push(userInput);
                    counter++; 
                    if (userInput>=1 && userInput<=250) {
                        arr250.push(userInput);
                    } else if (userInput>=251 && userInput<=500) {
                        arr500.push(userInput);
                    }
                } else {
                    alert("Sólo números entre 1 - 500");
                }
            } else {
                alert("Sólo números enteros");
            }
        } else {
            alert("Sólo números");
        }
    }
    console.log(`Array general [ ${arr.join(" / ")} ] (${arr.length})`);
    console.log(`Array 250 [ ${arr250.join(" / ")} ] (${arr250.length})`);
    console.log(`Array 500 [ ${arr500.join(" / ")} ] (${arr500.length})`);
    return;
}

partirNumeros();