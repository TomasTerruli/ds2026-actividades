"use strict";
function generar() {
    let input = document.getElementById("numero");
    let valor = input.value;
    //validacion si esta vacio o menor a 1.
    if (valor === "" || Number(valor) < 1) {
        let resultadoElem = document.getElementById("resultado");
        resultadoElem.textContent = "Error: número inválido";
        return;
    }
    let resultado = "";
    for (let i = 1; i <= Number(valor); i++) {
        for (let j = 0; j < i; j++) {
            resultado += "*";
        }
        resultado += "\n"; // te hace el salto de linea para armar el arbol
    }
    document.getElementById("resultado").textContent = resultado;
}
