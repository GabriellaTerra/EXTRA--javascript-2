// comece a criar a sua função add na linha abaixo
function add(a,b){
  return a+b
}console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado')


// comece a criar a sua função multiply na linha abaixo
function multiply(a,vezes){
    let resultado = 0
   for(let i = 0; i < vezes; i++){
    resultado = add(a,resultado)
   } 
   return resultado
}console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado')


// comece a criar a sua função power na linha abaixo
function power(a,potenc){
    let resultado = 1; 
    for(let i = 0; i < potenc; i++){
      resultado = multiply(a,resultado)
    }
    return resultado 
}console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(a){
    let resultado = 1;
   for(let i = a; i > 1; i--){
     resultado = multiply(resultado,i)
   }
   return resultado 
}console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(a,b){

}

// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
