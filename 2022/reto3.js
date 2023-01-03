//* Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. Cada regalo está representado por una cadena. Santa Claus tiene un trineo que puede llevar un peso limitado, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

//* Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada reno tiene un límite de peso máximo que puede llevar. El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.

//* Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. Las cajas de regalos no se pueden dividir.

const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

const indice = packOfGifts.values();

console.log(indice);
// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

function distributeGifts(packOfGifts, reindeers) {
  const packOfGiftsLength = packOfGifts.map((gift) => gift.length); //tamaño del nombre de los regalos. Ej. book = 4.
  const weightGifts = packOfGiftsLength.reduce((a, b) => a + b); // suma el tamaño del nombre de los regalos. Ej book(4) + doll(4) + ball(4) = 12.

  const reindeersLength = reindeers.map((reindeer) => reindeer.length * 2); //tamaño del nombre de los renos y lo multiplica por 2. Ej dasher = 6 * 2 = 12.
  const maxReindeerWeight = reindeersLength.reduce((a, b) => a + b);// suma reindeersLength. Ej dasher(12) + dancer(12) = 24

  return Math.floor(maxReindeerWeight / weightGifts); //retorna la cantidad de cajas a entregar.
}

console.log(distributeGifts(packOfGifts, reindeers)); // 2

//*Cosas a tener en cuenta:

//* - Las cajas de regalos no se pueden dividir.
//* - Los nombres de los regalos y los renos siempre serán mayores que 0.
