/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno = parsefloat(document.getElementById("precioUno").value);
    var precioDos =  parsefloat(document.getElementById("precioDos").value);
    var precioTres =  parsefloat(document.getElementById("precioTres").value);
    suma= precioUno + precioDos + precioTres;
    alert("la suma de los precios es " + suma);
}
function Promedio () 
{
    var precioUno = parsefloat(document.getElementById("precioUno").value);
    var precioDos =  parsefloat(document.getElementById("precioDos").value);
    var precioTres =  parsefloat(document.getElementById("precioTres").value);
    suma= precioUno + precioDos + precioTres;
    promedio= suma/3;
    alert("el promedio es "+ promedio.toFixed(2));
}
function PrecioFinal () 
{
	var precioUno = parsefloat(document.getElementById("precioUno").value);
    var precioDos =  parsefloat(document.getElementById("precioDos").value);
    var precioTres =  parsefloat(document.getElementById("precioTres").value);
    var suma= precioUno + precioDos + precioTres;
    

}