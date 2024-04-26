function Soma()
{
    var num1 = parseInt(document.getElementById("n1").value);
    var num2 = parseInt(document.getElementById("n2").value);
    var soma =num1 + num2;
    document.getElementById('res').innerHTML = "Resultado: " + soma;
}