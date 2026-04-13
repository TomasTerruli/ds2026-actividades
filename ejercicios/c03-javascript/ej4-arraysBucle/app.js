function generarAsteriscos(n){
    let resultado = "";

    for (let i = 0; i < n; i++){
        resultado = resultado + "*";
    }

    return resultado;
}

arraynum = [1,2,3,4,5,6,7,8]

let sumTot = 0;
let prom = 0;

for (let i = 0; i < arraynum.length; i ++){
    sumTot = arraynum[i] + sumTot;
}

prom = sumTot/(arraynum.length);

let menor = arraynum[0];
let mayor = arraynum[0];

for (let i = 1; i < arraynum.length; i++) {
    if (arraynum[i] < menor) {
        menor = arraynum[i];
    }

    if (arraynum[i] > mayor) {
        mayor = arraynum[i];
    }
}

console.log("Menor:", menor);
console.log("Mayor:", mayor);
console.log("Promedio:", prom);
console.log("SumaTotal:", sumTot);