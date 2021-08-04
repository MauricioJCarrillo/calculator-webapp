let perimetroCuadrado = (lado) => lado*4;

let areaCuadrado = (lado) => lado**2;

let perimetroTriangulo = (ladoUno, ladoDos, base) => ladoUno + ladoDos + base;

let areaTriangulo = (ladoUno, ladoDos, base) => ((Math.sqrt((ladoUno)**2-(base/2)**2)) * base) / 2;

let perimetroCirculo = (radio) => (radio * 2) * Math.PI;

let areaCirculo = (radio) => (radio**2) * Math.PI;

function calcularPerimetroCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perímetro es: " + perimetro); 
}
function calcularAreaCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El área es: " + area); 
}
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("ladoUno");
    const input2 = document.getElementById("ladoDos");
    const input3 = document.getElementById("base");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert("El perímetro es: " + perimetro); 
}
function calcularAreaTriangulo() {
    const input1 = document.getElementById("ladoUno");
    const input2 = document.getElementById("ladoDos");
    const input3 = document.getElementById("base");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);
    const area = areaTriangulo(value1, value2, value3);
    alert("El área es: " + area);  
}
function calcularPerimetroCirculo() {
    const input = document.getElementById("radio");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert("El perímetro es: " + perimetro); 
}
function calcularAreaCirculo() {
    const input = document.getElementById("radio");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El área es: " + area); 
}
function validacionTrianguloIsosceles() {
    const input1 = document.getElementById("ladoOne");
    const input2 = document.getElementById("ladoTwo");
    const input3 = document.getElementById("base1");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);
    const value4 = Number(value3 / 2);
    if((value1 || value2) < value4){
        alert("No es un triangulo isósceles, ni siquiera es un triangulo");
    }
    else if(value1 != value2){
        alert("No es un triangulo isósceles");
    }
    else alert("Si es un triangulo isósceles");
}
function validacionAlturaTrianguloIsosceles() {
    const input1 = document.getElementById("ladoOne");
    const input2 = document.getElementById("ladoTwo");
    const input3 = document.getElementById("base1");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);
    const value4 = Number(value3 / 2);
    const altura = Number(Math.sqrt((value1)**2-(value3/2)**2));
    if((value1 || value2) < value4){
        alert("No es un triangulo isósceles, ni siquiera es un triangulo");
    }
    else if(value1 != value2){
        alert("No es un triangulo isósceles");
    }
    else alert("La altura es: " + altura);
}