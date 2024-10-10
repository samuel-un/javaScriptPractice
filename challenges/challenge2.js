// Primer challenge de 2023 midudev

function findFirstRepeated(giftsIds) {
    const found = new Set(); // se crea un conjunto vacío llamado found para almacenar los números de identificación que ya se han encontrado
    // en JavaScript, has y add son métodos utilizados con la clase set, que es una colección de valores únicos.
    // add() este método se utiliza para agregar un nuevo elemento al conjunto.
    // has() este método se utiliza para verificar si un elemento existe en el conjunto.
    for (let i = 0; i < giftsIds.length; i++) {
      if (found.has(giftsIds[i])) {
        return giftsIds[i];
      }
      found.add(giftsIds[i]);
    }
    return -1; // si no hay ninguna repetición se devuelve -1
  }
  
  const giftIds = [2, 1, 3, 5, 3, 2]
  const firstRepeatedId = findFirstRepeated(giftIds)
  console.log(firstRepeatedId) // 3
  // Aunque el 2 y el 3 se repiten
  // el 3 aparece primero por segunda vez

  const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5