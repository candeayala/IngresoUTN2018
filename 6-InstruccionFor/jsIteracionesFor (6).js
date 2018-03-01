function Mostrar()
{ var numero;
    var contadorPares =0;
    numero = parseInt(prompt("ingrese un numero"));
    
    for (var i= 1 ; i <= numero; i++)
    { 
       if ( i %2 == 1)
    {
        continue;
    }

    contadorPares++;
    console.log(i);
    }
    
    console.log("se encontraron "+ contadorPares + "numeros pares");

    }



