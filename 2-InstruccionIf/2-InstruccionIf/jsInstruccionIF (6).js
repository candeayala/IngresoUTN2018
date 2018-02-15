function Mostrar()
{
//tomo la edad  
var edad 
edad = ParseInt (document.getElementById("edad").value);

if (edad <13)
{
    alert("Es niño");
}
else if ( edad <18)
{
    alert ("Es adolescente");
}
else 
{
    alert("Es adulto");
}



}//FIN DE LA FUNCIÓN