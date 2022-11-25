// Написать следующие регулярные выражения:
// для проверки на валидный номер телефона в формате +3806711222

let goodInput = "+380671122233"
let regexp = /^\+\d\d\d\d\d\d\d\d\d\d\d\d$/;
let regexp1 = /^\+[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
let regexp2 = /^\+\b\d{12}\b/;
console.log( regexp.test(goodInput) ); // true
console.log( regexp1.test(goodInput) ); // true
console.log( regexp2.test(goodInput) ); // true

console.log( "+380671122233".match(regexp) ); // '+380671122233'
console.log( goodInput.match(regexp) ); // '+380671122233'


// для того чтоб получить из html кода все строки другими словами отфильтровать html теги. Пример: <div>Hello</div><span>world</world> должно получится Hello world


console.log( "<div>Hello </div><span>world</span>".replace(/<\/?[a-z][a-z0-9]*>/gi, "") ); //Hello world
console.log( "<div>Hello </div><span>world</span>".replace(/<[^>]+>*>/gi, "") ); //Hello world
console.log( "<div>Hello </div><span>world</span>".replace(/<(.*?)>/g, "") ); //Hello world