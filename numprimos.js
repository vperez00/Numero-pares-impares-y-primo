



function extraerPares(){
    var resultado = [];
    var numeros = document.getElementById("numeros").value;
    var lista = numeros.split(",");
    for(var i = 0; i < lista.length; i++){
        var numero = lista[i];
        if( esPar(numero) ){
            resultado.push(numero);
        }
    }
    var elemento = document.getElementById("resultado");
   elemento.innerText = resultado.toString();

}


function extraerImpares(){
    var resultado = [];
    var numeros = document.getElementById("numeros").value;
    var lista = numeros.split(",");
    for(var i = 0; i < lista.length; i++){
        var numero = lista[i];
        if( esImpar(numero) ){
            resultado.push(numero);
        }
    }
    var elemento = document.getElementById("resultado");
   elemento.innerText = resultado.toString();

}

function extraerPrimos(){
    var resultado = [];
    var numeros = document.getElementById("numeros").value;
    var lista = numeros.split(",");
    for(var i = 0; i < lista.length; i++){
        var numero = lista[i];
        if( esPrimo(numero) ){
            resultado.push(numero);
        }
    }
   var elemento = document.getElementById("resultado");
   elemento.innerText = resultado.toString();
}


function esPar(num ){
    var esPar = num % 2 == 0;
    return esPar;
}

function esImpar(num ){
  var esImpar = num % 2 > 0;
  return esImpar;
}



function esPrimo(num) {
    if(num == 1){
        return false;
    }
    for(var i = 1; i < num; i++){
         if(i != 1 && (num % i == 0)){
             return false;
        } 
    }
    return true;
}




