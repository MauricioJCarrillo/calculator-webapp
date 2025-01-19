let perimetroCuadrado = (lado) => lado * 4;

let areaCuadrado = (lado) => lado ** 2;

let perimetroTriangulo = (ladoUno, ladoDos, base) => ladoUno + ladoDos + base;

let areaTriangulo = (ladoUno, ladoDos, base) =>
  (Math.sqrt(ladoUno ** 2 - (base / 2) ** 2) * base) / 2;

let perimetroCirculo = (radio) => radio * 2 * Math.PI;

let areaCirculo = (radio) => radio ** 2 * Math.PI;

function calcularPerimetroCuadrado() {
  const input = document.getElementById("ladoCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  const output = document.getElementById("resultCuadrado");
  output.innerText = "El perimetro es: " + perimetro;
}
function calcularAreaCuadrado() {
  const input = document.getElementById("ladoCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  const output = document.getElementById("resultCuadrado");
  output.innerText = "El área es: " + area;
}
function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("ladoUno");
  const input2 = document.getElementById("ladoDos");
  const input3 = document.getElementById("base");
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  const value3 = Number(input3.value);
  const perimetro = perimetroTriangulo(value1, value2, value3);
  const output = document.getElementById("resultTriangulo");
  output.innerText = "El perímetro es: " + perimetro;
}
function calcularAreaTriangulo() {
  const input1 = document.getElementById("ladoUno");
  const input2 = document.getElementById("ladoDos");
  const input3 = document.getElementById("base");
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  const value3 = Number(input3.value);
  const area = areaTriangulo(value1, value2, value3);
  const output = document.getElementById("resultTriangulo");
  output.innerText = "El área es: " + area;
}
function calcularPerimetroCirculo() {
  const input = document.getElementById("radio");
  const value = input.value;
  const perimetro = perimetroCirculo(value);
  const output = document.getElementById("resultCirculo");
  output.innerText = "El perímetro es: " + perimetro;
}
function calcularAreaCirculo() {
  const input = document.getElementById("radio");
  const value = input.value;
  const area = areaCirculo(value);
  const output = document.getElementById("resultCirculo");
  output.innerText = "El área es: " + area;
}
function validacionTrianguloIsosceles() {
  const input1 = document.getElementById("ladoOne");
  const input2 = document.getElementById("ladoTwo");
  const input3 = document.getElementById("base1");
  const output = document.getElementById("resultTrianguloIsosceles");
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  const value3 = Number(input3.value);
  const value4 = Number(value3 / 2);
  if ((value1 || value2) < value4) {
    output.innerText =
      "No es un triangulo isósceles, ni siquiera es un triangulo";
  } else if (value1 != value2) {
    output.innerText = "No es un triangulo isósceles";
  } else output.innerText = "Si es un triangulo isósceles";
}
function validacionAlturaTrianguloIsosceles() {
  const input1 = document.getElementById("ladoOne");
  const input2 = document.getElementById("ladoTwo");
  const input3 = document.getElementById("base1");
  const output = document.getElementById("resultTrianguloIsosceles");
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  const value3 = Number(input3.value);
  const value4 = Number(value3 / 2);
  const altura = Number(Math.sqrt(value1 ** 2 - (value3 / 2) ** 2));
  if ((value1 || value2) < value4) {
    output.innerText =
      "No es un triangulo isósceles, ni siquiera es un triangulo";
  } else if (value1 != value2) {
    output.innerText = "No es un triangulo isósceles";
  } else output.innerText = "La altura es: " + altura;
}
