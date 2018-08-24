//Declaración de variables
var saldoCuentaPesos = 5000,
	saldoCuentaDolares = 0,
	cotizacionDolarVenta = 28.5,
	cotizacionDolarCompra = 29,
    limiteExtraccion = 500, 
    precioAgua = 350, 
    precioTelefono = 425,
    precioLuz = 210, 
    precioInternet = 570, 
    cuentaAmiga1 = 1234567, 
    cuentaAmiga2 = 7654321,
    codigoSeguridad = 9091, 
    nombreUsuario = "Juan Jose";

//Ejecuta funcion inicio de sesion
iniciarSesion();

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoPesosEnPantalla();
	actualizarSaldoDolaresEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimiteExt = prompt("Ingrese el número límite de extracción:"); 
    console.log("Límite extracción ingresado :" , nuevoLimiteExt);

    if(validaNumero(nuevoLimiteExt)){
        limiteExtraccion = parseInt(nuevoLimiteExt);
        actualizarLimiteEnPantalla();
        alert("Nuevo límite de extracción: " + nuevoLimiteExt); 
        console.log("Límite de extracción actualizado: $" , nuevoLimiteExt);
    }
}

function extraerDinero() {
    var montoExtraccion = prompt("Ingrese la cantidad que desea extraer:");
    console.log("Monto extracción ingresado: " , montoExtraccion);

    if(validaNumero(montoExtraccion)){
        if(validaMontoExtraccion(montoExtraccion)){
            montoExtraccion = parseInt(montoExtraccion);
            
			alert("Has extraido: $" + montoExtraccion+"\nSaldo anterior: $" + saldoCuentaPesos
            +"\nSaldo actual: $" + descuentaSaldoPesos(montoExtraccion));

            saldoCuentaPesos = descuentaSaldoPesos(montoExtraccion);
            console.log("Nuevo saldo cuenta: $" , saldoCuentaPesos);
            actualizarSaldoPesosEnPantalla();  
        }
    }
}

function depositarDinero() {
    var montoDeposito = prompt("Ingrese la cantidad que desea depositar:");
    console.log("Monto deposito: " , montoDeposito);

    if(validaNumero(montoDeposito)){
        montoDeposito = parseInt(montoDeposito);
		
        alert("Has depositado: $" + montoDeposito+"\nSaldo anterior: $" + saldoCuentaPesos
        +"\nSaldo actual: $" + incrementaSaldoPesos(montoDeposito));

        saldoCuentaPesos = incrementaSaldoPesos(montoDeposito);
        console.log("Nuevo saldo cuenta: $" , saldoCuentaPesos);
        actualizarSaldoPesosEnPantalla(); 
    }
}

function pagarServicio() {
    var servicio = prompt("Ingrese el numero que corresponda con el servicio"+
    "que queres pagar\n1 - Agua\n2 - Luz\n3 - Internet\n4 - Telefono");
    console.log("Servicio ingresado: " , servicio);

    if(validaNumero(servicio)){
        switch(servicio){
            case "1": console.log("Pago de servicio Agua");
					  pagoServicio(precioAgua, "Agua");   
                      break;
            case "2": console.log("Pago de servicio Luz");
                      pagoServicio(precioLuz, "Luz");
                      break;
            case "3": console.log("Pago de servicio Internet");
                      pagoServicio(precioInternet, "Internet");
                      break;
            case "4": console.log("Pago de servicio Telefono");
                      pagoServicio(precioTelefono, "Telefono");
                      break;
            default: console.log("No se encontro servicio ingresado");
                     alert("El servicio ingresado no existe");
                     break;
        }
    }
}

function transferirDinero() {
    var montoTransferencia = prompt("Ingrese la cantidad que desea transferir:");
    console.log("Monto transferencia: " , montoTransferencia);

    if(validaNumero(montoTransferencia)){
        montoTransferencia = parseInt(montoTransferencia);
        if(!verificaSaldoPesos(montoTransferencia)){
            console.log("Monto de transferencia excede saldo cuenta");
            alert("No tienes saldo suficiente para realizar la transferencia.\nSaldo disponible: $" + saldoCuentaPesos);
        }else{
            var cuenta = prompt("Ingrese el número que corresponda con la cuenta"+
                "destino\nCuenta amiga 1: " + cuentaAmiga1+"\nCuenta amiga 2: " + 
                cuentaAmiga2);

            switch(cuenta){
                case "1": realizaTransferencia(montoTransferencia, cuentaAmiga1);
                        break;
                case "2": realizaTransferencia(montoTransferencia, cuentaAmiga2);
                        break;
                default: alert("El número ingresado no corresponde a ninguna cuenta"+
                                "asociada");
                        break;
            }
        }
    }
}

function iniciarSesion() {
    var codigoIngresado = prompt("Ingrese el código de seguridad de cuenta:");
    console.log("Codigo ingresado: " , codigoIngresado);

    if(codigoIngresado != codigoSeguridad){
        alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de "+
        "seguridad");
        saldoCuentaPesos = 0;
    }else{
        alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar"+
        " operaciones");
    }
}

function pagoServicio(precioServicio, nombreServicio){
    if(!verificaSaldoPesos(precioServicio)){
        console.log("Saldo insuficiente para pagar servicio ", nombreServicio);
        alert("No tienes saldo suficiente para pagar el servicio de " + nombreServicio + "\nSaldo disponible: $" + saldoCuenta);
    }else{
        alert("Has pagado el servicio de " + nombreServicio + ".\nSaldo anterior: $"+
            saldoCuentaPesos+"\nDinero descontado: $" + precioServicio + "\nSaldo actual: $"+
            descuentaSaldoPesos(precioServicio));
   
        saldoCuentaPesos = descuentaSaldoPesos(precioServicio);
        console.log("Nuevo saldo cuenta: $", saldoCuentaPesos);
        actualizarSaldoPesosEnPantalla(); 
    }
}

function pagarTarjeta(){
    var numeroTarjeta = prompt("Ingrese el número de tarjeta a pagar");
    console.log("Numero de tarjeta ingresado: " , numeroTarjeta);

    if(validaNumero(numeroTarjeta)){
        var montoPago = prompt("Ingrese el monto a pagar");
        console.log("Monto a pagar: " , montoPago);

        if(validaNumero(montoPago)){
            montoPago = parseInt(montoPago);
            if(!verificaSaldoPesos(montoPago)){
                console.log("No hay fondos suficientes"); 
                alert("No tienes saldo suficiente para pagar la tarjeta: "+
                    numeroTarjeta + ".\nSaldo disponible: $" + saldoCuentaPesos);
                    return;
            }else{
                console.log("Nuevo saldo cuenta: $" , descuentaSaldoPesos(montoPago));
                alert("Numero tarjeta: " + numeroTarjeta + "\nMonto a pagar: $"+
                    montoPago);
                saldoCuentaPesos = descuentaSaldoPesos(montoPago);
                actualizarSaldoPesosEnPantalla();
            }
        }
    }
}

function compraVentaDolar(){
	var opcion = prompt("Seleccione opcion deseada:\n1 - Comprar dólares\n2 - Vender dólares");
	console.log("Opción ingresada: ", opcion);
	
	if(validaNumero(opcion)){
		switch(opcion){
			case "1": compraDolares();
					  break;
			case "2": ventaDolares();
					  break;
			default: alert("La opción ingresada no es valida");
					 return;
		}	
	}
}

/*Esta funcion valida que el valor ingresado no sea nulo o vacio
y que ademas sea un numero mayor a 0. Si el  numero es valido retorna true, 
en caso contrario false.*/
function validaNumero(valorIngresado){
    if(valorIngresado == "" || valorIngresado == null){
        console.log("El valor ingresado es nulo");
        return false;
    }else{
        if(isNaN(valorIngresado)){
            console.log("El valor ingresado no es un numero");
            return false;
        }else{
            if(parseInt(valorIngresado) < 0){
                console.log("Numero negativo");
                alert("El valor ingresado no puede ser menor a 0");
                return false;
            }else{
               return true; 
            }     
        }   
    }
}

function realizaTransferencia(montoTransferencia, cuentaDestino){
    montoTransferencia = parseInt(montoTransferencia);
    alert("Se han transferido: $" + montoTransferencia + "\nCuenta destino: "+ cuentaDestino);
    saldoCuentaPesos = descuentaSaldoPesos(montoTransferencia);
    console.log("Nuevo saldo cuenta: $", saldoCuentaPesos);
    actualizarSaldoPesosEnPantalla();
}

function compraDolares(){
	var montoDolares = prompt("Cotizacion compra dólar: $" + cotizacionDolarCompra + "\nIngrese la cantidad de dólares que desea comprar:");
	console.log("Monto dolares ingresados: ", montoDolares);
	
	if(validaNumero(montoDolares)){
		var conversionPesos = parseFloat(montoDolares) * cotizacionDolarCompra;
		console.log("Monto de USD", montoDolares, " equivalente $: ", conversionPesos);
		if(!verificaSaldoPesos(conversionPesos)){
			alert("No tienes saldo suficiente para comprar USD: "+
                    montoDolares + ".\nSaldo disponible: $" + saldoCuentaPesos);
                    return;
		}else{
			saldoCuentaDolares = incrementaSaldoDolares(parseFloat(montoDolares));
			console.log("Saldo dolares: ", saldoCuentaDolares);
			saldoCuentaPesos = descuentaSaldoPesos(conversionPesos);
			console.log("Saldo pesos: ", saldoCuentaPesos);
			actualizarSaldoDolaresEnPantalla();
			actualizarSaldoPesosEnPantalla();
			alert("Has comprado USD: " + montoDolares + "\nSaldo cuenta: $" + saldoCuentaPesos);
		}		
	}	
}

function ventaDolares(){
	var montoDolares = prompt("Cotizacion venta dólar: $" + cotizacionDolarVenta + "\nIngrese la cantidad de dólares que desea vender:");
	console.log("Monto dolares ingresados: ", montoDolares);
	
	if(validaNumero(montoDolares)){
		var conversionPesos = parseFloat(montoDolares) * cotizacionDolarVenta;
		console.log("Monto de USD", montoDolares, " equivalente $: ", conversionPesos);
		if(!verificaSaldoDolares(montoDolares)){
			alert("No tienes saldo suficiente para vender USD: "+
                    montoDolares + ".\nSaldo disponible: USD" + saldoCuentaDolares);
                    return;
		}else{
			saldoCuentaDolares = descuentaSaldoDolares(parseFloat(montoDolares));
			console.log("Saldo dolares: ", saldoCuentaDolares);
			saldoCuentaPesos = incrementaSaldoPesos(conversionPesos);
			console.log("Saldo pesos: ", saldoCuentaPesos);
			actualizarSaldoDolaresEnPantalla();
			actualizarSaldoPesosEnPantalla();
			alert("Has vendido USD: " + montoDolares + "\nSaldo cuenta: $" + saldoCuentaPesos);
		}		
	}	
}

function validaMontoExtraccion(montoExtraccion){
    montoExtraccion = parseInt(montoExtraccion);
    if( montoExtraccion > limiteExtraccion){
        console.log("Monto extraccion excede limite extraccion");
        alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción.\nLímite de extracción: $" + limiteExtraccion);
        return false;
    }else if(!verificaSaldoPesos(montoExtraccion)){
        console.log("No dispones de saldo suficiente en la cuenta para extraer¨: $", montoExtraccion);
        alert("No hay saldo disponible en tu cuenta para extraer : $" + montoExtraccion + ".\nSaldo disponible: $" + saldoCuentaPesos);
        return false;
    }else if(montoExtraccion % 100 !== 0){
        console.log("Monto de extraccion no es multiplo de 100");
        alert("Solo puedes extraer billetes de 100.");
        return false;
    }else{
        return true;
    }
}

//Descuenta saldo cuenta pesos
function descuentaSaldoPesos(montoDescontar){
	return saldoCuentaPesos - montoDescontar;
}

//Descuenta saldo cuenta pesos
function descuentaSaldoDolares(montoDescontar){
	return saldoCuentaDolares - montoDescontar;
}

//Aumenta saldo cuenta pesos
function incrementaSaldoPesos(montoIncrementar){
	return saldoCuentaPesos + montoIncrementar;
}

//Aumenta saldo cuenta pesos
function incrementaSaldoDolares(montoIncrementar){
	return saldoCuentaDolares + montoIncrementar;
}

/*Esta funcion verifica si se dispone de saldo disponible en la cuenta al momento de realizar un pago, transferencia o extraccion.
En caso de que se disponga de saldo la funcion retorna true, en caso contrario false.*/
function verificaSaldoPesos(montoDinero){
	if(saldoCuentaPesos - montoDinero >= 0){
		return true;
	}else{
		return false;
	}
}

function verificaSaldoDolares(montoDinero){
	if(saldoCuentaDolares - montoDinero >= 0){
		return true;
	}else{
		return false;
	}
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoPesosEnPantalla() {
	document.getElementById("saldo-cuenta-pesos").innerHTML = "$" + saldoCuentaPesos;
}

function actualizarSaldoDolaresEnPantalla() {
	document.getElementById("saldo-cuenta-dolares").innerHTML = "US$" + saldoCuentaDolares;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}