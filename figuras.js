//Código del cuadrado
console.group("Cálculos del cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

//Código del triángulo
console.group("Cálculos del triángulo");

const ladoTrianguloUno = 6;
const ladoTrianguloDos = 6;
const baseTriangulo = 4;
console.log("Los lados del triángulo miden: " + ladoTrianguloUno + " cm, " + ladoTrianguloDos + " cm, " + baseTriangulo + " cm.");

const alturaTriangulo = 5.5;
console.log("La altura del triángulo es: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTrianguloUno + ladoTrianguloDos + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (alturaTriangulo * baseTriangulo) / 2;
console.log("El área del cuadrado es: " + areaTriangulo + " cm^2");

console.groupEnd();

//Código del circulo
console.group("Cálculos del circulo");

const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + " cm.");

const diametroCirculo = radioCirculo * 2;
console.log("E diametro del circulo es: " + diametroCirculo + " cm.");

const perimetroCirculo = diametroCirculo * 3.1416;
console.log("El perimetro del circulo (circunferencia) es: " + perimetroCirculo + " cm");

const areaCirculo = (radioCirculo * radioCirculo) * 3.1416;
console.log("El área del circulo es: " + areaCirculo + " cm^2");

console.groupEnd();