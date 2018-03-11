function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	while (!(numero >=1 && numero<10)) 
	{
        prompt("reingrese un numero");
	}
 document.getElementById("Numero").value=numero;

}//FIN DE LA FUNCIÓN