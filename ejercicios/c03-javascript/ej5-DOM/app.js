function generar() {
    let valor = document.getElementById("numero").value;  //esto agarra el valor del id numero
//validacion si esta vacio o menor a 1.
    if (valor === "" || valor < 1) {
        document.getElementById("resultado").textContent = "Error: número inválido"; //te cambia adentro de la etiqueta por ese texto
        return;
    }
    let resultado = ""; //declaras la variable como un string vacio
    for (let i = 1; i <= valor; i++) {
    
        for (let j = 0; j < i; j++) {
            resultado += "*";
        }
            resultado += "\n"; // te hace el salto de linea para armar el arbol
    }
    document.getElementById("resultado").textContent = resultado; //aca pasa lo mismo
}