//variables objeto para interactuar entre el http y java

let intentos=0;
let numeroSecreto=0;
let listaNumero=[];
let numeroMaximo=10;
console.log (numeroSecreto);

function asignarTextoElementos(elemento, texto)
{
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento()
{
 let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
 console.log(numeroSecreto);
 console.log(intentos);

 

    if (numeroDeUsuario===numeroSecreto)
        {
            asignarTextoElementos('p', `Felicidades Ganaste en ${intentos} ${(intentos===1) ? 'intento' : 'intentos'}`);
            document.getElementById ('reiniciar').removeAttribute('disabled');

        }
    else if (numeroDeUsuario>numeroSecreto)
        {
            asignarTextoElementos('p', 'El número Secreto es menor');
        }
        else
            {
                asignarTextoElementos('p', 'El número Secreto es mayor')
            }
    intentos++
    limpiarCaja();
 return;
}
function generarNumeroSecreto()
{
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;   
    //si el numero generado esta incluido en la lista
    console.log (numeroGenerado);
    console.log (listaNumero);
    //si ya sorteamos todos los números
    
    if (listaNumero.length == numeroMaximo)
    {
        asignarTextoElementos('p','Ya se sortearon todos los números posibles');
    }
    else
    {
        if (listaNumero.includes(numeroGenerado)) 
        {
        return generarNumeroSecreto();   
        }else
        {
            listaNumero.push(numeroGenerado);
            return numeroGenerado;
            
        }
    }
}

function limpiarCaja()
{
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales()
{
    asignarTextoElementos('h1', 'Juego del número Secreto');
    asignarTextoElementos('p', `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
    
}


function reiniciarJuego()
{
    //limpiar caja
    limpiarCaja();
    //indicar mensaje principal
    condicionesIniciales();
    //deshabilitar del boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //inicianizar el numero de intentos

}

condicionesIniciales();

