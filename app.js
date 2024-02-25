



  // let titulo = document.querySelector('h1');
 //  titulo.innerHTML = 'Juego del numero secreto';

   //let parrafo = document = document.querySelector('p');
   //parrafo.innerHTML = 'Indica un numero del 1 al 10';
   
   
                  
   // paso 1: Variable para crear numero secreto
   let numeroSecreto = 0;
   let intentos = 0;
   let listaNumerosSorteados = [];
   let numeroMaximo = 10;
   

   //paso 2: Funcion para asignar texto a 2 paremetros
   function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
   }


   //funcion para verificar el numero secreto
   function verificarIntento() {
       let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

       console.log(intentos);
       if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p' , `Acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
       } else {
        //El usuario no acerto//
        if (numeroDeUsuario > numeroSecreto){
          asignarTextoElemento('p','El numero secreto es menor')
        } else {
          asignarTextoElemento('p','El numero secreto es mayor')
        }
       }
       intentos++;
       limpiarCaja();
       

       return;
   }


   function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';
   }   


   //paso 1: Funcion para crear el numero secreto
   function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   //si ya sorteamos todos los numeros
   if (listaNumerosSorteados.length == numeroMaximo){
      asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
   }else{

   

   //Si el numero generado esta en la lista
   if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();

   }else{
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }

  }
 }


function condicionesIniciales() {
  asignarTextoElemento('h1','Juego del numero secreto');
  asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

  
  function reinciciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar intervalo de numeros
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
  }


condicionesIniciales();
  





/*

      //ejercicio modulo 2

// Creamos la funcion llamada saludo y mandamos a llamar la funcion
  
    function mostrarHolaMundo() {

    console.log('Hola mundo');
  }

  mostrarHolaMundo();
  


 function nombreUsuario(nombre,apellido,numeroDeAgente) {
  
  console.log(`Hola ${nombre}, ${apellido}, ${numeroDeAgente}`)
     
 }

 nombreUsuario('Carlos', 'Rua', '33300112')
 nombreUsuario('aldo', 'medina', 33354125)
 nombreUsuario('Victor','Cisneros', 555411687)




function numeroXDos(x) {
  
  return x * 2;

}
   console.log (numeroXDos(1)

  );



  function tresNumeros(numero1,numero2,numero3) {
    
    return (numero1 + numero2 + numero3) / 3 ;

  }
 
console.log( 
  tresNumeros(1,2,3) 
);



function dosNumeros(numero1,numero2) {
  
  if(numero1 > numero2 ) {
    return numero1
  } else {
    return numero2
  }

}

console.log(
  dosNumeros(3,5)
);


function numeroPorSiMismo(numero) {
  
return numero * numero

}

console.log(
  numeroPorSiMismo(3)
);


/*
   function nombreUsuario(nombre) {

    console.log(nombre)

   }

  
   nombreUsuario("Zocalo");
   nombreUsuario("Pino zuearez");
   nombreUsuario("Pantitlan");

   */
   

/*
   let users = [
    {'user':'aldo'},
    {'user':'victor'},
    {'user':'carlos'}
  ]

  users.map(e => console.log(e.user))

*/


/* Calculcular factorial ejercicio  REVISAR


Desafíos:Saber cómo usar funciones es uno de los conceptos fundamentales en la programación y el desarrollo de software. Las funciones desempeñan un papel crucial en la organización, modularización y reutilización del código.

Con eso en mente, hemos creado una lista de actividades (opcionales) centradas en la práctica para mejorar aún más tu experiencia de aprendizaje.

Sugestión de respuestas

1.Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function calcularIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
}
2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);
3.Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales. Para esto, considera la cotización del dólar igual a R$4,80.

function convertirDolaresAReales(dolares) {
  var cotizacionDolar = 4.80;
  var reales = dolares * cotizacionDolar;
  return reales;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);
4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function calcularAreaYPerimetroRectangular(altura, anchura) {
  var area = altura * anchura;
  var perimetro = 2 * (altura + anchura);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);
5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function calcularAreaYPerimetroCircular(radio) {
  var pi = 3.14;
  var area = pi * radio * radio;
  var perimetro = 2 * pi * radio;
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);
6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
// Ejemplo de uso
let numero = 7;
mostrarTablaDeMultiplicar(numero);

*/


