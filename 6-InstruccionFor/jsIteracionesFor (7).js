function Mostrar()
{
    var numero;
    var contadorDivisores =0;
    numero = parseInt(prompt("ingrese un numero"));
    
    for (var i= 1 ; i <= numero; i++)
    { 
       if ( numero % i == 0)
     {
        contadorDivisores++;
       console.log(i);
     }
     
    }
    console.log("se encontraron "+ contadorDivisores + "numeros divisores");



}//FIN DE LA FUNCIÓN