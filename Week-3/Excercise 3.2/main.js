/*
1. All three of the call, bind, and apply methods set the this argument to the function.
2. The call and apply methods set this to a function and call the function.
3. call() and apply() are identical in functionality, the only difference is that call() accepts a list of arguments; 
   whereas, apply() accepts a single array of arguments.
*/
let customer1 = { name: 'Niraj', email: 'nirajmourya786@gmail.com' };
let customer2 = { name: 'Suraj', email: 'surajmourya786@hotmail.com' };

function greeting(text, text2) {
    console.log(`${text} ${this.name}, ${text2}`);
 }

greeting.call(customer1, 'Hello','How are you?');
greeting.apply(customer2,['Hello', 'How are you?'])

/*
4. The bind method will only set this to a function. We will need to separately invoke the function.
*/
let customer3 = { firstname: 'Ram', lastname: 'Mourya' };

function greeting_bind(text) {
   console.log(`${text} ${this.firstname} ${this.lastname}!`);
}

let HelloFun = greeting_bind.bind(customer3);
HelloFun("Hello");
 