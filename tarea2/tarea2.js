document.querySelector("#obtener-nombre").onclick = function(){
    const primerNombre = document.querySelector("#primer-nombre").value;
    const segundoNombre = document.querySelector("#segundo-nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const edadUsuario = document.querySelector('#edad').value;
    const nodoPagina = document.querySelector('body');
    const nuevoParrafo = document.createElement('p');
    const textoParrafo = document.createTextNode(`${primerNombre} ${segundoNombre} ${apellido}, ${edadUsuario} años`);
    nuevoParrafo.appendChild(textoParrafo);
    nodoPagina.appendChild(nuevoParrafo);
    document.querySelector("h1").innerText = `Bienvenido, ${primerNombre} ${segundoNombre} ${apellido}!`;
    
}

document.querySelector("#limpiar").onclick = function(){
    document.querySelector("h1").innerText = "Bienvenido!";
}

