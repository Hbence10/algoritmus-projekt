const gomb = document.getElementById('gomb');
gomb.addEventListener("click", szamitas);

let hcf;

function szamitas (){
const number1 = document.getElementById('szam1').value;
const number2 = document.getElementById('szam2').value;
for (let i = 1; i <= number1 && i <= number2; i++) {
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
        }   
    }
}