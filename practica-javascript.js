/*
// VARIABLES
// Es una espacio que nosotros guradamos en memoria
var recipiente = "agua";
console.log(recipiente);
// // En el se pueden guardar 3 importantes tipos de datos
// // String, Number y Boolean
// // String
var string = "Texto";
console.log(string);
// // number
var number = 10;
console.log(number);
// //booleano
var tru = true;
console.log(tru);
var fal= false;
console.log(fal);
// Hay casos especiales de datos
// estos nos explican si una variable no esta definida o hay un error
// estos son:
// Undefined, Null, Nan
// Undefined: nos dice q una variable existe pero no tiene valor
// Null: es un valor vacio
// Nan: not a number, se obtiene cuando se intenta hacer una
// operacion con algo mas q numeros

// Hay tres formas de declarar una variable
// estas son
// Var, Let y Const
// Var: tiene alcanze global
// Let: Actualmente se utiliza let pq nos limite el alcanze
// al bloque donde se ejecuta
// const: es una variable incambiable, no se pueden cambiar
// *ver primera imagen explicando el scope*

// Para crear una variable solo se necesita hacer esto:
let numero;
// // sin embargo, como no tiene valor nos soltara: undefined
// // ahora para inicializarla, es decir, darle un valor 
// // se debe hacer esto
numero = 30;
// // javascript utiliza el ultimo valor de las variables
// // si hacemos esto:
numero = 40;
// // y luego la mostranmos
console.log(numero);
// nos mostrara el ultimo valor
// const no se puede inicializar como con let
// nos dara error, se debe inicializar en linea

// Ahora bien, se pueden crear multiples variables

let numero1, numero2, numero3;

numero1 = 10;
numero2 = 20;
numero3 = 30;

console.log(numero1);
console.log(numero2);
console.log(numero3);
// solo se deben separar por comas

// hoisting: habla sobre de como un sitio web puede ser
// afectado por la creacion y su ejecucion
// mas adelante se explicara

// Pruebas con prompt

let estado = prompt("Habla perro, ¿todo bien?");

// los prompt piden informacion al usuario
// esa informacion puede ser usada mientras q se encuentre
// en esa misma pagina web

console.log(estado);



// OPERADORES 
// OPERADORES DE ASIGNACION
// Un operador de asignacion asigna un valor al operando de
// la izquierda basado en el valor del operando de la derecha

// *ver segunda imagen*

// Resto
let resto = 50;
resto %= 12;
console.log(resto);

// // exponencianion
let exponenciacion = 5;
exponenciacion **= 3;
console.log(exponenciacion);


// OPERADORES ARITMETICOS
// Los operadores aritmeticos toman valores numericos(ya sean 
// literales o variables) como sus operandos y retornan un 
// valor numerico unico.

// *ver tercera imagen*


// CONCATENACION
// solo se deben separar las variables, cadenas de texto
// o numero, con el signo "+".
let saludos = "Hola mundo,";
let pregunta = "Hay alguien ahi?";
let edad = 15;
let frase = saludos + " " + pregunta + " " + edad;

console.log(frase);

// concat: se usa para concatenar, para poder usarlo debe de
// haber un string

let saludos2 = "Hola mundo2,";
let pregunta2 = "Hay alguien ahi2?";
let edad2 = 16;
let frase2 = saludos2.concat(pregunta2) + " " + edad2;

console.log(frase2);

//backits: " ` " es una forma mas practica de concatenar
// // variables y texto

let saludos3 = "Hola mundo3,";
let pregunta3 = "Hay alguien ahi3?";
let edad3 = 17;
let frase3 = `${saludos3} viva chiabeee, ${pregunta3}, tengo ${edad3} años`;

console.log(frase3);

// comillas simples y dobles
// si se utilizan comillas dobles, no se puede utilizar de nuevo
// hasta que todo termine
// si se utilizan comillas simples, hay mas etica


let frase4 = 'Viva "chiabeeeee", wiiiiii, que viva papi "madurooo';

console.log(frase4);


// OPERADORES DE COMPARACION
// Estos comparan dos expresiones y devuelven un valor
// Boolean que representa la relacion de sus valores

// *ver cuarta imagen*

// OPERADORES LOGICOS
// Estos nos devuelven un resultado a partir 
// de que se cumpla o no una condicion, su resultado es booleano
// y sus operandos son valores logicos o asimilables a ellos

// AND(&&) si las dos son true, el resultado es true
// OR (||) si alguna de las dos es true, el resultado es true
// NOT (!) da el contrario


// CANEL CASE
// la primera palabra empieza en minuscula, pero las siguientes
// empiezan en mayuscula, asi son todas los metodos en javascript
// holaComoEstasAmigo --- ejemplo

// CONDICIONALES
// Un condicional es una sentencia que nos permite validar algo

// tip: los bloques se ejecutan. los bloques comienzan
// con llaves y se cierran con als mismas. estos se ejecutan
// // si el valor es true

if (20 == "20") {
    console.log("sicierto");
} else if (20 === "20"){
    console.log("sicierto");
} else {
    console.log("tu eres pendejo o q?");
}

// Historia de kofla parte 1:
// Tres chicos de 23 años perfectamente normales, entran a una 
// heladeria a comprar un helado, pero hay un problema: los precios 
// no estan al lado de cada estante con su respectivo helado.
// Ellos quieren comprar el helado mas caro que puedan con el
// dinero que tienen.
// Cada uno tiene distintas cantidades de dinero y hay una tabla
// en la que podemos basarnos para saber el costo de cada helado.

// Tenemos las siguientes soluciones:
// 1-Ingresar el monto y mostrar el helado mas caro q pueden comprar
// 2-Si hay 2 o mas, mostrar ambos
// 3-Indicar el vuelto

// let dineroKofla, dineroRoberto, dineroPedro;

dK = prompt("cuanto dinero tienes Kofla?");
dR = prompt("cuanto dinero tienes Roberto?");
dP = prompt("cuanto dinero tienes Pedro?");

if (dK >= 1 && dK < 1.6) {
    console.log("Kofla comprate el helado de crema");
    console.log("y te sobran " + (dK - 1));
} else if (dK >= 1.6 && dK < 1.7) {
    console.log("Kofla comprate el helado de chocolate");
    console.log("y te sobran " + (dK - 1.6));
} else if (dK >= 1.7 && dK < 1.8) {
    console.log("Kofla comprate el helado de fresa");
    console.log("y te sobran " + (dK - 1.7));
} else if (dK >= 1.8 && dK < 2.9) {
    console.log("Kofla comprate el helado de manzana");
    console.log("y te sobran " + (dK - 1.8));
} else if (dK >= 2.9) {
    console.log("Kofla comprate el helado de sardina o el napolitano");
    console.log("y te sobran " + (dK - 2.9));
} else{
    console.log("Kofla, Lo siento tas muy pobre");
}

if (dR >= 1 && dR < 1.6) {
    console.log("Roberto, comprate el helado de crema");
    console.log("y te sobran " + (dR - 1));
} else if (dR >= 1.6 && dR < 1.7) {
    console.log("Roberto, comprate el helado de chocolate");
    console.log("y te sobran " + (dR - 1.6));
} else if (dR >= 1.7 && dR < 1.8) {
    console.log("Roberto, comprate el helado de fresa");
    console.log("y te sobran " + (dR - 1.7));
} else if (dR >= 1.8 && dR < 2.9) {
    console.log("Roberto, comprate el helado de manzana");
    console.log("y te sobran " + (dR - 1.8));
} else if (dR >= 2.9) {
    console.log("Roberto, comprate el helado de sardina o el napolitano");
    console.log("y te sobran " + (dR - 2.9));
} else{
    console.log("Roberto, Lo siento tas muy pobre");
}

if (dP >= 1 && dP < 1.6) {
    console.log("Pedro, comprate el helado de crema");
    console.log("y te sobran " + (dP - 1));
} else if (dP >= 1.6 && dP < 1.7) {
    console.log("Pedro, comprate el helado de chocolate");
    console.log("y te sobran " + (dP - 1.6));
} else if (dP >= 1.7 && dP < 1.8) {
    console.log("Pedro, comprate el helado de fresa");
    console.log("y te sobran " + (dP - 1.7));
} else if (dP >= 1.8 && dP < 2.9) {
    console.log("Pedro, comprate el helado de manzana");
    console.log("y te sobran " + (dP - 1.8));
} else if (dP >= 2.9) {
    console.log("Pedro, comprate el helado de sardina o el napolitano");
    console.log("y te sobran " + (dP - 2.9));
} else{
    console.log("Pedro, Lo siento tas muy pobre");
}


// Kofla prefiero no comprar ningun helado, se molesta, rompe todo el local
// el local y decide darle ese dinero a un indigente, el cual 
// piensa comprar un boleto de loteria. 

// El indigente piensa estas opciones:
// 1-Si le alcanza uno, lo compra 
// 2-Si le alcanza dos, compra dos 
// 3-Si le alcanza tres y le sobra, compra dos y regala el vuelto
// 4-Debe mostrarse en la pantalla los boletos que compro y 
// cuanto fue el vuelto.

// Tenemos un detector de mentiras muy utilizado por la policia
// creado con javascript. Este devuelve un dato asociado a la
// culpabilidad de sospechoso. 
// Devuelve 1 si esta mintiendo
// Devuelve 2 si no lo esta haciendo
// Devuelve 3 si esta indeciso

// Mientras tanto en el barrio sucedio un asesinato,
// y habian tres sospechosos, entre los cuales estaba kofla,
// cosa obvia debido a que habia destrozado un local el dia anterior.
// La policia se lo llevo a la comisaria, para utilizar en él, 
// el detector de mentiras.
// Los policias tienen estas opciones:
// 1- si el sospechoso miente, darle una descarga 
// 2- si no miente, no hacer nada
// 3- y si el detector no se decide, la pregunta debe ser mas 
// concreta 



// SE ACABA CAPITULO 1


// EMPIEZA CAPITULO 2

//ARRAYS: son un contenedor de difentees tipos de elementos
// con diferentes tipos de datos.
// Es una variable con muchos datos

// *ver quinta imagen*

let frutas = ["Pera", "Manzana", "Mango", "Fresa"];

// // Para accerder a esos datos, se debe utilizar el simbolo "[]"
// // especificando la posicion del elemento

console.log(frutas[1]);

// Todos los valores sin definir dentro de un array
// se marcan como undefined. Cuando un array se crea
// todas las posiciones son declaradas

// Una cosa es el numero de elemento
// Manzana es el elemento numero dos

// Otra la posicion de dicho elemento
// Manzana se posiciona en la posicion numero uno

// Los datos estan asociados con un indice
// que son las posiciones

// ARRAYS ASOCIATIVOS
// Un array asociativo es un conjunto de un elemento
// con diversas propiedades y datos

let pc = {
    nombre: "Maximo",
    procesador: "Intel Core I7",
    ram: "8GB",
    espacio: "250gb"
}

// Para acceder a los datos de un array asociativo
// debemos especificas a que propiedad queremos acceder

console.log(pc["procesador"]);
// 
// un array asociativo es mas practico y util
let pnombre = pc["nombre"];
let pprocesador = pc["procesador"];
let pram = pc["ram"];
let pespacio = pc["espacio"];

let frasearray = `el nombre de mi pc es ${pnombre}
su procesador es ${pprocesador}  tiene ${pram} de ram 
y tiene ${pespacio} de espacio`;

console.log(frasearray);

// BUCLES E ITERACION
// BUCLE: es la repeticion de un bloque, si una condicion se 
// cumple. Los bucles preguntan la condicion todo el tiempo
// con el fin de volver a ejecutar el bloque
// let numerob, numerob2, numerob3;

numerob = 0;
numerob2 = 0;
numerob3 = 0;
// 
while (numerob < 10){
    numerob++;
    console.log(numerob + " 1ro");
}

// Un simple bucle while

// Do while: primero ejecuta el bloque y luego verifica si se
// cumple la condicion para volver a ejecutarlo

do {
    console.log(numerob2 + " 2do");
    numerob2++;
// 
} while (numerob2 < 10);
// 
// para detener un bucle se utiliza la sentencia "break"
// 
while (numerob3 < 1000) {
    numerob3++;
    console.log(numerob3 + " 3er");
    if (numerob3 == 10) {
        break; //detiene el bucle
    }
}

// el break se utiliza para evitar q lso bucles sigan funcionando
// sin fin, dandole mas eficacia, rapidez y sencillez a los 
// programas

// Existen bucles indeterminados y determinados.

// do while y while son bucles indeterminados
// se ejecutan infinitas veces

// for, for in, for on son bucles determinados
// nosotros les decimos cuantas veces ejecutarse

// BUCLE FOR: funciona exactamente que un bucle while
// la diferencia es que el bucle for es un bucle
// determinado

let i = 30;

for(let i = 10; i > 0; i--)
// // el bucle se separa en tres partes:
// // declaracion e inicializacion
// // condicion
// // aumento o decremento

{ 
  if (i == 5) {
      continue;
    //esto hace que el numero 5 sea evitado o saltado
  };

  console.log(i);
};

// si queremos saltar un numero o valor, podemos usar la sentencia
// "continue", se usa mucho para evitar mostrar algo q no queremos

console.log(i);
// aqui se muestra el alcanza de let en el scope

// Bucle For in y For on: se utiliza para acceder a lso datos
// de un array u objeto

let animales=["perro", "gato", "conejo"];

// // For in: nos muestra la posicion de los datos almacenados
// // en el array, nos permite acceder a ellos
for (let animal in animales){
    console.log(animal);
};

// // For of: ejecuta un bloqued e codigo para cada elemento en el array
for (let animal of animales){
    console.log(animal);
};

// la sentencia label nos permite asociar un bucle a un nombre

array1 =["maria", "josefa", "roberta"];
array2 =["mario", "jose", array1, "pedro"];
// 
forRancio: //este es el label
for (let array in array2){
    if (array == 2) {
        for (let array of array1){
            console.log(array + " "); //Muestra a Maria
            break forRancio; //Deja de mostrar datos
        }
    } else {
        console.log(array2[array] + " "); //se ejecuta hasta q
        // array sea igual a 2
    }
}

// el primer forin llama a todas las posiciones del array2
// "array", luego este crea una condicion en la cual especifica
// que si array esta la posicion 2, lo cual es true, entonces
// ejecutara un bucle forof, el cual llamara a cada elemento
// del array1 "array", y luego muestra en la consola 
// todos los datos del array1 que se llamen "array", es decir
// todos. Sin embargo, deja de ejecutar el bucle cuando se
// utiliza la sentencia break, la cual termina todo el bucle
// que ha sido llamado "forRancio" con la sentencia label. Al
// no poder ejecutarse otra vez el condicional if, debido a que
// la sentencia break vuelve false la condicion independientemente
// si es logicamente verdadera, ejecuta el bloque de codigo 
// dentro del "else", el cual muestra los datos del array2

// Primero muestra lo que esta dentro del else, debido a que
// la posicion del array no seria 2 sino despues de tomar en cuenta
// a "Mario", y "Jose".

// FUNCIONES: llamamos a un bloque con una utilidad
// para poder utilizarlo de nuevo, sin escribir el mismo
// codigo otra vez

function sumar(){ //aqui se declara la funcion
    let a = 2;
    let b = 2;
    let sumar = a + b;
    console.log(sumar);
    //Aqui se especifica lo que la funcion va a hacer
}
sumar(); //Aqui llamamos la funcion para que se ejecute

//una funcion debe tener no mas de dos tareas especificas

//Return: se usa para q nos devuelva un valor, para que haga algo
// es decir para q la funcion tenga un valor, y no solo haga lo
// que debe
function restar(){
    let a = 3;
    let b = 2;
    let resta = a- b;
    return resta; //retorna un valor y finaliza la funcion
    alert("esto no se mostrara");
    // 
}

let resultado = restar();

console.log(resultado);
//muestra el valor de "resta", ya q fue lo que la funcion retorna


//Las funciones no son funciones sin "parametros"


let num1, num2; // declaramos las variables donde ingresaremos
// //parametros

num1= prompt("dime un numero");
num2= prompt("dime otro");
//Dejamos que el usuario decida q numeros multiplicar

function multiplicar(num1, num2) {
    let multiplicacion = num1 * num2;
    return multiplicacion;
}

let resul = multiplicar(num1, num2); //aqui le asignamos valores
// // a los parametros

console.log("bro los multiplique y dio: " + resul); 
// 

//esto lo muestra en la consola

// Funciones flecha
// Es un tipo de funcion resumida

const saludar = () => console.log("hola");
saludar();

// HISTORIA DE KOFLA
// UN JOVEN MUY AFORTUNADO LOGRO GANAR EL PRIMER PREMIO DE LA LOTERIA 
// (EL INDIGENTE A QUIEN KOFLA LE DIO LA PLATA) EL CUAL DECIDIO HACER
// UNA FIESTA PARA PODER CELEBRAR ESTA SITUACION. EL TIPO COMPRO UNA
// MAQUINA QUE TAN SOLO DEJA PASAR A LOS MAYORES DE EDAD. LA PRIMERA
// PERSONA QUE ENTRE DESPUES DE LAS 2AM NO PAGA.

// 1)LOS MAYORES DE EDAD SOLO ENTRAN
// 2)EL PRIMERO DESPUES DE LAS 2AM y anets de las 7 NO PAGA

let free = false;

const validarCliente = (time) =>{
    let edad = prompt("Cual es tu edad?");
    if (edad >= 18) {
        if (time >= 2 && time <= 7 && !free) {
            alert("Puedes pasar gratis loco");
            free = true;
        } else{
            alert(`Son las ${time} puedes pasar pero paga`);
        }
    } else {
        alert("sorry bro sos re menor");
    }
};
validarCliente(23);
validarCliente(15);
validarCliente(10);
validarCliente(5);
validarCliente(2);
validarCliente(6);

// KOFLA VUELVE DE LA 
// COMISARIA EXHAUSTO, AL DIA SIGUIENTE COMENZABA EL CICLO BASICO
// DE LA UNIVERSIDAD. EN SU CURSO SON 19 ALUMNOS EN TOTAL. PERO 
// SURGIO UN PROBLEMA QUE COMPLICO LA FACULTAD, SE ROMPIO EL REGISTRO
// DE ASISTENCIA Y DURANTE LOS SIGUIENTES 30 DIAS NO SE PODRAN
// HACER NUEVOS REGISTROS DE NINGUN TIPO. POR LO Q LAS CLASES NO
// COMENZARAN HASTA Q ESTE ARREGLADO

// 1)CREAR MINI SISTEMA PARA REGISTRAR PRESENTES(P) Y AUSENTES(A)
// 2)PASADOS 30 DIAS MOSTRAR LA SITUACION FINAL DEL ALUMNO
// 3)MAXIMO DE 10% DE AUSENCIAS

let cantidad = prompt("cuantos alumnos son?");
let alumnosTotales = [];
// 
for(let i = 0; i < cantidad; i++){
    alumnosTotales[i] = [prompt("nombre del alumno " + (i + 1)), 0];
// 
};
// 
const tomarAsistencia = (nombre, p) => {
    let presencia = prompt(nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    };
};
for(i = 0; i < 10; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno);
    };
};
for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br> 
    Presentes: ${alumnosTotales[alumno][1]} <br>
    Ausencias: ${10 - alumnosTotales[alumno][1]}
    `;
    if (10 - alumnosTotales[alumno][1] > 1) {
        resultado+= "Reprobado por inasistencias <br>"
    } else {
        resultado+= "<br><br>";
    };
    document.write(resultado);
};


// KOFLA FELIZ POR SU PRIMER DIA DE CLASES VUELVE A CASA
// CON SU PRIMER TAREA DE CALCULO, DONDE LA SUMA, RESTA,
// MULTIPLICACION, Y DIVISION SERAN INDISPENSABLES. POR LO QUE
// DEBEMOS CREAR UNA CALCULADORA Q EFECTUE ESTAS ACCIONES POR
// NOSOTROS

// 1)CREAR CALCULADORA Q NOS SIMPLIFIQUE EL TRABAJO

const sumar = (num1, num2) =>{
    return parseInt(num1) + parseInt(num2);
};
const restar = (num1, num2) =>{
    return parseInt(num1) - parseInt(num2);
};
const multiplicar = (num1, num2) =>{
    return parseInt(num1) * parseInt(num2);
};
const dividir = (num1, num2) =>{
    return parseInt(num1) / parseInt(num2);
};
alert("Que operacion quieres efectuar");
let operacion=prompt("1-suma,2-resta,3-multiplicacion,4-division");

if (operacion == 1) {
    let num1 = prompt("Dame el primer numero");
    let num2 = prompt("Dame el segundo numero");
    resultado = sumar(num1, num2);
    alert(`El resultado es ${resultado}`);
} else if (operacion == 2) {
    let num1 = prompt("Dame el primer numero");
    let num2 = prompt("Dame el segundo numero");
    resultado = restar(num1, num2);
    alert(`El resultado es ${resultado}`);
} else if (operacion == 3) {
    let num1 = prompt("Dame el primer numero");
    let num2 = prompt("Dame el segundo numero");
    resultado = multiplicar(num1, num2);
    alert(`El resultado es ${resultado}`);
} else if (operacion == 4) {
    let num1 = prompt("Dame el primer numero");
    let num2 = prompt("Dame el segundo numero");
    resultado = dividir(num1, num2);
    alert(`El resultado es ${resultado}`);
} 

// CIERRA CAPITULO 2

// EMPIEZA CAPITULO 3

// POO(PROGRAMACION ORIENTADA A OBJETOS)
// Nos sirve para programar objetos como los hariamos en la vida
// real. Es un paradigma que intenta mejorar la forma de programar
// objetos.
// Clases de objetos: es una plantilla creada con la cual podemos
// crear objetos, una fabrica de objetos.
// OBJETOS: Los objetos tienen caracteristicas q los definen.
// Atributos de objetos: son las propiedades o caracteristicas
// que tiene un objeto
// Metodos de objetos: son las acciones q pueden hacer
// nuestros objetos
// Contructor: es una funcion obligatoria, el cual nos va a 
// construir las propiedades de un objeto.

class animal { //crea la platilla de un objeto
    constructor//el constructor del objeto 
    (tipo, raza, nombre, age, color){ //los atributos del objeto
        this.tipo=tipo;
        this.raza = raza;
        this.nombre = nombre;
        this.age = age;
        this.color = color;
        // esto se encarga de asignarle los atributos al objeto
        this.info = `${this.raza}: Soy ${this.nombre} tengo ${this.age} años de edad y soy de color ${this.color}`;
    };
    verInfo = () =>{
       return this.info;
    };
    // una funcion se le llama metodo cuando es creada 
    // dentro de una clase    
    ruido = () =>{
        if (this.tipo == 1) {
            return "WOF!!";
        } else if(this.tipo == 2){
            return "MIAU!!";
        } else if(this.tipo == 3){
            return "dAmE QueSO!!";
        } else{
            alert("Elije 1, 2 o 3 pendejo");
        };
    };
    // Un metodo que trabajara de acuerdo a la opcion q elija el usuario
    static feliz = () =>{
        return "Estoy muy feliz uwu!!";
    };
    // Esto se mostrara asi el objeto sea o no creado 
    
};
// // HERENCIA:Es una clase q va a tomar una clase y todo lo q puede
// // hacer esa clase, pero ademas se le agregan cosas nuevas
class Perro extends animal { //con extends heredamos las propeidades de animal
    constructor(tipo, raza, nombre, age, color, peso, familia, altura){ //le agregamos otra propiedad
        super(tipo, raza, nombre,  age, color);
        // Tiene los valores hererdados de la clase animal
        this.familia = familia;
        this.peso = peso;
        this.altura = null;
        this.infoMore = `Soy un ${this.familia} y peso: ${this.peso}kg.`;
    };
    infoFur = () =>{
        return this.infoMore;
    };
    // 
    set ponerAltura(height){
        this.altura = height;
    };
    // Los setters nos permiten insertar datos en las propiedades
// 
    get pedirAltura(){
        return this.altura;
    };
    // Los getters nos permiten pedir datos de las propiedades de un obejto
};
let tipo = prompt("Que animal quieres crear? 1-Perro, 2-Gato o 3-Raton");
// Necesitamos este valro para q el metodo dentro de animal funcione
esp = () => {   
    if (tipo == 1) {
        return "Perro";
    } else if(tipo == 2){
        return "Gato";
    } else if(tipo == 3){
        return "Raton";
    };
};
let raza = esp();
// Dejamos que el usuario decida entre tres opciones
function decideName() {
    let name = prompt("Como lo llamaras?");
    cambiarNombre = prompt("Quieres cambiarle el nombre al animal? S-SI, N-NO");
    if (cambiarNombre == "S") {
        function changeIt(){   
        let nuevoNombre = prompt("Que nuevo nombre quieres q tenga?");
        let decide = prompt(`Entonces tu ${raza} se llamara: "${nuevoNombre}"? S-SI, N-NO.`);
        if ( decide == "S"){
            return nuevoNombre;
        } else{
            decideName();
        }
       };
       return changeIt();
    } else{
       function confirmation(){
        let decide = prompt(`Entonces tu ${raza} se llamara: "${name}"? S-SI, N-NO.`);
        return decide;
       }
       let decide = confirmation();
       if (decide == "S") {
           alert(`Tu ${raza} se llama ${name}`);
           return name;
       } else if (decide == "N"){
           decideName();             
       };
       return confirmation();
    };
};
let nombre = decideName();
let age = prompt("cuantos años tiene?");
let color = prompt("de que color es?");
let peso = prompt("cuanto pesa?");
let familia =prompt("que raza es?");
function addHeight() {
    let altura = prompt("cuanto mide el animal?");
    let confirmation = prompt(`Entonces tu ${raza} llamado: "${nombre} mide ${altura}? S-Si, N-No`);
    if (confirmation == "S") {
        alert(`Tu ${raza} mide ${altura}`);
        return altura;
    } else {
        alert("Entonces...");
        addHeight();
    };
}
let altura = addHeight();
// Con esto dejamos q el usuario especifique las propiedades 
const newObject = new animal(tipo, raza, nombre, age, color); 
//con esto creamos un nuevo objeto con las propiedades 
// especificadas  
const perro = new Perro(this.tipo, this.raza, this.nombre, this.age, this.color, peso, familia);
// aqui le añadimos nuevas propiedades al objeto
// Las clases se tienen que definir con const
perro.ponerAltura = altura;
console.log(newObject.verInfo() + ". " + perro.infoFur() + ". " + newObject.ruido() + ", " + animal.feliz() + "mido:" + perro.altura);
// 
let pedirAltura = prompt(`Quieres saber cuanto mide ${nombre}? S-Si, N-NO`);
if (pedirAltura == "S") {
    alert(perro.pedirAltura + "Master");
} else{
    alert("tabien (Y)");
};
// Declaramos una variable que toma el valor
// del metodo del objeto
// ABSTRACCION: Es intentar reducir un objeto a sus componentes basicos

// MODULARIDAD: Es dividir algo por parte para observarlo
// mejor y resolver cada problema poco a poco. Para luego unirlos

// ENCAPSULAMIENTO: Nos permite encapsular los datos para que no se pueda
// acceder a ellos desde otros lugares

// POLIFORMISMO: Nos muetra como el objeto se comporta diferentemente
// al mismo metodo, debido a sus propiedades


// HISTORIA DE KOFLA
// KOFLA ENTRO EN UNA TIENDA DE CELULARES, PORQUE LE PARECIO BIEN COMPRAR
// UN NUEVO CELULAR. DE TODOS LOS MODELOS QUE HABIAN DISPONIBLES
// A KOFLA LE LLAMO LA ATENCION TRES MODELOS EN ESPECIFICO.
// EL PROBLEMA ES QUE LOS VENDEDORES NO SABEN ABSOLUTAMENTE NADA
// ACERCA DE ELLOS, POR LO QUE NO PÚEDEN DECIR NADA PARA RECOMENDARLE A
// KOFLA. ANTES DE COMPRARLOS QUIERE VER LAS CUALIDADES Y COMPORTAMIENTOS
// DE CADA UNO.

// 1)CREA UN PROGRAMA QUE MUESTRE LAS PARTICULARIDADES DE LOS TRES CELULARES
// 2)CADA UNO DEBE TENER COLOR, PESO, RESOLUCION DE PANTALLA Y CAMARA, Y MEMORIA
// RAM.
// 3)DEBEN PODER PRENDER, REINICIAR, TOMAR FOTOS Y GRABAR.

class Celular{
    constructor(color, peso, rdp, rdc, ram, precio, codigo){
        this.color=color;
        this.peso=peso;
        this.rdp=rdp;
        this.rdc=rdc;
        this.ram=ram;
        this.precio=precio;
        this.codigo=codigo;
        this.on=false;
        this.info = `Este celular es de color ${this.color}, pesa: ${this.peso}, tiene una resolucion de pantalla de ${this.rdp} pulgadas y la calidad de grabacion es de ${this.rdc} y cuesta ${this.precio}`;
    };
    darInfo(){
        return this.info;
    };
    darCodigo(){
        return this.codigo;
    };
    encender(){
        if(this.on=false){
            alert("Encendiendo celular");
            alert("celular prendido");
            this.on=true;
        } else{
            alert("El celular ya esta encendido");
        };
    };
    apagar(){
        if(this.on=true){
            alert("Apagando celular");
            alert("celular Apagado");
            this.on=false;
        } else{
            alert("El celular ya esta apagado");
        };
    };
    reiniciar(){
        if(this.on=true){
            alert("Reiniciando Celular");
        }else{
            alert("el celular esta apagado");
        };
    };
    tomarFoto(){
        alert(`foto tomada con una resolucion de ${this.rdc}`);
    };
    grabarVideo(){
        alert(`Video grabado con una resolucion de ${this.rdc}`);
    };
};
class CelularAltaGama extends Celular{
    constructor(color, peso, rdp, rdc, ram, precio, codigo, rdce){
        super(color, peso, rdp, rdc, ram, precio, codigo);
        this.rdce = rdce;
        this.info = `Este celular es de color ${this.color}, pesa: ${this.peso}, tiene una resolucion de pantalla de ${this.rdp} pulgadas y la calidad de grabacion es de ${this.rdc} y cuesta ${this.precio}. Mi camara extra tiene una resolucion de ${this.rdce}`;
    };
    darInfo(){
        return this.info;
    };
    darCodigo(){
        return this.codigo;
    };
    grabarVideoLento(){
        alert("Estas grabando con camara lenta");
        alert(`Video Grabado con una resolucion de ${this.rdce}`);
    };
    reconocimientoFacial(){
        let nombre = prompt("Cual es su nombre?");
        alert("Empezando reconocimiento facial...");
        let resul = true;
        if (resul == true) {
            alert(`Bienvenido señor ${nombre}!`);
        } else{
            alert("No tiene los permisos para este dispositivo");
        };
    };
};
const celular1 = new Celular("Negro", "150g", "5", "1040p", "1GB", "50$", "CBDH");
const celular2 = new Celular("Rojo", "140g", "5", "720p", "2GB", "100$", "HOTY");
const celular3 = new Celular("Verde", "200g", "6", "full hd", "6GB", "300$", "ASDE");
const celular4 = new Celular("Amarillo", "120g", "4", "4k", "3GB", "150$", "LOPE");
const celular5 = new Celular("Rosado", "130g", "4", "1280p", "4GB", "200$", "MOFE");
const celular6 = new CelularAltaGama("Morado", "250g", "7", "20k", "10GB", "500$", "GOTH", "10k");
const celular7 = new CelularAltaGama("Gris", "300g", "8", "25k", "10GB", "800$", "THOR", "15k");
// 
function celulares() {
    let verCadaUno= prompt("Que celular quieres revisar? 1, 2, 3, 4 y 5");
    parseInt(verCadaUno);
// 
    let celulares =["", celular1, celular2, celular3, celular4, celular5];
    // 
    let info = celulares[verCadaUno].darInfo();
    let codigo = celulares[verCadaUno].darCodigo();
    celulares[verCadaUno].encender();
    alert(info);
    let capturar= prompt("quieres tomar una foto o grabar un video? F-Foto, V-Video, N-No quiero hacer ninguna");
    if (capturar == "F") {
        alert("Tomando Foto");
        celulares[verCadaUno].tomarFoto();
    } else if(capturar == "V"){
        alert("Grabando Video");
        celulares[verCadaUno].grabarVideo();
    } else{
        alert("ok (Y)");
    };
    let apagar = prompt("Quieres Apagar el Tlf? S-SI, N-NO");
    if (apagar == "S") {
        celulares[verCadaUno].apagar();
        let decide = prompt("Quiere ver otro celular normal o uno de alta gama? N-Normal, Ag-Alta Gama, O-No quiero ver otro celular");
        if (decide == "N") {
            window.celulares();
        } else if(decide == "Ag"){
            function celularesAltaGama() {
                let decideAG = prompt("Tenemos dos celulares de alta gama, cual quieres ver?  1 o 2. N- No quiero ver ninguno");                               
                if (decideAG == "1" || decideAG == "2") {
                    let celularesAG = ["", celular6, celular7];
                    let infoAG = celularesAG[decideAG].darInfo();
                    let codigoAG = celularesAG[decideAG].darCodigo(); 
                    alert("Encendiendo celular");
                    alert("Celular encendido");
                    celularesAG[decideAG].reconocimientoFacial();
                    alert(infoAG);
                    let capturar= prompt("quieres grabar un video en camara lenta? S-Si N-No");
                    if(capturar == "S"){
                        alert("Grabando Video en Camara Lenta");
                        celularesAG[decideAG].grabarVideoLento();
                    } else{
                        alert("ok (Y)");
                    };
                    let decide = prompt("Quiere comprar el celular? S-SI, N-NO");
                    if (decide == "S") {
                        alert(`Informacion sobre el celular: ${infoAG}`);
                        alert(`Su codigo es: ${codigoAG}`);
                    } else{
                        alert("Entonces vea otro celular...")
                        let decide = prompt("Quiere ver un celular normal u otro de alta gama? N-Normal, Ag-Alta Gama, O-No quiero ver ningun celular");
                        if (decide == "N") {
                            window.celulares();
                        } else if(decide == "Ag"){
                            celularesAltaGama();
                        }else{
                            alert("Le pedimos que se vaya");
                        };
                    };
                }else{
                    alert("le pedimos que se vaya");
                };
            };
            celularesAltaGama();
        } else{
            alert("Le pedimos que se largue");
        };
    } else if (apagar == "N"){
        let decide = prompt("Quiere comprar el celular? S-SI, N-NO");
        if (decide == "S") {
            alert(`Informacion sobre el celular: ${info}`);
            alert(`Su codigo es: ${codigo}`);
        } else{
            alert("Entonces vea otro celular...")
            let decide = prompt("Quiere ver otro celular? S-SI, N-NO");
            if (decide == "S") {
                window.celulares();
            } else{
                alert("Humildemente le pedimos que se largue");
            };
        };
    };
};
celulares();


// KOFLA NO ESTA SATISFECHO CON LA SECCION ANTERIOR POR LO QUE VA A LA SECCION
// DE CELULARES DE ALTA GAMA. AHI ENCONTRARA LOS CELULARES MAS CAROS DE LA
// TIENDA, DONDE VIO DOS CELULARES QUE LES PARECIO FABULOSOS, 
// ESTOS DOS CELULARES QUE VIO PUEDEN HACER TODO LO QUE LOS ANTERIORES
// PERO ADEMAS PUEDEN HACER COSAS MEJORES. PUEDEN GRABAR EN SUPER CAMRARA LENTA,
// TIENEN RECONOCIMIENTO FACIAL Y UNA CAMARA EXTRA

// 1)Implementar todas estas cualidades pero en los celulares de alta gama.

// KOFLA AHORA TIENE SU NUEVO CELULAR Y ESTA MIRANDO LAS APLICACIONES
// DEL PLAYSTORE YA QUE QUIERE JUGAR JUEGOS POPULARES, PERO LAS 7 APPS QUE
// LLAMARON SU ATENCION SON UN TANTO SIMILARES LO QUE SIGNIFICA QUE EN CASO
// QUE LAS DESCARGUE LAS JUGARIA TODAS POR LO QUE DESCARGARA SOLO DOS
// PARA EVITAR PERDER TANTO TIEMPO JUGANDO. EL PROBLEMA ES SU INDECISION
// ENTRE LAS 7 APPS.

// 1)CREAR UN SISTEMA QUE AYUDE A KOFLA A DECIDIR CUAL APP DESCARGAR-
// 2)DEBEN CONTENER LA CANTIDAD DE DESCARGAR, PUNTUACION Y PESO
// 3)SE DEBEN PODER INSTALAR, ABRIR, CERRAR Y DESINTALAR

// TERMINA CAPITULO 3


// EMPIEZA CAPITULO 4

// METODOS DE CADENAS: Nos permite modificar cadenas

function cadenas(){

let cadena = "cadena de prueba prueba prueba prueba prueba";
let cadena2 = "cadena";
let cadena3 = "de";
let cadena4 = "prueba";
let cadena5 = 23123162316;
let cadena6 = "      hola     "

let resultado1 = cadena.concat(cadena2); //concat añade nuevas cadenas
console.log(resultado1);

let resultado2 = cadena.startsWith(cadena2); //si una cadena empieza igual
// que la otra. devuelve true
console.log(resultado2);

let resultado3 = cadena.endsWith(cadena4);
console.log(resultado3); // si una cadena termina igual que la otra
// devuelve true

let resultado4 = cadena.includes(cadena3); //si en la cadena se encuentra
// esa cadena, devuelve true
console.log(resultado4);

let resultado5 = cadena.indexOf(cadena4); //nos devuelve la posicion en la que
// se encuentra lo q le especifiquemos
console.log(resultado5);

let resultado6 = cadena.lastIndexOf(cadena4) // nos devuelve la posicion de 
// la ultima coincidencia en la cadena
console.log(resultado6);

let resultado7 = cadena4.padStart(10, "XD"); // nos permite rellenar una cadena
// con el numero de caracteres q elijamos, usando la cadena q especifiquemos
console.log(resultado7);

let resultado8 = cadena4.padEnd(10, "XD") ; // Trabaj igual q padStart, solo que
// este rellena la cadena desde el fin de esta
console.log(resultado8);

let resultado9 = cadena4.repeat(5); // repite la cadena cuantas veces querramos
console.log(resultado9);

let resultado10 = cadena.split(" "); // Divide con el caracter q les indiquemos
// crea un array con cada parte dividida por ese caracter
console.log(resultado10[2]);

let resultado11 = cadena.substring(7, 16); // creamos un nuevo string con los
//caracteres del q le indiquemos, el string lo creamos dando una posicion
// para empezar y otra para terminar, el que empieza esta incluido
// el que termina no
console.log(resultado11);

let resultado12 = cadena.toLowerCase(); // convierte la cadena todo a minuscula
console.log(resultado12);

let resultado13 = cadena.toUpperCase(); // Convierte toda la cadena a mayusculas
console.log(resultado13);

let resultado14 = cadena5.toString(); // Convierte el elemento a un string
console.log(resultado14);

let resultado15 = cadena6.trim(); // Elimina los espacios en blanco que sobran
//trimEnd eliminaria solo los del final, trimStart los del inicio
console.log(resultado15.length);
};
cadenas();

// METODOS DE ARRAYS: Se aplcian a un array

function arrays() {
    let nombres = ["Pedro", "Maria", "Jorge", "Samuel", "Jose", "Juan", "Carlos", "Arturo"];
    console.log(`Estan: ${nombres}`);

    let resultado = nombres.pop(); //Elimina el ultimo elemento de un array
    console.log(`Fuera ${resultado}!!! *${resultado} se va*`);
    console.log(`Quedan en el lugar : ${nombres}`);

    let resultado2 = nombres.shift(); //elimina al primer elemento del array
    console.log(`Fuera ${resultado2}!!! *${resultado2} se va*`);
    console.log(`Quedan en el lugar : ${nombres}`);

    let resultado3 = nombres.push("Lucas"); //Agrega un elemento al final del array
    console.log(`Vente numero ${resultado3}!!! *Numero ${resultado3} viene*`);
    // Push nos devuelve la cantidad de elemento que ahora hay en el array
    console.log(`Quedan en el lugar: ${nombres}`);
    
    let resultado4 = nombres.reverse(); //Invierte el orden de los elementos
    // de un array
    console.log(resultado4);
    
    let resultado5 = nombres.unshift("Alberto", "Mike", "Peter"); 
    //Agrega mas elemento al inicio de un array y
    // luego devuelve la nueva longitud 
    console.log(`Llegaron 3 personas, y ahora estan ${resultado5} personas, y son: ${nombres}`); 

    let resultado6 = nombres.sort(); //Ordena los elementos de un array
    // alfabeticamente
    console.log(`Ordenense segun sus nombres!!! Ahora estan ${resultado6}`);

    console.log(`Fuera ${nombres[1] + ", " + nombres[2] + ", " + nombres[3]}!!! Vengan "Alex", "John" y "Max"`);
    nombres.splice(1, 3, "Alex", "John", "Max");
    //Nos permite elegir que elementos sacar de un array, y si queremos 
    // agregar otros
    console.log(`Ahora estan: ${nombres}`);
    nombres.sort();
    console.log(`Ahora ordenence!! ${nombres}`);

    let resultado7 = nombres.join(", Nombre: "); //Convierte un array en una cadena de
    // texto, la diferencia es que con este podemos usar el separador
    // que querramos
    console.log("Nombre: " + resultado7);

    let resultado8 = nombres.slice(0, 4);
    console.log(`Vengan: ${resultado8}!`);
    //nos Permite agarrar lso elementos que querramos

    nombres.filter(numero => console.log(numero + "-- name"));
    // El parametro q le pasemos va a iterar en cada elemento del array
}
arrays();

// OBJETO MATH

function maths() {
    let number = 2341;
    let number2 = 23433331;
    let number3 = 2342221;
    let number4 = 234143;
    let number5 = 23413;
    
    console.log(Math.sqrt(number)); 
    //Nos muestra la raiz cuadrada de un numero

    console.log(Math.cbrt(number));
    //nos muestra la raiz cubica de un numero

    console.log(Math.max(number, number2, number3, number4, number5));
    //Nos muestra el numero mas alto q le ingresamos

    console.log(Math.min(number, number2, number3, number4, number5));
    //Nos devuelve el numero mas pequeño q ingresamos

    console.log(Math.round(5.686868688686868));
    //Redondea el numero a uno mayor si su decimal es mayor o igual a 5
    //Redondea a uno menor si el decimal es menor o igual a 4

    let numero = Math.random() * 99;
    // Nos envia un numero entre 0 y 1
    numero = Math.floor(numero + 1);
    //Redondea a un numero menor sin importar su decimal
    console.log(numero);

    let numero2 = Math.fround(9.553434323324324342342234342234);
    console.log(numero2);
    // irrelevante

    let numero3 = Math.trunc(9.343423478);
    console.log(numero3);
    // Elimina los decimales

    let numero4 = Math.PI;
    console.log(numero4);
    // Nos muestra el valor de pi

    let numero5 = Math.SQRT2;
    console.log(numero5);
    // La raiz cuadrada de 2

    let numero6 = Math.SQRT1_2;
    console.log(numero6);
    // Raiz cuadrada de un medio

    let numero7 = Math.E;
    console.log(numero7);
    // Nos devuelve el valor de la constante de Euler
}
maths();
*/

//Historia de kofla

/*
KOFLA YA ESTA TERMINANDO EL PRIMER SEMESTRE DE LA UNIVERSIDAD
UY AHORA LAS TAREAS Q TIENE SON MAS AVANZADAS Q ANTES, DEBERA HACER
TIPOS DE OPERACIONES MAS AVANZADAS COMO CALCULAR POTENCIAS, RAICES
CUADRADAS Y RAICES CUBICAS.

1)CREAR CALCULADORA CON NUEVA FUNCIONES

function calculadora() {
    const sumar = (num1, num2) =>{
        return parseInt(num1) + parseInt(num2);
    };
    const restar = (num1, num2) =>{
        return parseInt(num1) - parseInt(num2);
    };
    const multiplicar = (num1, num2) =>{
        return parseInt(num1) * parseInt(num2);
    };
    const dividir = (num1, num2) =>{
        return parseInt(num1) / parseInt(num2);
    };
    const potenciar = (num1, num2) => {
        return num1**num2;
    };
    const raizCuadrada = (num1) => {
        return Math.sqrt(num1);
    };
    const raizCubica = (num1) =>{
        return Math.cbrt(num1);
    };
    alert("Que operacion quieres efectuar");
    let operacion=prompt("1-suma, 2-resta, 3-multiplicacion, 4-division, 5-Potencias, 6-raices cuadradas, 7-Raices cubicas");
    parseInt(operacion);
    if (operacion == 1) {
        let num1 = prompt("Dame el primer numero");
        let num2 = prompt("Dame el segundo numero");
        resultado = sumar(num1, num2);
        alert(`El resultado es ${resultado}`);
    } else if (operacion == 2) {
        let num1 = prompt("Dame el primer numero");
        let num2 = prompt("Dame el segundo numero");
        resultado = restar(num1, num2);
        alert(`El resultado es ${resultado}`);
    } else if (operacion == 3) {
        let num1 = prompt("Dame el primer numero");
        let num2 = prompt("Dame el segundo numero");
        resultado = multiplicar(num1, num2);
        alert(`El resultado es ${resultado}`);
    } else if (operacion == 4) {
        let num1 = prompt("Dame el primer numero");
        let num2 = prompt("Dame el segundo numero");
        resultado = dividir(num1, num2);
        alert(`El resultado es ${resultado}`);
    } else if (operacion == 5){
        let num1 = prompt("Dame el numero de la base");
        let num2 = prompt("Dame el exponente");
        resultado = potenciar(num1, num2);
        alert(`El resultado es ${resultado}`);
    } else if (operacion == 6){
        let num1 = prompt("Dame el numero para sacarle la raiz cuadrada");
        resultado = raizCuadrada(num1);
        alert(`El resultado es ${resultado}`);
    } else if (operacion == 7){
        let num1 = prompt("Dame el numero para sacarle la raiz cubica");
        resultado = raizCubica(num1);
        alert(`El resultado es ${resultado}`);
    }; 
    let repetir = prompt("Quieres hacer otra operacion? S-Si, N-No");
    if(repetir =="S"){
        calculadora();
    } else{
        alert("Ok");
    };
};
calculadora();


LA FACULTAD DE KOFLA ESTA POR ARRANCAR NUEVAMENTE Y LAS 12
MATERIAS TIENEN ASIGNADO UN PROFESOR Y TODOS LOS ALUMNOS ANOTADOS A
SUS CLASES, PERO NECESITAMOS VERLO DE FORMA ORDENADA.

1)Una funcion que nos devuelva el profesor asignado a la materia,
y el nombre de los alumnos
2)Una funcion que nos indique en cuantas clases esta kofla
3)Nombre de las clases y sus profesores de kofla

const classesInformation = (materia) =>{
    materias={
        fisica : ["Dr. Smith", "Pedro", "Juan", "Pepe", "Ramon"],
        programacion : ["Dr. Smith", "Santiago", "Lucas", "Carlos", "Jose", "Kofla"],
        quimica : ["Dr. Smith","Victor", "Bruce", "Carl", "Friedrich", "Kofla"],
        logica : ["Dr. Smith", "Peter", "Luke", "Grace", "William"],
        biologia : ["Dr. Smith", "Mike", "Paul", "Max", "Michael", "Kofla"],
        administracion : ["Dr. Smith", "Pedro", "Juan", "Pepe", "Ramon"],
        ingles : ["Dr. Smith", "Santiago", "Lucas", "Carlos", "Jose", "Kofla"],
        gastronomia : ["Dr. Smith","Victor", "Bruce", "Carl", "Friedrich", "Kofla"],
        artes : ["Dr. Smith", "Peter", "Luke", "Grace", "William"],
        deportes : ["Dr. Smith", "Mike", "Paul", "Max", "Michael", "Kofla"]      
    };
    if(materias[materia] !== undefined){
        return [materias[materia], materia, materias];
    }else{
        return materias;
    };
};
const mostrarInformacion = (userName) => {   
    let decide = prompt("Que materia quieres ver? F-Fisica, P-Programacion, Q-Quimica, L-Logica, B-Biologia, A-Administracion, I-Ingles, G-Gastronomia, AR-Artes, D-Deportes");
    function elegirMateria() {
        if (decide == "F"){
            return "fisica";
        } else if (decide == "P"){
            return "programacion";
        } else if (decide == "Q"){
            return "quimica";
        } else if (decide == "L"){
            return "logica";
        } else if (decide == "B"){
            return "biologia";
        } else if (decide == "A"){
            return "administracion";
        } else if (decide == "I"){
            return "ingles";
        } else if (decide == "G"){
            return "gastronomia";
        } else if (decide == "AR"){
            return "artes";
        } else if (decide == "D"){
            return "deportes";
        }else {
            alert("Elije una de las anteriores escribiendo su letra correspondiente");
            let decide = prompt("Quieres intentarlo de nuevo? S-Si, N-No");
            if (decide == "S") {
                mostrarInformacion(userName);
            } else{
                alert("Ok");
            }; 
        };
    };
    let materia = elegirMateria();
    let grupo = classesInformation(materia)[0];
    let infoProfesor = grupo.shift();  
    let materiaName = classesInformation(materia)[1]; 
    let info = classesInformation(materia);
    if (info !== false) { 
        alert(`En la materia de ${materiaName}: 
        actualmente hay: ${grupo.length} alumnos quienes son: ${grupo}. 
        El profesor es: ${infoProfesor}`);
    } else{
        return false;
    };
    if (info !== false) {
        let verify = grupo.includes(userName);
        if (verify == true) {
            let userPosition = grupo.indexOf(userName);
            grupo.splice(userPosition);
            alert(`Estas inscrito en ${materiaName}, junto con ${grupo}. Tu profesor es: ${infoProfesor}`);
            let decide = prompt("Quieres ver otra materia? S-Si, N-No");
            if (decide == "S") {
                mostrarInformacion(userName);
            } else{
                alert("Ok");
            };
        } else if(verify == false){
            alert(`No estas inscrito en ${materiaName}...`);
            let decide = prompt("Quieres ver otra materia? S-Si, N-No");
            if (decide == "S") {
                mostrarInformacion(userName);
            } else{
                alert("Ok");
            };
        };
    };
    for (inscritos in grupo){
        if (grupo[inscritos].includes(userName)) {
            clasesActivas++;
        };
    };

};
function preguntarName() {
    let nombre = prompt("Cual es tu nombre?");
    if (nombre !== undefined) {
        alert(`Bienvenido Sr. ${nombre}`);      
        let clases = classesInformation();
        let clasesPresentes = [];
        let clasesActivas = 0;
        for(inscritos in clases){       
            if (clases[inscritos].includes(nombre)) {
                clasesActivas++;
                clasesPresentes.push(inscritos);
            };
        };
        alert(`Estas inscrito en ${clasesActivas} clases`); 
        alert(`Estas son: ${clasesPresentes}`);
        mostrarInformacion(nombre);

    } else{
        alert("Tienes que ingresar un nombre...");
        let decide = prompt("Quieres intentarlo de nuevo? S-Si, N-No");
        if (decide == "S") {
            preguntarName();
        } else{
            alert("Ok");
        }; 
    };
};
preguntarName();




KOFLA ESTA DECIDIDO A INSCRIBIRSE, PERO SE ROMPIO EL SISTEMA DE INSCRIPCION

1) CREAR UNA FUNCION Q LE PREGUNTE A KOFLA EN Q MATERIA SE QUIERE INSCRIBIR
2) SI HAY 20 INSCRIPTOS NEGARLE LA INCRIPCION
3)SI HAY MENOS DE 20 INSCRIBIRLO

let materias={
    fisica : ["Dr. Smith", "Pedro", "Juan", "Pepe", "Ramon"],
    programacion : ["Dr. Smith", "Santiago", "Lucas", "Carlos", "Jose", "Kofla"],
    quimica : ["Dr. Smith","Victor", "Bruce", "Carl", "Friedrich", "Kofla"],
    logica : ["Dr. Smith", "Peter", "Luke", "Grace", "William"],
    biologia : ["Dr. Smith", "Mike", "Paul", "Max", "Michael", "Kofla"],
    administracion : ["Dr. Smith", "Pedro", "Juan", "Pepe", "Ramon"],
    ingles : ["Dr. Smith", "Santiago", "Lucas", "Carlos", "Jose", "Kofla"],
    gastronomia : ["Dr. Smith","Victor", "Bruce", "Carl", "Friedrich", "Kofla"],
    artes : ["Dr. Smith", "Peter", "Luke", "Grace", "William"],
    deportes : ["Dr. Smith", "Mike", "Paul", "Max", "Michael", "Kofla"]      
};
const incribir = (userName, materia) => {
    personas = materias[materia];
    personas.shift();
    alumnos = personas;
    if (alumnos.length >= 5) {
        alert(`Lo siento ${userName} las clases de ${materia} ya estan llenas`);
        let decide = prompt("Quieres inscribirte en otra materia? S-Si, N-No");
        if (decide == "S") {
            elegirMateria();
        } else{
            alert("Ok");
        };   
    } else{
        userName.toString();
        alumnos.push(userName);
        console.log(alumnos);
    };
};
function darNombre() {
    let nombre = prompt("Cual es tu nombre?");
    if (nombre !== undefined) {
        return nombre;
    } else {
        alert("Debes escribir un nombre...");
        let decide = prompt("Quieres intentarlo de nuevo? S-Si, N-No");
        if (decide == "S") {
            darNombre();
        } else{
            alert("Ok");
        }; 
    };
};
let userName = darNombre();
function elegirMateria() {
    let decide = prompt("En que materia te quieres? F-Fisica, P-Programacion, Q-Quimica, L-Logica, B-Biologia, A-Administracion, I-Ingles, G-Gastronomia, AR-Artes, D-Deportes");
    if (decide == "F"){
        return "fisica";
    } else if (decide == "P"){
        return "programacion";
    } else if (decide == "Q"){
        return "quimica";
    } else if (decide == "L"){
        return "logica";
    } else if (decide == "B"){
        return "biologia";
    } else if (decide == "A"){
        return "administracion";
    } else if (decide == "I"){
        return "ingles";
    } else if (decide == "G"){
        return "gastronomia";
    } else if (decide == "AR"){
        return "artes";
    } else if (decide == "D"){
        return "deportes";
    }else {
        alert("Elije una de las anteriores escribiendo su letra correspondiente");
        let decide = prompt("Quieres intentarlo de nuevo? S-Si, N-No");
        if (decide == "S") {
            elegirMateria();
        } else{
            alert("Ok");
        }; 
    };
};
materia = elegirMateria();

incribir(userName, materia);


// Termina CApitulo 4



//Empieza Capitulo 5

// LA CONSOLA 

// ES UNA DE LAS TANTAS HERRAMIENTAS QUE NOS PERMITE VER LOS ERRORES Y MUCHO MAS
// DE NUESTRO CODIGO.


console.assert(5 > 1); //si es true, no nos dice nada, si es false nos dice
//que la assertion fallo

console.clear(); //limpia la consola

console.error("Q pajo pendejo?"); // nos muestra un error

console.info("Activo perro"); //hace lo mismo q console.log, solo que este
//es un mensaje informativo, mientras que console.log es un mensaje
//de depuracion

console.table([1,2,3,4,5]); // toma una argumento obligatorio como la data, que debe
// ser un array o un objeto, y un parametro adicional: columns, y nos muestra
// una tabla en consola, q nos dice el index y valor de cada elemento

console.warn("Habla, tienes q tener cuidado"); //Es como el error, 
// pero nos tira una advertencia

console.dir([1,2,3,4,5]); //Despliega una lista interactiva, para el elemento
// especificado

function hola(texto) {
    console.log(texto)
    console.count(); //nos dice cuantas veces ejecutamos una funcion
};
hola("Habla");
hola("Habla");
hola("Habla");
hola("Habla");
hola("Habla");
console.countReset(); // Resetea la cuenta
hola("Habla");
hola("Habla");


console.group("Holas"); // Nos permite crear un grupo
console.log("Hola");
console.log("Hola");
console.log("Hola");
console.log("Hola");
console.group("Otros Holas");
console.log("Hola");
console.log("Hola");
console.log("Hola");
console.log("Hola");
console.group("Otros Holas 2");
console.log("Hola");
console.log("Hola");
console.log("Hola");
console.log("Hola");
console.groupEnd(); //Nos permite cerrar el grupo
console.groupEnd(); //Nos permite cerrar el grupo
console.groupEnd(); //Nos permite cerrar el grupo
console.log("Hola");


console.groupCollapsed("Otros Holas 2"); // nos muestra el grupo cerrado
console.log("Hola");
console.log("Hola");
console.log("Hola");
console.log("Hola");
console.groupEnd();

console.time(); //Inicia un cronometro

console.timeLog(); //nos muestra el tiempo q paso desde q el cronometro
//inicio a llegar hasta esta linea de codigo

console.timeEnd(); // Detiene el cronometro, y nos dice cuanto tardo
// en llegar hasta esta linea de codigo

console.log("%cViva Chiabe", "color:red; background:yellow; padding:20px; border: 3px solid black;");
//Nos permite asignarle estilos a un texto



// Historia de Kofla


YA TERMINO EL PRIMER SEMESTRE Y KOFLA ESTA MUY ANSIOSO, YA Q COMO ES TONTO
NO SABE SI PODRA APROBAR LAS MAATERIAS O NO. LO QUE SABE ES Q PARA LOGRARLO
NECESITARA EL 90% DE ASISTENCIAS, EL PROMEDIO POR MATERIA DEBE SER AL MENOS
7/10, Y DEBE TENER COMO MINIMO EL 75% DE LOS TRABAJOS PRACTICOS ENTREGADOS

1)SOLICITAR LOS DATOS Y DECIR SI APRUEBA O NO
2)MOSTRARLO CON COLORES REPRESENTATIVOS
ROJO = NO APROBO

let materias={
    fisica : [75, 5, 88, "Fisica"],
    programacion : [90, 8, 81, "Programacion"],
    quimica : [50, 6, 74, "Quimica"],
    logica :  [92, 10, 95, "Logica"],
    biologia :  [95, 9, 100, "Biologia"],
    administracion : [65, 7, 70, "Administracion"]
};
console.log("%cPara aprobar necesitas mayor o igual a 90% de asistencias, un promedio mayor o igual 7/10 y haber entregado mas del 75% de los trabajos practicos", "color: orange; padding:10px;text-align:center;")
const estadoDeMateria = () =>{
    for (materia in materias){
        let asistencias = materias[materia][0];
        let promedio = materias[materia][1];
        let trabajos = materias[materia][2];
        if (asistencias >= 90 && promedio >= 7 && trabajos >= 75) {
            console.groupCollapsed(`%c${materias[materia][3]}`, `color:blue` );
            console.log(`%cTuvistes un: ${asistencias}% de asistencias, un promedio de ${promedio}/10 y entregastes el ${trabajos}% de los trabajos. Felicidades, has aprobado esta materia!!!`, `color:green;padding:10px;border:3px solid black;background:lightblue;`);
            console.groupEnd();
        } else {
            console.groupCollapsed(`%c${materias[materia][3]}`, `color:blue` );
            console.log(`%cTuvistes un: ${asistencias}% de asistencias, un promedio de ${promedio}/10 y entregastes el ${trabajos}% de los trabajos. Lo sentimos, no has aprobado esta materia...`, `color:red;padding:10px;border:3px solid black;background:lightblue;`);
            console.groupEnd();
        };
    };
};
estadoDeMateria();
*/
/*
KOFLA ESTA SUFRIENDO UN POCO YA QUE A PESAR DE TENER UN 90% DE ASISTENCIAS
Y UN PROMEDIO SUPERIOR A 7/10, NO CREE LLEGAR A ENTREGAR EL 75% DE TRABAJOS
PRACTICOS A TIEMPO YA QUE NECESITARA DIVIDIR LAS TAREAS QUE VA A HACER 
SEMANALMENTE. KOFLA DEBE TRABAJAR 8 HORAS POR DIA DURANTE DOS SEMANAS
ENTRE LAS QUE TIENE: 24 HORAS PARA ESTUDIAR, 24 PARA HACER TRABAJOS PRACTICOS
56 HORAS PARA TRABAJAR Y 8 HORAS PARA HACER QUEHACERES DOMESTICOS

1)ORGANIZAR LAS ACTIVIDADES DIARIAMENTE
2)UTILIZAR LA CONSOLA PARA ORGANIZARLO
3)CADA TAREA NO DEBE SUPERAR LAS 4 HORAS


let horas = {
    Trabajar : [56 / 14, "trabajar"],
    Estudiar : [24 / 14, "estudiar"],
    Tareas : [24 / 14, "hacer los trabajos practicos"],
    Casa :[ 8 / 14, "hacer tus quehacere domesticos"]
};

for (hora in horas) { 
    let tarea = horas[hora][1];
    let tiempo = Math.round(horas[hora][0]);
    if (tiempo > 4) {
        console.groupCollapsed(`%c${hora}`, `font-size:20px;color:blue`); 
        console.group(`%cSemana 1`, `font-size:15px;color:black;`);
        for ( i=0; i < 7; i++){  
            console.groupCollapsed("Dia " + i);          
            console.log(`%Tendrias que ${tarea} aproximadamente: ${tiempo} horas, eso es mas de 4 horas y no es posible hacerlo`, `color:red; padding:10px;background:lightblue;border: 3px solid black;`);            
            console.groupEnd();
        };
        console.groupEnd();
        console.groupCollapsed(`%cSemana2`, `font-size:15px;color:black;`);
        for ( i=7; i < 14; i++){
            console.groupCollapsed("Dia " + i);
            console.log(`%Tendrias que ${tarea} aproximadamente: ${tiempo} horas, eso es mas de 4 horas y no es posible hacerlo`, `color:red; padding:10px;background:lightblue;border: 3px solid black;`);            
            console.groupEnd();
        };
        console.groupEnd();
        console.groupEnd();
    } else{
        console.groupCollapsed(`%c${hora}`, `font-size:20px;color:blue`);
        console.group(`%cSemana 1`, `font-size:15px;color:black;`);
        for ( i=1; i < 8; i++){
            console.groupCollapsed("Dia " + i);
            console.log(`%cHoy debes ${tarea} aproximadamente: ${tiempo} horas.`, `color:green; padding:10px;background:lightblue;border: 3px solid black;`);
            console.groupEnd();
        };
        console.groupEnd();
        console.groupCollapsed(`%cSemana2`, `font-size:15px;color:black;`);
        for ( i=7; i < 15; i++){
            console.groupCollapsed("Dia " + i);
            console.log(`%cHoy debes ${tarea} aproximadamente: ${tiempo} horas.`, `color:green; padding:10px;background:lightblue;border: 3px solid black;`);
            console.groupEnd();
        };  
        console.groupEnd();  
        console.groupEnd();
    };
};



// Termina Capitulo 5

//Empieza capitulo 6

//DOM = document object model
//Es el documento que tiene todos los elementos

//Nodo: es cualquier etiqueta del cuerpo, un documento se divide en nodos
// Document: El que abarca todos los nodos 
// Element: todos los nodos definidos por etiquetas html
// TexT: el texto dentri de un nodo se considera un nodo hijo de tipo text
// Attribute: los atributos de las etiquetas defines nodos
// Comentarios: Son comentarios


//METODOS DE SLECCION DE ELEMENTOS

//document.getElementById(); Nos permite seleccionar un elemento por medio
// de su id
let container = document.getElementById("container");

//document.getElementsByTagName(); Nos permite seleccionar todos los elementos
// que sean del tipo asignado. No es recomendable
let paragraphTwo = document.getElementsByTagName("p")[2];

//document.querySelector(); Nos permite seleccionar un elemento segun su
// Atributos. Class o ID
let titleTwo = document.querySelector(".title-two");

let paragraphs = document.querySelectorAll("#paragraph");

console.log(container);
console.log(paragraphTwo); // Podemos usar el index, para elegir cual de todos
//los elementos mostrar. Aqui no hay 0. No es recomendable
console.log(titleTwo);
console.log(paragraphs[4]);// Nos devuelve todos, pero podemos elegir un 
// en especifico usando el index


//Metodos para eleminar, añadir y modificar atributos


const range = document.querySelector("#one-range");

range.setAttribute("type", "text"); //element.setAttribute(attribute, value);
//nos permite cambiar y añadir el valor del atributo de un elemento. 

console.log(range.getAttribute("type")); // element.getAttribute(attribute);
//Nos permite obtener el valor de un atributo asignado


console.log(range.removeAttribute("type")); // element.removeAttribute(attribute)
//nos permite remover el atributo de un elemento


//ATRIBUTOS GLOBALES : son los q contienen los todos elementos en comun
// en cualquier elemento los podemos aplicar
titleTwo.setAttribute("contentEditable", "true");
//ContentEditable, nos permite decidir si el usuario puede o no modificar
//el valor de un elemento


paragraphs[5].setAttribute("dir", "rtl");
// dir, nos permite decidir la direccion en la q el elemento va,
//rtl = right to left
//ltr = left to right


paragraphs[4].setAttribute("hidden", "true");
// hidden, nos permite ocultar un elemento


paragraphs[3].setAttribute("tabindex", "1");
//tabindex, nos permite cambair el orden de la seleccion,
//cuando apretamos la tecla tab

paragraphs[0].setAttribute("title", "perro jsjsjsjsjs");
// title, nos muestra una pequeña ventanita con alguna 
// informacion sobre el elemento


// Atributos de inputs, podemos acceder directamente desde javascript
let form = document.getElementById("form");
let inputText = document.getElementById("input-text");
let inputNumber = document.getElementById("input-number");
let inputRange = document.getElementById("input-range");
let inputFile = document.getElementById("input-file");
let inputSubmit = document.getElementById("input-submit");


let inputTextV, inputNumberV, inputRangeV;

inputTextV = inputText.value;
inputNumberV = inputNumber.value;
inputRangeV = inputRange.value;

let inFormV = `Texto: ${inputTextV}, en numero ${inputNumberV} y en rango ${inputRangeV}`;

document.write(inFormV + "<br><br>");
//Con value, podemos ver el valor de un input


let inputTextT, inputNumberT, inputRangeT;

inputTextT = inputText.type;
inputNumberT = inputNumber.type;
inputRangeT = inputRange.type;

let inFormT = `Texto: ${inputTextT}, en numero ${inputNumberT} y en rango ${inputRangeT}`;

document.write(inFormT + "<br><br>");
// Con type, podemos ver el tipo de input del input

inputFile.accept = "image/png";
// nos permite poner los archivos acceptados por el input, normalmente
// se usa en tipos files


inputSubmit.setAttribute("form", "form");
// form nos permite ejecutar un input dentro de un form, 
// asi no este dentro


 let texto = document.querySelector(".text");
 texto.minLength = 6;
// minlength nos permite especificar cuantos caracteres necesita el 
// formulario para continuar

texto.placeholder ="viva chiabe";
//placeholder pone la descripcion o instruccion de un input


inputFile.required = "required";
//required pone un input q debe ser llenado obligatoriamente para continuar



// ATRIBUTO STYLE

inputText.style.padding ="20px";
texto.style.backgroundColor="#235";

// el atributo style nos permite ponerle estilos a lso elementos
// las propiedades css no tienen - en javascript, se utiliza el camel case



// CLASES, CLASS LIST Y SUS METODOS
// Nos permite acceder a las clases de los elementos

inputText.classList.add("clase");
// element.classList.add(); Nos permite añadir clases a un elemento


inputText.classList.remove("clase");
//element.classList.remove(); Nos permite quitar clases a un elemento

inputText.classList.add("clase");
inputText.classList.add("clasedos");
inputText.classList.add("clasetres");

let valor = inputText.classList.item(1);
//element.classList.item(); Nos devuelve el valor de la clase segun el
//indice especificado
console.log(valor);


valor = inputText.classList.contains("clase");
//element.classList.contains(); Nos permite verificar si el elemento
// contiene o no la clase especificada
console.log(valor);


inputText.classList.toggle("clase");
// element.classList.toggle(); si el elemento tien la clase la quita
// si no la tiene la agrega
console.log(form);


inputText.classList.replace("clasedos", "Chavez");
// element.classList.replace(); Nos permite reemplazar una clase por otra


// OBTENCION y MODIFICACION DE ELEMENTOS


let theText = paragraphs[4].textContent;
console.log(paragraphs[4]);
console.log(theText);
//element.textContentsolo nos muestra el texto de 
// un elemento, sin etiquetas html

theText = paragraphs[4].innerHTML;
console.log(theText);
//element.innerHTML nos muestra el codigo dentro del elemento
theText = paragraphs[4].outerHTML;
console.log(theText);
// element.outerHTML nos muestra el codigo y la etiqueta y lo q contiene 
// del elemento



// CREACION DE ELEMENTOS

const containerTwo = document.querySelector(".container2");
const fragmento = document.createDocumentFragment();
// document.createDocumentFragment(); nos permite crear un fragmento
// para evitar el malgasto de recursos
for ( i = 0; i < 5; i++) {
    const elementItem = document.createElement("P");
    // document.createElement(); nos permite crear un elemento
    
    const textItem = document.createTextNode("lorem ipsum sdjasdajnsdanjisdanjsdanjisdsdnjisdi");
    // element.createTextNode(); nos permite crear un elemento de texto
    
    elementItem.appendChild(textItem);
    
    fragmento.appendChild(elementItem);
    // element.appendChild(); nos permite agregar un hijo al nodo del elemento  
}
containerTwo.appendChild(fragmento);
console.log(containerTwo);


// OBTENCION Y MODIFICACION DE CHILDS

const containerThree = document.querySelector(".container3");

const firstChild = containerThree.firstChild;
// element.firstChild; nos permite seleccionar el primer hijo del elemento
const firstChildText = firstChild.textContent;

console.log(firstChildText);

const lastChild = containerThree.lastChild;
// element.lastChild; nos permite seleccionar el ultimo hijo del elemento
const lastChildText = lastChild.textContent;

console.log(lastChildText);

const nodes = containerThree.childNodes;
// element.childNodes; nos permite ver todos los nodos de un elemento
console.log(nodes);

const children = containerThree.children;
// element.children; nos permite ver los hijos de un elemento
for (child of children){
    console.log(child.textContent);
}


// METODOS DE CHILDS

const headerTwo = document.createElement("H2");
const headerTwoText = document.createTextNode("This is a header Two");
headerTwo.appendChild(headerTwoText);

const paragraph = document.createElement("P");
const paragraphText = document.createTextNode("This is a fucking paragraph");
paragraph.appendChild(paragraphText);

containerThree.appendChild(paragraph);

containerThree.replaceChild(headerTwo, firstChild);
// Nos permite reemplaza el elemento q queramos en el lugar del elemento
// que queremos reemplazar

containerThree.removeChild(paragraph);
// Nos permite eliminar un elemento


let response = containerThree.hasChildNodes();
// Si el elemento tiene hijos dara true. sino false
if (response) {
    console.log("si tiene hijos WIII");
} else{
    console.log("ayno");
};


// Propiedades de PARENTS

let parentElem = titleTwo.parentElement;
console.log(parentElem);
//element.parentElement nos muestra el padre de un elemento


let parentNode= titleTwo.parentNode;
console.log(parentNode);
// element.parentNode nos muestra el nodo padre del elemento

// METODOS DE SIBLINGS

let nextSibling = paragraphs[0].nextElementSibling;
console.log(nextSibling);
// nextSibling, nos selecciona al elemento hermano del elemento q
//  especificamos

let previousSibling = paragraphs[1].previousSibling;
console.log(previousSibling);
// previousSibling, nos selecciona el hermano anterior al elemento 
// especificado

let nextElementSibling = paragraphs[2].nextElementSibling;
console.log(nextElementSibling);
// nextElementSibling; nos selecciona el elemento hermano despues
// del elemento especificado

let previousElementSibling = paragraphs[2].previousElementSibling;
console.log(previousElementSibling);
// nextElementSibling; nos selecciona el elemento hermano despues
// del elemento especificado


const div3 = document.querySelector(".div3");
console.log(div3.closest(".div"));
// Nos retorna los elementos ascendentes mas cercanios, que sean del mismo
// tipo del elemento especificado

*/

// ULTIMO HISTORIA DE KOFLA
// KOFLA SE QUEDO ENCERRADO EN SU CASA PQ SE LE ROMPIO LA LLAVE
// PERO NECESITA IR URGENTE A LA FACUTLAD SI QUIERE APROBAR
// EL RESTO DE MATERIAS QUE LE FALTA, YA QU ENO PUEDE FALTAR
// NI UNA SOLA VEZ POR ESTAR AL LIMITE DE ASSITENCIA. LO QUE SE LE OCURRIO ES
// LLAMAR A UN CERRAJERO Y PEDIRLE QUE TRAIGA LA LLAVE INDICADA.
// EL PROBLEMA RESIDE EN QUE NO HAY TIEMPO PARA QUE EL CERRAJERO VEA LA LLAVE
// A ELEGIR, EL TIENE Q TOMAR UNA Y SALIR. MUY OPORTUNO PARA EL PROBLEMA ACTUAL
// SOLO PUEDE TRAER UNA Y PROBARLA. A LO Q KOFLA SE DA CUENTA Q ES UNA LLAVE 
// ANTIGUA ASI QUE NUCHAS POSIBLIDADES YA FUERON DESCARTADAS, AHORA SOLAMENTE
// FALTAN DECIDIR EL MODELO DE LAS LLAVES PARA QUE EL CERRAJERO LA TRAIGA
// Y PUEDA SOLUCIONAR SU PROBLEMA. PERO COMO TIENE TANTA MALA SUERTE
// NO TIENE NI SIQUIERA INTERNET PERO LO QUE SI TIENE ES A UN PROGRAMADOR
// UQE LE VA  A HACER UN SISTEMA PARA MOSTRAR LAS LLAVES PARA Q EL ELIJA
// LA LLAVE PARA DECIRLE AL CERRAJERO PARA QUE PUEDA ABRIR LA PUERTA.
// HAY SOLAMENTE 20 MODELOS POSIBLES, DEJEN QUE KOFLA ELIJA EL MODELO INDICADO

// 1)SE DEBE INDICAR A KOFLA LAS 20 LLAVES POSIBLES CON SUS 4 IMAGENES
// Y KOFLA DEBE SELECCIONAR CUAL LLAVE USAR
// 2) UNA VEZ SELECCIONADA, ENVIAR LOS DATOS AL SERVIDOR Y QUE OTRO PROGRAMADOR SE ENCARGUE

const createKey = () =>{
    let quantity = prompt("Cuantas llaves quieres ingresar? MAX=20");
    quantity = parseInt(quantity) + 1;
    const keys = [];
    if (quantity > 21) {
        alert("Hey, no puedes crear mas de 20 llaves...");
        createKey();
    } else{
        alert("Esta Bien!");    
        for (i = 1; i < quantity; i++) {
            let name = prompt(`Como se llama la llave ${i}?`);
            let model = prompt(`Como se llama el modelo de la llave ${i}?`);
            let price  = [prompt(`Cuanto cuesta la llave ${i}?`) + "$"];
            function setValues(name, model, price) {
                const key = [name, model, price];
                keys.push(key);
            };
            setValues(name, model, price);      
        };       
    };
    const setKeyInformation = () => {
        for (key in keys){
            if (keys.length > 1) {
                let name = document.createTextNode(keys[key][0]);
                let model = document.createTextNode(keys[key][1]);
                let price = document.createTextNode(keys[key][2]);
   
                const newRow = document.createElement("TR");
                const newTdn = document.createElement("TD");
                const newTdm = document.createElement("TD");
                const newTdp = document.createElement("TD");
                const table = document.querySelector("#table-keys");

                newTdn.appendChild(name);
                newTdm.appendChild(model);
                newTdp.appendChild(price);

                newRow.appendChild(newTdn);
                newRow.appendChild(newTdm);
                newRow.appendChild(newTdp);

                newRow.setAttribute("class", "row");

                table.appendChild(newRow);
            } else {
                let name = document.createTextNode(keys[key][0]);
                let model = document.createTextNode(keys[key][1]);
                let price = document.createTextNode(keys[key][2]);

                const newRow = document.createElement("TR");
                const newTdn = document.createElement("TD");
                const newTdm = document.createElement("TD");
                const newTdp = document.createElement("TD");
                const table = document.querySelector("#table-keys");

                newTdn.appendChild(name);
                newTdm.appendChild(model);
                newTdp.appendChild(price);

                newRow.appendChild(newTdn);
                newRow.appendChild(newTdm);
                newRow.appendChild(newTdp);

                newRow.setAttribute("class", "row");

                table.appendChild(newRow);
            }
        }
    };
    setKeyInformation();
    

    const setRandomKeys = () =>{
        let clases = document.querySelectorAll(".row");
        let quantity= clases.length;
        for (i = quantity; i < 20; i++) {
            let keyName = document.createTextNode("Item" + (i + 1));

            let randomModel = Math.random()*10000;
            randomModelR = Math.round(randomModel);
            randomModel = document.createTextNode(randomModelR);

            let randomPrice = Math.random()*100;
            let randomPriceR =Math.round(randomPrice);
            randomPrice = document.createTextNode(randomPriceR);
    
            const newRow = document.createElement("TR");
    
            const newTdn = document.createElement("TD");   
            const newTdm = document.createElement("TD");   
            const newTdp = document.createElement("TD");
    
            const table = document.querySelector("#table-keys")
    
            newTdn.appendChild(keyName); 
            newTdm.appendChild(randomModel); 
            newTdp.appendChild(randomPrice);
    
            newRow.appendChild(newTdn);    
            newRow.appendChild(newTdm);  
            newRow.appendChild(newTdp);
    
            table.appendChild(newRow);
            
        };      
    };
    setRandomKeys();
};
const wondering = () =>{
    let decide = prompt("Quieres agregar una llave? S-Si, N-No");
    if (decide == "S") {
        createKey();
    }else{
        let decide = prompt("Estas segur@?");
        if (decide=="S") {
            alert("Ok");
        } else{
            wondering();
        };
    };
};
wondering();