let number = [3, 5, 10, 2, 8,]

let somma = number.reduce((acc, num) => acc + num)
console.log(somma);

let media = somma / number.length
console.log(media);

let numeriMinori = number.filter(num => num < media)
console.log(numeriMinori);

let numeriMaggiori = number.filter(num => num > media)
console.log(numeriMaggiori);
