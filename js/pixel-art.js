var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

//Existe un elemento con id paleta y otro llamado grilla-pixeles.
//Seleccionar estos elementos del DOM y guardarlos en dos variables globales
var paleta = document.getElementById ("paleta");
var grillaPixeles = document.getElementById ("grilla-pixeles");

//Creá una función que recorra la lista de colores nombreColores, y que por cada color cree
//un elemento div y le asigne un background-color: color y la clase color-paleta.
//El elemento que cree tu función deberá ser agregado como hijo del elemento paleta.
function recorrerLista(){
  for (var i = 0; i < nombreColores.length; i++) {
		var nuevoDiv = document.createElement("div");
		nuevoDiv.style.backgroundColor = nombreColores[i];
		nuevoDiv.classList.add("color-paleta");
		paleta.appendChild(nuevoDiv);
	}
}
recorrerLista();

//Creación de la grilla. Pensar cada pixel como un <div> y agregarlo a la grilla-pixeles.
//El tamaño de la grilla deberá ser de 1750 pixeles.
function recorrerGrilla() {
  for (var i = 0; i < 1750; i++){
    var grilla = document.createElement("div");
    grillaPixeles.appendChild(grilla);
  }
}
recorrerGrilla();

//Al hacer clic en algún color, el indicador-de-color debe cambiar y reflejar la selección.
var indicador = document.getElementById("indicador-de-color")
paleta.addEventListener("click", registrarColor);
function registrarColor(event) {
   indicador.style.backgroundColor = event.target.style.backgroundColor;
}

//Programar la funcionalidad para que el usuario pueda pintar un
//pixel al hacer clic en un cuadrado de la grilla.
grillaPixeles.addEventListener("click", pintarPixel);
function pintarPixel(event) {
   event.target.style.backgroundColor = indicador.style.backgroundColor;
}

//Variable para guardar el elemento 'color-personalizado' (El que se elige con la rueda de color).
var colorPersonalizado = document.getElementById('color-personalizado');
colorPersonalizado.addEventListener("change",
(function(event) {
    // Se guarda el color de la rueda en colorActual
    colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicador.style.backgroundColor = colorActual;
  })
);

//Variable que nos diga si el mouse está o no apretado.
//Programar la funcionalidad para poder pintar con el mouse muchos pixeles a la vez con
//sólo mantenerlo apretado y moviéndolo por la grilla. Si está apretado pintamos y si no, no.
var mouseApretado = false;

grillaPixeles.addEventListener("mousedown", apretado);
grillaPixeles.addEventListener("mouseup", suelto);
grillaPixeles.addEventListener("mouseover", movido);

function apretado(event){
  mouseApretado=true;
}

function suelto(event){
  mouseApretado=false;
}

function movido(event) {
  if (mouseApretado) {
    pintado(event);
}
}

//selector (obligatorio): Elemento donde queremos detectar el movimiento.
//funcion (opcional): Función callback a ejecutar cuando se detecte el movimiento.
grillaPixeles.addEventListener("click", pintarPixel);
function pintarPixel(event) {
event.target.style.backgroundColor = indicador.style.backgroundColor;
}

//Permití borrar la pantalla apretando un botón.
//Hacer que los píxeles pintados se vayan difuminando de a poco hasta hacer toda la pantalla blanca.

$("#borrar").click (function () {
  var $pixelBorrado = $("#grilla-pixeles div").animate({"background-color": "#ffffff"},3000);
});

//Cargá a los superhéroes en forma de píxeles
//Hacer que sean editables, para ello ya tenemos implementada la función cargarSuperheroe(superheroe).

$("#wonder").click (function () {
  cargarSuperheroe(wonder);
});

$("#batman").click (function () {
  cargarSuperheroe(batman);
});

$("#invisible").click (function () {
  cargarSuperheroe(invisible);
});

$("#flash").click (function () {
  cargarSuperheroe(flash);
});

//Agregar la funcionalidad de exportar la imagen del Pixel Art y descargarla en la computadora del usuario.
//Para eso, ya viene dada una función que abre una ventana y nos permite guardar el arte en formato .png.

$("#guardar").click (function () {
  guardarPixelArt();
});

window.onload = function () {
recorrerLista();
recorrerColores();
}
