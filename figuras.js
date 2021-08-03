let perimetroCuadrado = (lado) => lado*4;

let areaCuadrado = (lado) => lado**2;

let perimetroTriangulo = (ladoUno, ladoDos, base) => ladoUno + ladoDos + base;

let areaTriangulo = (ladoUno, ladoDos, base) => ((Math.sqrt((ladoUno)**2-(base/2)**2)) * base) / 2;

let perimetroCirculo = (radio) => (radio * 2) * Math.PI;

let areaCirculo = (radio) => (radio**2) * Math.PI;