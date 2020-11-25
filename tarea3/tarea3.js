document.querySelector('#calcular-tiempo-total').onclick = function(){
    let horasTotales = 0;
    let minutosTotales =0;
    let segundosTotales =0;
    const listaNumeros = document.querySelectorAll('.horas-minutos-segundos');
    console.log(listaNumeros);
    
    for (let i=3; i<=listaNumeros.length; i+=3){
        horasTotales += Number(listaNumeros[i-3].value); 
        minutosTotales += Number(listaNumeros[i-2].value);
        segundosTotales += Number(listaNumeros[i-1].value);
    }
    console.log(`${horasTotales} ${minutosTotales} ${segundosTotales}`);
    const nodoPagina = document.querySelector('body');
    const nuevoParrafo = document.createElement('p');
    const nuevoStrong = document.createElement('strong');
    const textoParrafo = document.createTextNode(`${horasTotales + (minutosTotales/60) + (segundosTotales/3600)} Horas`);
    nuevoStrong.appendChild(textoParrafo);
    nuevoParrafo.appendChild(nuevoStrong);
    nodoPagina.appendChild(nuevoParrafo);
    return false;
} 
