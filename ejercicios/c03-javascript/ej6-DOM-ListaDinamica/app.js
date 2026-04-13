function agregar() {
    let producto = document.getElementById("producto").value;

    if (producto === "") {
        alert("Error: campo vacío");
        return;
    }

    let li = document.createElement("li");
    li.textContent = producto;

    let boton = document.createElement("button");
    boton.textContent = "Eliminar";

    boton.onclick = function() {
        li.remove();
        actualizarContador();
    };

    li.appendChild(boton);

    document.getElementById("lista").appendChild(li);

    document.getElementById("producto").value = "";

    actualizarContador();
}

function actualizarContador() {
    let cantidad = document.getElementById("lista").children.length;
    document.getElementById("contador").textContent = cantidad + " productos en la lista";
}