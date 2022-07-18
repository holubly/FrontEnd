let furryAnimals = ['Bear'];
furryAnimals.push('Cat');
furryAnimals.push('Dog');
furryAnimals.push('Lama');
furryAnimals.unshift('Fox');

let scalyAnimals = ['Lizard', 'Dragon', 'Fish'];
scalyAnimals.pop(); //Удалили последний элемент


let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
//Соединили два массива прі помощи метода concat

furryAndScalyAnimals.indexOf('Lama');

console.log(furryAndScalyAnimals.length);


//Обьєднуємо імена в масиві за допомогою join
let myName = ['Lesia ', 'Holub'];
let husbandName = ['Dmytro ', 'Holub'];

myName.join('');
console.log(myName.join(''));
console.log(husbandName.join(''));

