const nodeList = document.querySelectorAll('li');
const array = [];
for(let i=0; i<nodeList.length; i++){
    array.push(Number(nodeList[i].innerText));
}




function calcularPromedioArray(array){
    let suma = 0;
    let promedio;
    for(let i=0; i<array.length; i++){
        suma += array[i];
    }promedio = suma / array.length;
    return promedio;
}




function obtenerMinimo(array){
    let arrayMinimo = array[0];
    for(let i=1; i<array.length; i++){
        if (array[i] < arrayMinimo){
            arrayMinimo = array[i];
        }  
    }return arrayMinimo;   
    
}




function obtenerMaximo(array){
    let arrayMaximo = array[0];
    for(let i=1; i<array.length; i++){
        if(array[i] > arrayMaximo){
            arrayMaximo = array[i];
        }
    }return arrayMaximo;
}




function obtenerNumeroMasFrecuente(array){
    let contador = 1;
    let cantidadDeRepeticiones = 0;
    let numeroMasFrecuente = [];
    let numerosContados =[];
    for(let i=0; i<array.length; i++){
        if(numerosContados.includes(array[i])){
            continue;
        }for(let j=1; j<array.length; j++){
            if(i === j){
                continue;
            }if(array[i] === array[j]){
                contador++;
            }    
        }if (contador > cantidadDeRepeticiones){
            cantidadDeRepeticiones = contador;
            numeroMasFrecuente = [];
            numeroMasFrecuente.push(array[i]);    
        }else if(contador === cantidadDeRepeticiones) {
            numeroMasFrecuente.push(array[i]);
        }contador = 1;
        numerosContados.push(array[i]);    
    }return numeroMasFrecuente;
}   




const nodoPagina = document.querySelector('body');
const nuevoParrafo = document.createElement('p');
const nuevoEm = document.createElement('em');
const texto1 = document.createTextNode(`El promedio es ${calcularPromedioArray(array)}`);
const texto2 = document.createTextNode(`El numero mas pequeño es ${obtenerMinimo(array)}`);
const texto3 = document.createTextNode(`El numero mas grande es ${obtenerMaximo(array)}`);
const texto4 = document.createTextNode(`El numero mas frecuente es ${obtenerNumeroMasFrecuente(array)}`);

function br() {
    return document.createElement('br');
}


nuevoEm.appendChild(texto1);
nuevoEm.appendChild(br());
nuevoEm.appendChild(texto2);
nuevoEm.appendChild(br());
nuevoEm.appendChild(texto3);
nuevoEm.appendChild(br());
nuevoEm.appendChild(texto4);
nuevoEm.appendChild(br());
nuevoParrafo.appendChild(nuevoEm);
nodoPagina.appendChild(nuevoParrafo);
