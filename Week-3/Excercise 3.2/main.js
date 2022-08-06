let customer1 = { name: 'Niraj', email: 'nirajmourya786@gmail.com' };
let customer2 = { name: 'Suraj', email: 'surajmourya786@hotmail.com' };

function greeting(text, text2) {
    console.log(`${text} ${this.name}, ${text2}`);
 }

 greeting.call(customer1, 'Hello','How are you?');
 greeting.apply(customer2,['Hello', 'How are you?'])