// Segundo challenge de 2023 midudev

/*En el taller de Santa, los elfos tienen una lista de regalos que desean 
fabricar y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son 
caracteres. Tu tarea es escribir una función que, dada una lista de regalos 
y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

const gifts = ['juego', 'puzzle']
const materials = 'jlepuz'

manufacture(gifts, materials) // ["puzzle"]

const gifts = ['libro', 'ps5']
const materials = 'psli'

manufacture(gifts, materials) // [] */

const gifts = ['libro', 'ps5'];
const materials = 'psli';
let fabricables = new Array();

function manufacture(gifts, materials) {
    gifts.forEach((gift) => {
      let count = 0;
      for (let i = 0; i < gift.length; i++) {
          if(materials.includes( gift.at(i))){
              count++;
          }
      }
      if(gift.length === count){
          fabricables.push(gift);
      }
    });
    console.log(fabricables);
  }
  
  manufacture(gifts, materials);

// Otra forma de hacerlo
/*function manufacture(gifts, materials) {
    const giftsAble= [];
    gifts.forEach(gift => {
        let condition = true;
        for (let i = 0; i < gift.length; i++) {
            if(!materials.includes(gift[i])){
                condition = false;
                break;
            }
        }
        if(condition){
            giftsAble.push(gift);
        }
    });

    return giftsAble;
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'
console.log(manufacture(gifts, materials));*/