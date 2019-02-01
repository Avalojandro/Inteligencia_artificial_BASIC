//Los espacios en el primer Prompt son debido a que este programa fue diseñado para ser usado en Google Chrome
var nombre = prompt("                                           Hola, Soy KRONOS\n                                     Tu asistente web personal\n                                      -----Como te llamas-----");

alert("Hola "+ nombre  );
var aceptar = prompt("Que quieres hacer hoy?");

switch (aceptar) {
  case "sumar":
  var num1 =  prompt("excelente, vamos a sumar---introduce el primer numero");
  var num2 =  prompt("ahora introduce el segundo numero");
  var respuesta = parseInt(num1) + parseInt(num2);
    alert("la respuesta es "+ respuesta);
    break;

    case "restar":
    var num1 =  prompt("excelente, vamos a restar---introduce el primer numero");
    var num2 =  prompt("ahora introduce el segundo numero");
    var respuesta = num1 - num2;
    alert("la respuesta es "+ respuesta);
break;

    case "multiplicar":
    var num1 =  prompt("excelente, vamos a multiplicar---introduce el primer numero");
    var num2 =  prompt("ahora introduce el segundo numero");
    var respuesta = num1 * num2;
    alert("la respuesta es "+ respuesta);
break;

    case "dividir":
    var num1 =  prompt("excelente, vamos a dividir---introduce el primer numero");
    var num2 =  prompt("ahora introduce el segundo numero");
    var respuesta = num1 / num2;
    alert("la respuesta es "+ respuesta);
break;

case "no lo se":
var asaber =  prompt("Bueno, puedo ayudarte a sumar, restar, dividir y multiplicar\n que quieres hacer?");
if (asaber == "sumar") {
  var num1 =  prompt("excelente, vamos a sumar---introduce el primer numero");
  var num2 =  prompt("ahora introduce el segundo numero");
  var respuesta = parseInt(num1) + parseInt(num2);
    alert("la respuesta es "+ respuesta);

}

alert("la respuesta es "+ respuesta);
break;

  default:
alert("lo lamento, no puedo comprender la operacion");
}
