function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroAleatorio;
	numeroAleatorio = Math.floor(Math.random()*10) +1;

if (numeroAleatorio >= 9)
{
	alert ("EXCELENTE " + numeroAleatorio);
}
else if (numeroAleatorio >4)
{
	alert ("APROBO " + numeroAleatorio);
}
else
{
	alert ("vamos, la pròxima se puede " + numeroAleatorio);
}
}//FIN DE LA FUNCIÓN