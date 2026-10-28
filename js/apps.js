const gustos = document.getElementById('gustos');
const respuesta = document.getElementById('respuesta');
const imgMusica = document.getElementById('imagenMusica');
const imgDeporte = document.getElementById('imagenDeporte');
const imgCarro = document.getElementById('imagenCarro');

gustos.addEventListener('change', () => {
  const seleccion = gustos.value;
  imgMusica.style.display = 'none';
  imgDeporte.style.display = 'none';
  imgCarro.style.display = 'none';
  

  if (seleccion === "") {
    respuesta.textContent = '';
  } else {
    respuesta.textContent = 'Opción seleccionada: ' + seleccion;
                if (seleccion === 'Musica') {
                imgMusica.style.display = 'block';
                } else if (seleccion === 'Deporte') {
                imgDeporte.style.display = 'block';
                } else if (seleccion === 'Carro') {
                imgCarro.style.display = 'block';
                }
  }
});

const entradaNumero = document.getElementById('numero');
const salidaNumero = document.getElementById('estado'); 

entradaNumero.addEventListener('input', function() {
    let valor = Number(entradaNumero.value);

    if (valor === 333) {
        salidaNumero.textContent = '¡Número correcto!'; 
    } else if (valor < 333) {
        salidaNumero.textContent = 'Número muy bajo.'; 
    } else if (valor > 333) { 
        salidaNumero.textContent = 'Número muy alto.'; 
    }
});



const boton = document.getElementById("mostrar");
const salida = document.getElementById("salida");

boton.addEventListener("click", function () {
    salida.textContent = alert("Profe presteme 2k pal pasaje");
});