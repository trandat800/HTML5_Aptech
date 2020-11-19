function Multiply() {
    number1 = document.getElementById("x").value;
    number2 = document.getElementById("y").value;
    document.getElementById("result").innerHTML = number1 * number2;
}
function Sum() {
    number1 = document.getElementById("x").value;
    number2 = document.getElementById("y").value;
    document.getElementById("result").innerHTML = +number1 + +number2;
}