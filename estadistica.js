function calcularPromedio(){
    const inputArray = document.getElementById("conjuntoDatos");
    const arrayValue = inputArray.value;
	const lista  = arrayValue.split(', ');
    console.log(lista);
    let sumaLista = 0;

    for (let i=0; i < lista.length; i++){
        sumaLista = sumaLista + Number(lista[i]);
    }
    promedioLista = sumaLista / lista.length;

    console.log("La sumatoria es: " + sumaLista);
    console.log("La cantidad de elementos es: " + lista.length);
    console.log("El promedio es: " + promedioLista);

    const result = document.getElementById("result");
    result.innerText = ("El promedio es: " + promedioLista);
}

function calcularModa(){
    const inputArray = document.getElementById("conjuntoDatos");
    const arrayValue = inputArray.value;
	const lista  = arrayValue.split(', ');
    const orderLista = lista.sort();
    const tamañoLista = orderLista.length;
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
    console.log("La lista ordenada es: " + orderLista);
    const result = document.getElementById("result");
    result.innerText = ("La moda es: " + moda + " , se repite: " + contsup + " veces");
}

function calcularMediana(){
    const inputArray = document.getElementById("conjuntoDatos");
    const arrayValue = inputArray.value;
	const lista  = arrayValue.split(', ');
    const orderLista = lista.sort();
    const tamañoLista = orderLista.length;
    let mitadLista = parseInt(tamañoLista / 2);
    let parOimpar = 0;
    let mediana = 0;
    let elemento1 = 0;
    let elemento2 = 0;

    if((tamañoLista % 2) === 0){
        parOimpar = "Par";
        elemento1 = Number(orderLista[mitadLista - 1]);
        elemento2 = Number(orderLista[mitadLista]);
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
    const result = document.getElementById("result");
    result.innerText = ("La mediana es: " + mediana + ". Está en la posición: " + mitadLista);
}
