function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta;
	var numero;
do
{	
	numero = parseInt (prompt ("ingrese un numero: "));
	
	if (numero >=0)
	{
		positivo= positivo + numero;

	}

	else
	{ 
		negativo= negativo * numero;
		contador++;

	}
	respuesta= prompt ("Desea continuar? :");	
} while (respuesta == "si");

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN