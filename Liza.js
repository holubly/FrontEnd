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

//Рандомні числа
let phrases = [
    'That sound good!',
    'Yes, you should definitely do that!',
    'I am not sure that is a good idea',
    'Maybe not today?',
    'Computer says No!'
];
phrases[Math.floor(Math.random() * 4)];
console.log(Math.floor(Math.random() * 4));

//Генератор випадкових чисел
let randomBodyParts = ['Рот', 'Нос', 'Клюв'];
let randomAdjectives = ['Вонючий', 'Скучный', 'Глупый'];
let randomWords = ['МухаСкунс', 'Бегемот', 'Слон', 'MonkeyВолк', 'Крот'];

randomBodyParts = randomBodyParts[Math.floor(Math.random) * 3];
randomAdjectives = randomAdjectives[Math.floor(Math.random) * 3];
randomWords = randomWords[Math.floor(Math.random) * 5];

let randomInsult = 'Your ' + randomBodyParts + ' is like a ' + randomAdjectives + ' ' + randomWords + '!!!';

console.log(randomInsult);

//Прийняття ришень
let phras = [
    'That sounds good',
    'Yes, you should definetly do that',
    'I am not sure that is a great idea',
    'Maybe not today',
    'Computer says no!'
]
console.log(phras[Math.floor(Math.random) * 5]);
