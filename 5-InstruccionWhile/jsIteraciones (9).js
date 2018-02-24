function Mostrar()
{

	var contador=0;
	var mayor;
	var menor;
	var seguir;
	var numero;

	// declarar 
do
{
	numero= parseInt(prompt("ingrese un número: "));
	contador++;

	if (contador == 1)
	{
		menor = numero;
		mayor = numero;
	}
	if (numero > mayor)
	{
		mayor = numero;
	}
	if (numero < menor)
	{
		menor = numero;
	}
	seguir= prompt("¿Desea continuar?");
	
} while (seguir == "si");

document.getElementById("Maximo").value="El mayor es "+ mayor;
document.getElementById("Minimo").value="El menor es "+ menor;


}//FIN DE LA FUNCIÓN