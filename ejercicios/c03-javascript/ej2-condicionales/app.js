function clasificarNota(nota) {
    if (nota < 4) {
        return "Desaprobado";
    } else {
        if(nota >=8){
            return "Promocionado";
        } else{
            return "Aprobado";
        }
    }
}

function diaDeLaSemana(numero) {
    switch (numero) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miercoles";
            
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sabado y es fin de semana!!!";
        case 7:
            return "Domingo y es fin de semana!!!";
        default:
            return"Numero Invalido, porfavor vuelva a intentar...";
    }
}