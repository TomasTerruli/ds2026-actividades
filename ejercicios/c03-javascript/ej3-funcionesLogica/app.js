function calcularPrecioFinal(monto, medioPago) {
    switch(medioPago){
        case "E":
            if (monto < 200){
                let precioFinal = monto;
                return `Monto: ${monto} | Pago: "EFECTIVO" | Final: ${precioFinal}`;
            } else {
                if (monto >= 200 && monto < 400){
                    let descuento = monto * 0.30;
                    let precioFinal = monto - descuento;
                    return `Monto: ${monto} | Pago: "EFECTIVO" | Final: ${precioFinal}`;
                } else {
                    let descuento = monto * 0.40;
                    let precioFinal = monto - descuento;
                    return `Monto: ${monto} | Pago: "EFECTIVO" | Final: ${precioFinal}`;
                }
            }
        break;

        case "D":
            if (monto < 200){
                let precioFinal = monto;
                return `Monto: ${monto} | Pago: "EFECTIVO" | Final: ${precioFinal}`;
            } else {
                if (monto >= 200 && monto < 400){
                    let descuento = monto * 0.20;
                    let precioFinal = monto - descuento;
                    return `Monto: ${monto} | Pago: "DEBITO" | Final: ${precioFinal}`;
                } else {
                    let descuento = monto * 0.40;
                    let precioFinal = monto - descuento;
                    return `Monto: ${monto} | Pago: "DEBITO" | Final: ${precioFinal}`;
                }
            }
        break;

        case "C":
            if (monto < 200){
                let precioFinal = monto;
                return `Monto: ${monto} | Pago: "EFECTIVO" | Final: ${precioFinal}`;
            } else {
                if (monto >= 200 && monto < 400){
                    let descuento = monto * 0.10;
                    let precioFinal = monto - descuento;
                    return `Monto: ${monto} | Pago: "CREDITO" | Final: ${precioFinal}`;
                } else {
                    let descuento = monto * 0.40;
                    let precioFinal = monto - descuento;
                    return `Monto: ${monto} | Pago: "CREDITO" | Final: ${precioFinal}`;
                }
            }
        break;
        
        default:
           return "Formato de pago invalido, porfavor ingrese nuevamente." 
    }
}