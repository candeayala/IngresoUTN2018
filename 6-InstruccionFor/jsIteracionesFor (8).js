function Mostrar()
{

    var numero;
    var esPrimo= true
    numero = parseInt(prompt("ingrese un numero"));
    
    for (var i= 2 ; i < numero; i++)
    { 
       if ( numero % i == 0)
     {
        esPrimo= false;
        break;
     }

    }
    if ( esPrimo == true)
    {
        console.log(numero + " es primo");
    }
    else
    {
        console.log(numero + " no es primo");
    }




}//FIN DE LA FUNCIÓN