let lista = [
    100, 
    300, 
    600, 
    200, 
    150,
    150,
    150, 
    150,
    600,
    300,
    300,
    300,
    300,
    300,
    300
];

/*const lista = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];
*/
console.group("Calculo de promedio");

let sumaLista = 0;

for (let i=0; i < lista.length; i++){
    sumaLista = sumaLista + lista[i];
}
promedioLista = sumaLista / lista.length;

console.log("La sumatoria es: " + sumaLista);
console.log("La cantidad de elementos es: " + lista.length);
console.log("El promedio es: " + promedioLista);

console.groupEnd();

console.group("Calculo de mediana");
const orderLista = lista.sort();
const tamañoLista = orderLista.length;
let mitadLista = parseInt(tamañoLista / 2);
let parOimpar = 0;
let mediana = 0;
let elemento1 = 0;
let elemento2 = 0;

if((tamañoLista % 2) === 0){
    parOimpar = "Par";
    elemento1 = orderLista[mitadLista - 1];
    elemento2 = orderLista[mitadLista];
    mediana = (elemento1 + elemento2) / 2;
}
else{
    parOimpar = "Impar";
    mediana = orderLista[mitadLista]; 
}

console.log("La lista ordenada es: " + orderLista);
console.log("La cantidad de elementos es: " + tamañoLista);
console.log("La mitad de la lista es: " + mitadLista);
console.log("La lista es: " + parOimpar);
console.log("La mediana es: " + mediana);

console.groupEnd();

console.group("Calculo de moda");

let contsup = 1;
let contnew = 1;
let moda;

for(i=0; i < tamañoLista; i++){
    if(orderLista[i] == orderLista [i+1]){
        contnew ++;
    }    
    else{
        if(contsup < contnew){
            contsup = contnew;
            moda = orderLista[i];
            contnew = 1;
        } 
    }
}
console.log("La moda se repite: " + contsup + " veces"); 
console.log("La moda es: " + moda);

console.groupEnd();

/*const sumaLista = lista.reduce(
    function(valorAcumulado = 0, nuevoElemento){
    return valorAcumulado, nuevoElemento;
    }
);
    
let promedioLista = sumaLista / lista.lenght;
return promedioLista;

function calcularPromedio (lista) {
    /*const inputLista = document.getElementById(conjuntoDatos); 
    const valueLista = lista.array;
    const orderLista = 
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
        return valorAcunulado, nuevoElemento;
        }
    );
        
        promedioLista = sumaLista / lista.lenght;
        return promedioLista;
    } 
*/


