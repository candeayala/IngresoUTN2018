function Mostrar()
{

	var contadorNeg=0;
	var contadorPos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var acumuladorPos= 0;
	var acumuladorNeg=0;
	var diferencia;
	var numero;
	var seguir;
	var promedioPos;
	var promedioNeg;
	var positivo

	//declarar contadores y variables 
	
	var respuesta="si";
	do
	{
		numero= parseInt(prompt("Ingrese un numero: "));
		if (numero >0 )
		{
			contador++
			acumuladorPos= acumuladorPos + numero;
	
		}
		else if (numero <0)
		{
			contador++
			acumuladorNeg= acumuladorNeg + numero
		}
		else
		{
			contadorCeros++;
		}
		if(numero %2 ==0)
		{
			contadorPares++;
		}

	    seguir= prompt("Desea continuar? ");

	} while(respuesta!="si");

	promedioPos= acumuladorPos/promedioPos;
	promedioNeg= acumuladorNeg/promedioNeg;
	diferencia= contadorPos/contadorNeg;

	document.write("1-Suma de los negativos: " + acumuladorNeg + "<br/>");
	document.write("2-Suma de los positivos: " + acumuladorPos + "<br/>");
	document.write("3-Suma de los negativos: " + acumuladorNeg + "<br/>");
	document.write("1-Suma de los negativos: " + acumuladorNeg + "<br/>");
	document.write("1-Suma de los negativos: " + acumuladorNeg + "<br/>");
	document.write("1-Suma de los negativos: " + acumuladorNeg + "<br/>");
	document.write("1-Suma de los negativos: " + acumuladorNeg + "<br/>");


	
		
	




}//FIN DE LA FUNCIÓN