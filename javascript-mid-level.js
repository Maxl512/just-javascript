// CAPITULO 7
// EL objeto window
// Es el objeto mas importante a la hora de trabajar con javascript
// es el mas improtante en la jerarquia, ya que todos dependen de el
// contiene todo para manejar la ventana del navegador,
// se puede cambiar a otras ventanas, conocer el tamaño de la ventana,
// cerramos el sitio web, podemos conocer el host name, protocolo
// y otros datos usados en el sitio web. el objeto window tiene muchos
// usos.

// window es un objeto de javascript, de el dependen todo
// hereda las propiedades de eventTarget
// let youtube = "https://ww.youtube.com";
// window.open(); 
// let ventana = window.open(youtube);
// nos permite abrir otra ventana con una url especificada

// Tambien podemos cerrar la ventana con el metodo
// window.close();
// ventana.close();
// la ventana se abre y se cierra

// Tenemos window.closed; que nos permite saber si una ventana esta cerrada
// console.log(ventana.closed);
// Si es cierto retorna true de otra forma retorna false

// Tenemos stop(); quenos permite detener la carga de una ventana o pagina

// Tenemos alert(); que nos muestra una ventana emergente
// alert("ola");

// Tenemos print(); que nos permite imprimir una pagina
// print();

// Tenemos prompt(); el cual le pide un dato al usuario y nos lo 
// devuelve como string
// prompt("qlq?");

// Tenemos confirm(); nos permite decidir entre aceptar o no algo
// si el usuario acepta devuelve true, sino devuelve false
// console.log(confirm("Moriras mañana..."));

// WINDOW SCREEN

// Tenemos los metodos de screen que nos permite trabajr con el tamaño o 
// ubicacion de la ventana

const screen = window.screen;
console.log(screen);
// nos devuelve las propiedades de la pantalla
// tenemos tambien
const screenLeft = window.screenLeft;
const screenTop = window.screenTop;
console.log("screenLeft: " + screenLeft + " ScreenTop: " + screenTop);
// screentop nos devuelve la distancia entre el borde superior de la
// pantalla hasta el navegador
// screen left hace lo mismo pero desde el borde izquierdo

// Estas son propiedades de lectura
// Tambien tenemos scrollX y scrollY
const scrollX = window.scrollX;
const scrollY = window.scrollY;
console.log("X: " + scrollX +  " scrollY: " + scrollY);

// ScrollX nos devuelve nuestra pósicion en el eje horizontal
// ScrollY nos devuelve nuestra posicion en el eje vertical

// Ademas tenemos el metodo scrooll(x, y); 
// nos permite llevar al usuario a una posicion en el eje del navegador
window.scroll(0, 100);


// Tenemos resizeBy(); y resizeTo(); que nos permite cambiar el tamaño
// de la ventana a una especificada, resize to es mas dinamico

// tenemos moveBY(); y moveTo(); que nos permite mover la ventana


// WINDOW LOCATION
// https://  www.youtube.com/ channel/Z5Ce8o6d
// protocol  hostname         pathname
// URL URL URL URL URL URL URL URL URL URL URL            
const href = window.location.href;
// nos permite conocer donde esta localizado el archivo
console.log(href);

const host = window.location.hostname;
// nos devuelve el dominio donde esta el archivo
console.log(host);

const path = window.location.pathname;
// nos permite saber en que parte del dominio estamos
console.log(path);

const protocol = window.location.protocol;
// nos permite conocer el protocolo
// http si no es seguro, https si es seguro
console.log(protocol);

// window.location.assign("https://www.youtube.com");
// nos permite cambiar la direccion a la especificada

// HISTORIA DE KOFLA


/*
DESPUES DE APROBAR KOFLA SE COMPRA UNA PC PARA AHCER TODO MAS FACIL
EL PROBLEMA VIENE YA Q NECESITA UNA RESOLUCION MEJOR
PARA PODER PROGRAMAR.

1)LA RESOLUCION DEBE SER FULL HD
2)PREGUNTARLE SI ESTA SEGURO AL COMPRARLA

let height = window.screen.availHeight;
let width = window.screen.availWidth;

let comprar = confirm(`El alto es de ${height}, el ancho es de ${width}`);

if (comprar) {
    alert("Compra realizada");
}else{
    alert("Compra no hecha");
};

LLEGA A SU CASA ENTRA A UNA WEB Y APRETA F11 Y EMPIEZA A A NAVEGAR EN 
PANTALLA COMPLETA, EL PROBLEMA ES QUE AL ESTAR EN PANTALLA COMPLETA
NO PUEDE LOCALIZAR LAS BARRAS DE HERRAMIENTAS DE LA INTERFAZ

1)MOSTRAR SUFICIENTES DATOS PARA CONOCER EL SITIO WEB

let direccion = window.location.href;
let pathname = window.location.pathname;
let hostname = window.location.hostname;
let protocols = window.location.protocol;

let html  = `Direccion: <b>${direccion}</b><br><br>`;
html += `Pathname: <b>${pathname}</b><br><br>`;
html += `Hostname: <b>${hostname}</b><br><br>`;
html += `Protocol: <b>${protocols}</b><br><br>`;

document.write(html);
*/

/* TERMINAR CAPITULO 7

EMPIEZA CAPITULO 8
JAVASCRIPT DEBUGGING, GOOGLE DEVELOPER TOOLS
HERRAMIENTAS PARA CONOCER NUESTROS ERRORES MAS FACILMENTE

F12 abre las herramientas de navegador
si quieremos ver aglo o modificarlo debemos hacer click derecho
y darle a inspeccionar encima del elemento q queremos

Podemos modificar donde veremos la consola en los 3 puntos
en la parte dock side y elegir como queremos verla

En las google developer tools tenemos varias pestañas que nos
permite ver lo que queremos analizar
tenemos
con ctrl+z deshacemos
con ctrl+Y rehacemos

////ELEMENTS: nos permite analizar o modificar los elementos en una pagina
esta dividido en dos partes
// la primera es todo el dom como lo vemos en un editor de codigo

podemos cortar copiar y pegar un elemento en esta parte, 
donde queramos hacerlo, en la parte copy

tambien podemos copiar las propiedade de dicho elemento
outerHTML
<script src="javascript-mid-level.js"></script>

selector
body > script

JS path
document.querySelector("body > script")

styles
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, cumque tempora placeat optio, in necessitatibus quis sint perspiciatis molestiae ab modi quia est nemo quos. Quaerat omnis sit minima ut! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae autem accusantium quam quisquam doloremque aliquam incidunt explicabo laborum. Debitis, commodi atque deleniti eos eius laudantium ad blanditiis iste facilis nemo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eaque laborum nemo enim explicabo est laudantium sequi doloribus, nam quia, autem temporibus itaque soluta velit provident aut necessitatibus facilis? Fugit.</p>
    color: #ccc;

Xpath 
/html/body/div/p

fullXpath
/html/body/div/p

en la parte force state, podemos forzar el estado de un elemento
:active, :hover, :focus, :visited

// la segunda tiene varias pestañas, 
styles
podemos modificar los estilos de un elemento aqui
para un mejor alcance de colores podemos tocar el cuadrad ode color
y ahi habran bastantes funcionalidades

computed
tambien podemos modificar la posicion de un elemento
su margin padding y border, su tamaño y eso

layout
nos permite ver el layout o divisiones de un elemento
event listeners
dom breakpoint
properties
accessibility

En las herramientas de desarroladores tambien podemos 
ver resoluciones de diferentes dispositivos

si queremos buscar algo podemos
ctrl+F nombre del elemento

////SOURCES: nos permite trabajar directamente con los archivos
que estan dentro

estos nos permiten modificar añadir y eliminar archivos
ademas podemos elegir cual archivo modificar

tenemos los snippets, que son un fragmento de codigo
que podemos ejecutar cunado queramos
para ejecutarlo necesitamos ctrl+enter

nos sirve para ejecutar codigos largos sin que se borren
como pasaria en la consola


////NETWORKS: nos permite conocer el estado, tipo, ini
cializador, tiempo de carga, y tamaño de los archivos
del sitio
ademas podemos hacer cosas como bloquear un arhivo
para q no cargue con block request URL

asi como tambien el sitio web

podemos borrar el cache el cual hace que lso archivos
cargados queden en el navegador, y si actualizamos
no debe cargarlos completamente sino solo los cambios


////Timeline o performance
con el performance monitor podemos conocer cuantos
recursos consume un sitio web o una pagina

////APLICATION:
nos permite ver el storage o servicios de un sitio
el cache, aplication, servicios etc, asi como los
archivos que se estan cargando


TODAS ESTAS SON HERRAMIENTAS DE DEBUGGING
NO SON NECESARIAS PARA APRENDER JAVASCRIPT

TERMINA CAPITULO 8


EMPIEZA CAPITULO 9
//
Requerimientos para programar de forma optima

Pantalla:
Pc
Minimo 22 pulgadas.
Resolucion de 1020x800
Laptop:
Minimo 16 pulgadas.

Procesador:
AMD y INTEL.
AMD: Stream
INTEL: Ripper
Raizer 7 o 9.
Core 7 o 9.

Memoria Ram:
4gb minimo.
16gb recomendable.
32gb optimo para desarrollo pesado.

Tarjeta grafica o GPU:
Es necesaria para programadores pesados.

Raton y teclado:
Teclado distribucion quarti.
Raton normal.

Sistema operativo:
Javascript es multiplataforma.
//

////EVENTOS
ES CUALQUIER COSA QUE SUCEDE EN UNA PAGINA, CUALQUIER CAMBIO QUE HAYA.
SON UTILES CUANDO ASOCIAMOS UN CODIGO PARA EL EVENTO ASIGNADO.

PARA ASOCIARLSO A UN CODIGO SE USA UN eventHandler;

*/ 

// hay diferentes formas de asociar un evento, esta de forma en linea
// codigo html linea 34, es un onEventHandler;
// tambien podemos hacerlo de forma linear, y que lo hagacon una funcion
// en javascript, linea de codigo html 35
function sayHello(){
    alert("Hola");
};

// Otra forma de llamar un evento es con selectores.
let buttonThree = document.querySelector("#buttonThree");

buttonThree.onclick = () =>{
    alert("Hola")
};
// En esta forma utilizamos el elemento buttonThree y le asignamos un evento
// el cual al ser llamado efectuara una funcion en flecha
// El Canel Case no aplica en eventhandler
// no es recomendable llamar un evento con selectores

// Actualemente se escucha son los eventListeners
let buttonFour = document.querySelector("#buttonFour");
// element.addEventListener(event, function);
buttonFour.addEventListener("click", helloFour);
// En eventListener no aplcia las funciones flechas, deben ser funciones 
// normales, si lo hacemos de esta forma
function helloFour(){
    alert("hola");
};
// Existe otra forma que es la mejor, ya que con ella podemos trabajar
// con parametros

let buttonFive = document.querySelector("#buttonFive");

buttonFive.addEventListener("click", (word) =>{
   word = "Hola";
   alert(word) ;
});

// Asi como podemos añadir eventos tambien los podemos remover

let buttonSix = document.querySelector("#buttonSix");
buttonSix.addEventListener("click", helloSix);

function helloSix(word, number){
    word = "hola";
    number = 5;
    alert(word + number);
    buttonSix.removeEventListener("click", helloSix);
};
// Esto removera el evento una vez ejecutado.
// solo podemos remover un evento con funciones asociadas

// El objeto Event
// Es el unico parametro q le podemos pasar a los eventos 
// Para saber las propiedades de un evento solo  tenemos que ponerlo como para
// metro

let buttonSeven = document.querySelector("#buttonSeven");

buttonSeven.addEventListener("click", (event) =>{
    console.log(event); //esto nos pasara las propiedades del evento click
// si las queremos conocer o utilizar
    console.log(event.target); // nos muestra q desencadeno el evento
});

// Flujo de evento
// Los eventos se eejcutan desde el mas especifico al menos especifico
// o viceevrsa

// por defecto tenemos bubbling que es desde el mas hasta el menos especifico
// y tenemos Capturing que es desde el menos hasta el mas especifico

let buttonEightContainer = document.querySelector("#buttonEight-container");
let buttonEight = document.querySelector("#buttonEight");

buttonEightContainer.addEventListener("click", ()=>{
   alert("soy el contenedor del boton");
});
buttonEight.addEventListener("click", ()=>{
    alert("Soy el boton");
});
// flujo bubbling por defecto

// Si queremos cambiarlo a capturing
// debemos agregarle un ultimo parametro diciendo true
let buttonNineContainer = document.querySelector("#buttonNine-container");
let buttonNine = document.querySelector("#buttonNine");

buttonNineContainer.addEventListener("click", ()=>{
   alert("soy el contenedor del boton");
}, true);
buttonNine.addEventListener("click", ()=>{
    alert("Soy el boton");
});
// ahora mostrara primero al contenedor, al darle true le das mas especificida
// que el mas especifico

// Para detener el flujo de evento, debemos accerder al objeto event 
// y usar el metodo stopPropagation();

let buttonTenContainerFather = document.querySelector("#buttonTen-container-father");
let buttonTenContainer = document.querySelector("#buttonTen-container");
let buttonTen = document.querySelector("#buttonTen");

buttonTenContainerFather.addEventListener("click", (event)=>{
   alert("Soy el contenedor del contenedor");
}, true);
buttonTenContainer.addEventListener("click", (event)=>{
   alert("soy el contenedor del boton");
    event.stopPropagation();
});
buttonTen.addEventListener("click", (event)=>{
    alert("Soy el boton");
    event.stopPropagation();
});
// De esta forma solo accedera al evento del elemento especificado, a no ser
// que le demos mas especificad a un elemento padre

//// EVENTOS DEL MOUSE
// click --- ocurre con un click

// dblclick --- ocurre con doble click

let buttonEleven = document.querySelector("#buttonEleven");
buttonEleven.addEventListener("dblclick", (event)=>{
   alert("Hice doble click, ah y holA");
});

// mouseover --- ocurre cuando pasamos el mouse por encima

let buttonTwelve = document.querySelector("#buttonTwelve");
buttonTwelve.addEventListener("mouseover",(event)=>{
   alert("Pase el mouse por encima") ;
});

//mouseout --- ocurre cuando el mouse se mueve fuera del element o sus elementos
// secundarios

let buttonThirteen = document.querySelector("#buttonThirteen");
buttonThirteen.addEventListener("mouseout", (event)=>{
   alert("Saque el mouse fuera") ;
});

// contextmenu --- ocurre cuando hacemos click derecho para abrir el contextmenu
let buttonFourteen = document.querySelector("#buttonFourteen");
buttonFourteen.addEventListener("contextmenu", (event)=>{
   alert("abri el context menu");
});

// mouseup --- cuando soltamos algo encima del elemento
let buttonFifteen  = document.querySelector("#buttonFifteen");
buttonFifteen.addEventListener("mouseup",(event)=>{
   alert("Solte algo encima") ;
});


//// EVENTOS DEL TECLADO  

// keydown --- cuando una tecla se presiona
let inputOne = document.querySelector("#inputOne");
inputOne.addEventListener("keydown",(event)=>{
   alert("aprete una tecla");
});

// keypress --- cuando una tecla se presiona y se suelta
let inputTwo = document.querySelector("#inputTwo");
inputTwo.addEventListener("keypress",(event)=>{
   alert("aprete una tecla y la solte");
});

//keyup --- cuando una tecla se suelta
let inputThree = document.querySelector("#inputThree");
inputThree.addEventListener("keyup",(event)=>{
   alert("solte una tecla");
});

//// EVENTOS DE LA INTERFAZ

// error --- se ejecuta cuando un error ocurre en la pagina
let imgOne = document.querySelector("#imgOne");
imgOne.addEventListener("error", (event)=>{
    console.log("esa imagen no existe o no cargo bien we");
});

// load --- cuando un objeto se carga
addEventListener("load",(event)=>{
    console.log("cargo la pagina we");
});

// beforeunload --- ocurre antes de que un elemento vaya a otro lugar
addEventListener("beforeunload", (event)=>{
    console.log("chao we :,)");
});
// unload es lo mismo solo que cuando el documento ya cargo

// resize --- se activa cuando se actualiza la resolucion de la ventana
addEventListener("resize", (event)=>{
   console.log("la ventana cambio de tamaño");
});

// scroll --- se activa cuando hacemos scroll
addEventListener("scroll",(event)=>{
   console.log("notemuevAsasitasbiEn>:)");
});

//select --- se utiliza mas q todo en input y textarea

let inputFour = document.querySelector("#inputFour");
inputFour.addEventListener("select", (event)=>{
   let start = event.target.selectionStart;
   let end = event.target.selectionEnd;
   let textComplete = inputFour.value;
   let textSelected = textComplete.substring(start, end);
   document.querySelector("#inputFour-container__p").innerHTML = "Seleccionaste: " + textSelected;
});

inputFour.addEventListener("keyup", (event)=>{
    console.log(event);
    console.log(event.keyCode + " " + event.which); 
});

////TIMERS o temporizadores
// nos permite trabajr con tiempo
// tenemos setTimeout(); clearTimeout(); setInterval(); clearInterval();

// setTimeout ejecuta un bloque de codigo una vez luego de que el tiempo especificado
// pase

const timer = setTimeout( () => { //aqui especificamos una funcion en flecha, pero tambien podemos
    //llamar otra funcion
    console.log("ya pasaron 2 segundos");
    //aqui colocamos lo que queremos que haga     
}, 2000); //esto se maneja con milisegundos, 1000 es igual a 1s

// si queremos que este temporizador no haga nada podemos asignarle a una variable
// y usar el metodo 
clearTimeout(timer);
// nunca se ejecutara timer

// setInterval(); ejecuta un bloque de codigo cada vez que el tiempo especificado
// pase, de forma infinita
const interval = setInterval(()=>{
    console.log("paso 3 segundos");
    
}, 3000);

// si queremos detener esto podemos usar el metodo clearInterval();
setTimeout(()=>{
    clearInterval(interval); 
}, 6010);
// esto hara que el interval se detenga una vez hayan pasado 6 segundos


//HISTORIA DE KOFLA
/*

KOFLA REPROBO DOS MATERIAS, AHORA TIENE Q ENVIAR UN FORMULARIO PARA REGISTRARSE EN LAS
MESAS DE EXAMEN PARA PODER INTENTAR APROBARLAS.
1)DEBE CONTENEDER NOMBRE, MAIL, Y MATERIA ADEUDADA
2)VALIDAR MAILS Y NOMBRES
3)ENVIAR AL SERVIDOR DE MANERA PULIDA

*/


const userMail = document.querySelector("#userEmail");
const userName = document.querySelector("#userName");
const userMatter = document.querySelector("#userMatter");
const buttonSubmit = document.querySelector("#btn-submit");
const result = document.querySelector("#result");

buttonSubmit.addEventListener("click",(event)=>{
   event.preventDefault();

   let error = validarCampos(); 
   if(error[0]){
       result.innerHTML = error[1];
   } else{
       result.innerHTML = "Solicitud enviada correctamente";
   };
});

const validarCampos =() => {
    let error = [];
    if(userName.value.length < 5 || userName.value.length > 40){
        error[0] = true;
        error[1] = "El nombre es invalido, necesita ser mayor de 4 y nmenor de 40 caracteres";
        return error;
    };

    if(userMail.value.length < 5 || 
    userMail.value.length > 40 || 
    userMail.value.indexOf("@") == -1 || 
    userMail.value.indexOf(".") == -1){
       error[0] = true;
       error[1] = "EL email es invalido";
       return error;
    };

    if(userMatter.value.length < 4 || userMatter.value.length > 20){
        error[0] = true;
        error[1] = "La materia no existe";
        return error;
    };

    error[0] = false;
    return error;
};

/*
LOS DATOS DE KOFLA Y EL RESTO DE LOS ALUMNOS YA FUERON ALMACENADOS 
CORRECTAMENTE AHORA CREAREMOS UN SISTEMA QUE LE PERMITA A LOS 
PROFESORES VISUALIZAR ESA INFORMACION.

1) LA INTERFAZ DEBE SER AGRADABLE Y ATRACTIVA
2)CONTENER DATOS DE FORMA ESTRUCTURADA
3)PODER ELEGIR CUANDO RINDE
4)DEBEN ACTUALIZAR Y REEMPLAZAR
*/

const alumnos = 
[
{
    nombre: "Maximo Gomez",
    email:"maximo@gmail.com",
    materia: "fisica 1"
},
{
    nombre: "Karen Garcia",
    email:"Karen@gmail.com",
    materia: "biologia 1"
},
{
    nombre: "Roberto Sanchez",
    email:"roberto@gmail.com",
    materia: "quimica 1"
},
{
    nombre: "Luis Hernandez",
    email:"Luis@gmail.com",
    materia: "matematica 1"
},
{
    nombre: "Kofla XD",
    email:"Kofla@gmail.com",
    materia: "Recreo"
}
];

const botonConfirm  = document.querySelector(".btn-confirm");

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos.nombre;
    let email = datos.email;
    let materia = datos.materia;
    let htmlCode = 
    `
    <div class="grid-item">
        <div class="nombre">${nombre}</div>
        <div class="email">${email}</div>
        <div class="materia">${materia}</div>
        <div class="semana">
            <select class="semanaElegida">
                <option value="Semana 1">Semana 1</option>
                <option value="Semana 2">Semana 2</option>
            </select>    
        </div>
    </div>
    `;
    document.querySelector(".grid-container").innerHTML += htmlCode;
};

botonConfirm.addEventListener("click", ()=>{
    let confirmar = confirm("Quieres confirmar?");
    if(confirmar){
        document.body.removeChild(botonConfirm);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semanaElegida");
        for (elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value;
        };
    };
});

//TERMINA CAPITULO 9


// EMPIEZA CAPITULO 10
// Control de flujo y manejo de errores
// El flujo es el orden que tiene el programa, el orden de ejecucion
// las sentecias de control de flujo son las condicionales, bucles etc
let number = 1
{
    let number = 2;
    console.log(number);
    {
        let number = 3;
        console.log(number)
        if(number > 4){
            console.log("3 es mayor q cuatro")
        };
    };
};
console.log(number)

// una de ellas es la sentencia switch

let fruit = "Pera";

switch(fruit){ //especifica que queremos condicionar

    case "Cambur": //condicionamos la ejecucion
       console.log("cambur");
       break; // detiene el switch

    case "Pera":
       console.log("Pera");
       break;
       
    case "Manzana":
       console.log("Manzana");
       break;

    default: //lo que hara por defecto si lo anterior no se cumple
       console.log("esa fruta no existe manin");
       break;

};
// Funciona igual que un if, pero el if tiene mejor rendimiento


/*SENTENCIAS DE MANEJO DE EXCEPCIONES
las sentencias de manejo de excepciones son la que se ejecutan
cuando un error ocurre, es manejar los errores
Para manejar un error utilizamos las excepciones estas son
un error que nos muestra la consola, las utilizamos para saber
que debemos hacer, asi como tambien lo usuarios pueden ser avisados

Existen las exceipciones ECMAscript que son las relacionadas a 
javascript

Error:

EvalError:

InternalError:

mangeError

ReferenceError: cuando referenciamos algo que no existem, o esta fuera
del scope

SyntaxError: cuando escribimos un codigo mal o a medias

TypeError:

URTError:

Existen las excepciones dom que son las relacionadas, con el 
documento


*/

// Las sentencia para manejo de excepciones es conocida como
// try...catch

try{
    console.log("aqui no hay error");
    // maneja el error, si hay un error se lo pasa como parametro
    throw {
        error:"Soy un virus F",
        info:"Nasci da ocuridade do mundo da igreja do Zeus"
    }; //Nos da una excepcion, podemos crear lo q sea
    // con esto para formar un error explicado
}
catch(error){ // al catch
    // el cual ejecutara un bloque de codigo
    console.log(typeof error); // type of nos permite ver el tipo de 
    // dato, un error es un objeto
    console.log(error.error);
    console.log("Hay un problema con tu codigo");
} finally { // asi no haya errores esto se ejecuta, tiene super prioridad
// sobre todos los anteriores
    console.log("JAJA");
}

// try..catch solo controlan errores que un programador controla
// los errores de sintaxis no los maneja

/*DEPURACION DE CODIGO
Es un proceso con el que limpiamos el codigo y corregimos errores
*/

/*HISTORIA DE KOFLA
LAS MESAS DE EXAMEN YA FINALIZARON Y EL PROFESOR LE TOMO UN ULTIMO
EXAMEN ESPECIAL A KOFLA, ASI QUE KOFLA HIZO DOS EXAMENES
LAMENTABLEMENTE S ROMPIO LA INSCRIPCiON DE NOTAS
DEBEMOS CREAR UNA SOLUCION AL PROBLEMA

1)CREAR MINI INTERFAZ PARA INTRODUCIR NOTAS
2)VALIDAR QUE NO HAYA ERRORES
3)PROMEDIAR NOTAS CON TRABAJOS
4)SI EL PROMEDIO ES MAYOR A 7/10 APROBAR
*/

const sendButton = document.querySelector("#note-submit");
let notes = [];
let state = [];
let total = [0];
let resultMessage = document.querySelector("#results-pupil");
sendButton.addEventListener("click",(event)=>{
   event.preventDefault();
   try{
      prevResult = parseInt(document.querySelector("#pupil-note").value);

      if (prevResult > 10 || prevResult < 0){
          sdasdadsa;
      };
      if(isNaN(prevResult)){
          throw "Pendejo";
      };


      notes.push(prevResult);
      definirPromedio(prevResult);
   } catch (error){
       alert("Debes ingresar una nota positiva menor o igual que 10");
   };

   if(notes.length == 5){
      showResults();
   };
});

const definirMensaje=(average)=>{
    let info;
    switch(average){
        case 1: info = "Eres bien pendejo";
        break;

        case 2: info = "Eres bien bruto";
        break;

        case 3: info = "Eres bien tonto";
        break;

        case 4: info = "apenas tienes conocimiento";
        break;

        case 5: info = "Mal";
        break;

        case 6: info = "Casi apruebas";
        break;

        case 7: info = "Eres regular";
        break;

        case 8: info = "Bien";
        break;

        case 9: info = "Excelente";
        break;

        case 10: info = "El albert Einstein y to' puej";
        break;

        default: info = null;
        break;
    };
    state[1] = info;
};

const definirPromedio =(pr)=>{
    total[0] += pr;
    
    if(notes.length == 5){
        let promedio = total[0] / notes.length;
        promedio = Math.round(promedio);
        state[0] = promedio;
        definirMensaje(promedio);
    };
};

const showResults = () =>{  
    let result = state[0];
    let info = state[1];
    let statePupil = "";
    if (result >= 7){
        statePupil = "APROBASTE."
    } else{
        statePupil = "REPROBASTE."
    };
    let message = `Tu promedio es de: ${result}/10, ${info}. ${statePupil}`;
    resultMessage.innerHTML = message;
    notes.splice(notes.length - notes.length, notes.length);
    total.pop();
    total.push(0);
};
// TERMINA CAPITULO 10

// EMPIEZA CAPITULO 11
/*
TRABAJR DE MANERA OBSOLETA
ALGO OBSOLETO ES ALGO INUTIL PARA LAS CIRCUNSTANCIAS ACTUALES

¿CUANDO ALGO SE VUELVE OBSOLETO?
DEPRECATED --- OBSOLETO.
ES ALGO INUTIL YA Q NO SIRVE Y NO ESTA DISPONIBLE.
NO ES RECOMENDADO.
TIENE UN BUG O FALLO.
ESTA POR SER REEMPLAZADO.
HAY MEJORES FORMAS DE HACERLO.

EFECTOS NEGATIVOS DE TRABAJAR OBSOLETO

-USO EXCESIVO DE RECURSOS.
-CODIGO CON BUGS O FALLOS.
-INNECESARIAMENTE LARGO.
-SEO.

COMO VERIFICAR SI ESTA OBSOLETO?

1 DE CADA WEBS USAN LIBRERIAS JAVASCRIPT OBSOLETAS.
SI TIENEN FUNCIONES METODOS OBSOLETOS.
VERIFICAR EN LOS SITIOS WEBS DE ESTADANRES OFICIALES

*/
// TERMINA CAPITULO 11

// EMPIEZA CAPITULO 12
/*
CALLBACKS (FUNCTION IN FUNCTION)
ES UNA FUNCION DENTRO DE UNA FUNCION
es un parametro q le pasamos a una funcion

function prueba(callback){
    callback("pedro");
};

function decirNombre(nombre){
    console.log(nombre);
};

prueba(decirNombre);



class Person {
    constructor(name, facebook){
        this.name = name;
        this.facebook = facebook;
    };
};

const data = [
    ["Maximo"],
    ["lucas", "Lucas Dalto.face"],
    ["Pedro", "Pedro Rodriguez.face"],
    ["Juan", "Juan Pablo.face"]
];

const people = [];

for (someone in data){
  people[someone] = new Person(data[someone][0], data[someone][1]);
};


const getName = (id, cb) =>{
  if(people[id].name == undefined)  {
      cb("No se ha encontrado la persona");
  }else{
      cb(null, people[id].name);
  };
};
const getFace = (id, cb) =>{
  if(people[id].instagram == undefined)  {
      cb("No se ha encontrado el Facebook");
  }else{
      cb(null, people[id].facebook);
  };
};

getName(0, (err, person) =>{
   if (err){
       console.log(err);
   } else{
       console.log(person);
   };
});
getFace(0, (err, facebook) =>{
   if(err) {
       console.log(err);
   }else{
       console.log(facebook)
   }
});


// los callbacks tienen desventajsa
la cual se soluciono con lo q llamamos promesas
*/



// Promesas
// estan tienen dos parametros el reject y el resolve
// reject()  si la condicion no se cumple lo devuelve
// resolve() si se cumple lo devuelve en la promesa
let pName = "pedro";

const promise = new Promise((resolve,reject)=>{
    if(pName !== "pedro") reject ("Lo siento el nombre no es pedro")
    else resolve(pName)
});
// Aqui estamos creando un obejto y pasandole un parametro como una funcion
promise.then((result)=>{
   console.log(result) ;
}).catch((e)=>{
    console.log(e);
})

//then es un metodo que tiene las promesas que acceden al valor
//que tiene el result, le pasamos como parametro el valor del resolve


class Person {
    constructor(name, facebook){
        this.name = name;
        this.facebook = facebook;
    };
};

const data = [
    ["Maximo"],
    ["lucas", "Lucas Dalto.face"],
    [, "Pedro Rodriguez.face"],
    ["Juan", "Juan Pablo.face"]
];

const people = [];

for (someone in data){
  people[someone] = new Person(data[someone][0], data[someone][1]);
};

const getSomeone = (id) =>{
    return new Promise((resolve, reject)=>{
        if(people[id].name == undefined) {reject("No se ha encontrado la persona")}
        else {resolve(people[id].name)};
    });
};

const getFace = (id) =>{
    return new Promise((resolve,reject)=>{
       if(people[id].facebook == undefined) {reject("No se ha encontrado el Facebook")}
       else {resolve(people[id].facebook)};
    });
};

let id = 3;

getSomeone(id).then((result)=>{
    
   console.log(result);

   return getFace(id);
    
}).then((facebook)=>{
    
   console.log(facebook);
    
}).catch((e)=>{
    
    console.log(e);
    
});


//FUNCIONES ASINCRONAS
/*
LAS PROMESAS SON ASINCRONAS ES DECIR TRABAJAN EN TIEMPO REAL
*/

const getInformation = (text) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(text)}, Math.random()*100);
    });
};


// LAs promesas esperan a recibir la informacion para poder ejecutarla

// Para crear una funcion asincrona solo se le debve agregar async adelante
/*
async function (){
    ....
}
const name = async () =>{
    ...
}

*/
const showInformation = async () =>{
     let data1 = await getInformation("Hello");
     let data2 = await getInformation("Hello two");
     let data3 = await getInformation("Hello three");
     console.log(data1);
     console.log(data2);
     console.log(data3);
};
showInformation();
// Asi hacemos que trabaje como async
// Cuando agregamos async podemos agregar await, que especifica q no haga mas nada hasta
// que obtenga la informacion necesaria

// HISTORIA DE KOFLA
/*
ESTA EN EL ULTIMO AÑO Y DEBE RECUPERAR TODAS LAS NOTAS
PARA SABER SI PASO AL OTRO SEMESTRE, SI LO HIZO ESTARIA MUY CERCA DE TERMINAR
SU CARRERA COMO INGENIERO.
EL PROBLEMA ES QUE TODAS ESTAN NOTAS ESTAN EN OTRO SERVIDOR
1)CREAR UN SISTEMA QUE ALMACENE TODA LA INFORMACION DE LAS MATERIAS
Y LAS MUESTRE EN PANTALLA DE FORMA ORDENADA
*/

const materiesContainer = document.querySelector("#materies");

const materies = [
    {
        name:"Fisica 1",
        note:5
    },{
        name:"Mathematic 3",
        note:7
    },{
        name:"Data Bases 5",
        note:8
    },{
        name:"Physic 6",
        note:3
    },{
        name:"Programming 8",
        note:10
    }
];

const getMatery = (id) =>{
    return new Promise((resolve,reject)=>{
        matery = materies[id];
        if(matery ==undefined) reject("That matery doesn't exist")
        else setTimeout(()=>{resolve(matery)}, Math.random()*1500);
    });
};
const showMateries = async () =>{
    let matery = [];
    for(theMatery in materies){
         matery[theMatery] = await getMatery(theMatery);
         let htmlCode =
         `
         <div id="matery">
              <div id="matery-name">${matery[theMatery].name}</div>
              <div id="matery-note">${matery[theMatery].note}</div>
         </div> 
         `;
         materiesContainer.innerHTML += htmlCode;
    };
};
showMateries();

// TERMINA CAPITULO 12
// CAPITULO 13
/*
PETICIONES HTTP
ES UNA PETICION QUE ENVIAMOS A UN SERVIDOR EL CUAL NOS DEVUELVE UNA INFORMACION
LA CUAL OBTENEMOS
ES UNA PEDIDA DE UN CLIENTE AL SERVIDOR

EL CLIENTE ES EL NAVEGADOR, LA INTERFAZ FRONTEND, LO QUE MANEJA EL USUARIO

EL SERVIDOR ES EL QUE PROCESAR TODA ESA INFORMACION

*/
/*
JSON(JAVASCRIPT OBJECT NOTATION)
JSON ES EXACTAMENTE IGUAL A LOS OBEJTOS
solo que las propiedades llevan comillas
*/

let objectThree = {
    "name":"Jesus",
    "lastname":"Rodriguez"
};

console.log(objectThree);

/*
las propiedades json llevan comillas ya que si als enviamos sin comillas a un servidor
puede generar muchos problemas

SERIALIZACION
SIGNIFICA QUE EL JSON ES UNA CADENA DE TEXTO
*/

let objectFour = {
    "name": "Jesus", 
    "lastname": "Rodriguez"
};
/*
PARA ENVIAR UN JSON SE NECESITA SERIALIZARLO
PARA SERIALIZARLO SE USA EL METODO JSON.stringify(object);
*/
let objectString = JSON.stringify(objectFour);
console.log(objectString);
// Aqui el objeto ha sido serializado

/*
AHORA PARA DESERIALIZARLO Y USARLO COMO OBJETO UTILIZAMOS EL METODO
JSON.parse(object);
*/
let objectNormal = JSON.parse(objectString);
console.log(objectNormal);

// JSON POLYFILL
/*
ES UNA FUNCINO QUE SIMULA UN JSON PARA NAVEGADORES ANTIGUOS
*/

// AJAX
/*ASYNCHRONYMOUS JAVASCRIPT XL
PARA TRABAJAR CON AJAX DBEMOS TENER UN SERVIDOR


CUANDO SOLICITAMOS INFORMACION A UN SERVIDOR ESTA SE ACTUALIZAR
DEBIDO A QUE ES UNA OPERACION SINCRONA

AJAX CAMBIO ESO, YA QUE NOS DA RESPUESTAS DE FORMA PARALELA

// OBJETO XMLHttpRequest
envia una solicitud
*/
const request = new XMLHttpRequest();

request.open("GET", "json.txt");
// Es un metodo que envia una peticion, tiene dos parametros
// el modo de solicitud "GET" o "POST"
/*
GET:  sus peticiones s epueden ver en la url
POST: son mas seguras que GEt ya que no las muestra en la URL
*/
// y la url de donde pediremos informacion
request.send();
// Aqui envia la informacion obtenida, con el metodo request.open();

request.addEventListener("readystatechange",()=>{
    if(request.readyState == 4 && request.status == 200){
        console.log(request.response);
    };
});
/*
la propiedad readyState de una peticion
tiene 4 valores
1: LA SOLICITUD SE CREO CORRECTAMENTE
2: LA SOLICITUD SE ENVIO Y RECIBIO CORRECTAMENTE
3: SE ESTA PROCESANDO LA PETICION
4: YA NOS DIO UNA RESPUESTA Y EL RESULTADO SE PUEDE MOSTRAR

la propiedad status nos desmuetra si la peticion se hizo correctamente
200: correctamente Y 201
*/
console.log(request);

// DE ESTA FORMA SE TRABAJABA ANTES 

// AHORA SE HACE ASI

let requestTwo;
if(window.XMLHttpRequest){
    requestTwo = new XMLHttpRequest();
} else{
    requestTwo = new ActiveXObject("Microsoft.XMLHTTP");
};

requestTwo.open("GET", "json.txt");
requestTwo.send();

requestTwo.addEventListener("load", ()=>{
   let responseXML;
   if(requestTwo.status == 200){ 
      responseXML = requestTwo.response;
      responseXML = JSON.parse(responseXML);
      for(one in responseXML){
          console.log(`Nombre: ${responseXML[one].name} ---- Apellido: ${responseXML[one].lastname}`);
      };
   } else {
      responseXML = "Lo sentimos no se encuentra el archivo disponible";
   };
   console.log(responseXML);
});
// OBJETO ActiveXObject
// Sirve para navegadores obsoletos como internet explorer


// METODO POST MAS SEGURO
let requestThree;
if(window.XMLHttpRequest){
    requestThree = new XMLHttpRequest();
} else{
    requestThree = new ActiveXObject("Microsoft.XMLHTTP");
};


requestThree.addEventListener("load", ()=>{
   let responseXML;
   if(requestThree.status == 200 || requestThree.status == 201){ 
      responseXML = requestThree.response;
   } else {
      responseXML = "Lo sentimos no se encuentra el archivo disponible";
   };
   console.log(JSON.parse(responseXML));
});


requestThree.open("POST", "json.txt");

requestThree.setRequestHeader("Content-type", "application/json;charset=UTF8");

requestThree.send();

// FETCH
// REEMPLAZO COMPLETAMENTE A AJAX Y ACTUALMENTE SE UTILIZA MUCHO MAS
/*
ES UNA FOMRA QUE TENEMOS DE TRABAJAR CON EL SERVIDOR IGUAL QUE CON 
XMLHttpRequest

FETCH ESTA BASADO EN PROMESAS
*/

let requestFour = fetch("json.txt", {
    method: "POST",
    body: `{
        "five": {
            "name":"Maximo",
            "lastname":"Gomez"
        }`,
    headers: {"Content-type" : "application/json"}
}).then(res=>res.json()).then(res=>console.log(res)).catch((err)=>{console.log("Hay un error");});
// fetch tiene dos parametros, el primero es la direccion del json
// y el segundo es el metodo de solicitud, el body que sera el contenido
// que le queremos pasar, y el segundo es el headers

// Esto de una vez crea el elmento XMl que antes aprendimos
// Las respuestas son asincronas

// con then manejamos los parametros como valores retornados lo cual
// aprendimos anteriormente

// Esta encapsuladas y no podemos acceder
// Para hacerlo debemos utilizar la propiedad text en el parametro de
// respuesta para acceder al string y asignarselo como valor al res
// Luego si queremos utilizarlo debemos deserializarlo usando el
// metodo JSON.parse y listo

// Ahora tambien podemos utilizar json() para de una vez deserializarlo

// blob() se utiliza para trabajar y leer archivos
let imagen = document.querySelector("#imgFet");

fetch("javas/aritmeticos.png")
.then(res=> res.blob())
.then(img=> imagen.src = URL.createObjectURL(img))
.catch((err)=>{
    console.log("Hubo un error");
});

// blol nos da los datos y propiedades del archivo,
// URL.createObjectURL(document), nos crea una url aleatoria que
// nos permite trabajar con el archivo


// AXIOS
// ES UN REEMPLAZO MAS MODERNO DE FETCH, ESTA BASADA EN XMLHttpRequest
// esta tna actualizada que no pesa casi nada

// Al trabjar con servidores actualmente se usa fetch y axios
// Usa una libreria para funcionar https://github.com/axios/

// Una libreria es un conjunto de funciones que nos permite 
// hacer todo mas practico y sencillo

// Un framework es un conjunto de librerias

axios.post("json.txt",{
    "five":{
        "name":"Maximo",
        "lastname":"Gomez"
    }
}).then(res=>console.log(res));

// axios no trae datos encapsulados por lo cual podemos trabajarlos de una vez
// para enviar datos lo colocamos en el segundo parametro


// Fecth y axios con await y async

async function getNameFetch (){
    try{
        let request = await fetch("json.txt");
        let result = await request.json();
        for(one in result){
            console.group(result[one].name + " " + result[one].lastname);
            console.log("Name: " + result[one].name);
            console.log("Lastname: " + result[one].lastname);
            console.log("Age: " + result[one].age);
            console.log("Note: " + result[one].note);
            console.groupEnd();
        };
    } catch(err){
        console.log("LA API FALLO");
    };
};
getNameFetch();


// HISTORIA DE KOFLA
/*
KOFLA YA ESTA CURASNDO EL ULTIMO SEMESTRE DE LA UNIVERSIDAD
TUVO LO NECESARIO PARA LOGRARLO, TIENE UNA DUDA
QUIERES SABER CUANTAS PERSONAS APRUEBAN AL SEMESTRE Y CUANTAS NO
1)UN SISTEMA Q LE EPRMITA OBETENER ESA INFORMACION
2)MOSTRARLA ORDENADAMENTE EN UN SITIO WEB 


getNameFetch();


*/
// TERMINA CAPITULO 13
// TERMINA EL MID LEVEL