/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto'
let parrafo = document.querySelector ('p');
parrafo.innerHTML = 'Indica de un numero del 1 al 10';
*/

let numeroSecreto;
console.log (numeroSecreto)
let intentos = 1;
let listaNumerosSorteados =[];
let numerMaximo = 10;
function asignarTextoElemento(elemento, texto){
    //aca recibe dos elementos
    let elementoHTML = document.querySelector(elemento);
    //con document puedo conectar el html y js(es un puente) querySelector es un metodo para trabajar
    elementoHTML.innerHTML = texto;
    //nuestra funcion puede recibir parametros para poder utilizando en diferentes momentos;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);
    //console.log (typeof(numeroDeUsuario));
    //console.log (typeof(numeroSecreto));
    console.log (numeroSecreto);
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario === numeroSecreto);
    //se utilizan tres iguales por que estamos comparando valores y ademas el tipo de valor  (int - int)
    console.log (`el numero de intentos son ${intentos}`);
    if (numeroDeUsuario ===numeroSecreto) { 
        asignarTextoElemento('p', `¡Has acertado! acertaste en ${intentos} ${(intentos === 1) ?'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#valorUsuario').setAttribute('disabled','True');
        //en la linea 29 llamamos al DOM, y en este caso remove solo se tiene que colocar un parametro, que es el valor que se esta quitando
    }else {
        //aca el usuario no acertó
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento ('p',`el número secreto es menor que ${numeroDeUsuario}`);
        }else {
            asignarTextoElemento ('p',`el numero secreto es mayor que ${numeroDeUsuario}`)
        }
        intentos++;
        limpiarCaja();
        if (intentos==4){
            asignarTextoElemento ('p',`PERDISTE`);
            document.getElementById('reiniciar').removeAttribute('disabled');
            document.querySelector('#valorUsuario').setAttribute('disabled','True');
            document.querySelector('#intentarJugar').setAttribute('disabled','True');
        }
    }
    return;

//SIEMPRE DEFINIR LAS FUNCIONES FUERA
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numerMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //SI YA SORTEAMOS TODOS LOS NUMEROS
    if(listaNumerosSorteados.length==numerMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles')
    }else{
        //si el código generado está en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
        //includes: recorre nuestra lista, la itera para revisar lo que quiero que revise
        return generarNumeroSecreto();
        //aca se llama ella misma para comenzar de nuevo la funcion y generar un numero secreto 
        }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        //push: es para empujar o ingresar un valor o elemento a una lista
        }
    }
}
    
function limpiarCaja (){
    /* esta es una forma de devinir la funcion y la otra esta en la linea 52
    let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value = '';
    */
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `Ingresa un numero de 1 a ${numerMaximo}, TIENES 3 OPORTUNIDADES`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('valorUsuario').removeAttribute('disabled');
    document.getElementById('intentarJugar').removeAttribute('disabled');
}

function reiniciarJuego(){
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
    //deshabilitar el boton de nuevo juego 
    //inicializar el número de intentos
    document.querySelector('#reiniciar').setAttribute('disabled','True');
    //71. se colocan dos parametros, es contrario con remove, por que aca tengo que colocarle el 
}

condicionesIniciales();

//asignarTextoElemento('h1', 'juego del numero secreto');
//esto es para llamar a la funcion por el nombre utilizando el nombre y los parentesis
//en JS normalmente se lee como un libro pero cuando ya hay funciones declaradas primero mira las funciones si o si, se llama hoisting: funciones al inico para que este disponible
//asignarTextoElemento('p', 'Ingresa un numero de 10 a 100');
//esta funcion la utilizo basicamente para poder utilizar uuna funcion con menos codigo para poder manipular mas facil el texto que encuentro en el html

    //let numeroDeUsuario = document.querySelector('input');==esta es una forma pero el problema es cuando tengo muchos input