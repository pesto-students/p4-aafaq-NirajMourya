function createStack() 
{
    let items = [];                   // 'items' is encapsulated and will  only be accessible to methods within and not outside of createStack scope
    return {
        push(item)                    //Adds an item on stack 
        {
            items.push(item);
        },
        pop() {                      //Return the last item in stack
            return items.pop();
        }
    };
}

const stack = createStack();         //An Object Containing two functions is returned
//Since the stack object doesn't have any property with name 'items'
//below operations are performed on the stack is done on the items array present in it's lexical scope
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items);  //Hence, when we try to access a property which does not exist it give us 'undefined'

//In the below code the reason it's accessible outside is the 'items' variable is returned when createStack is called
//to have encapsulation the variable should only be accessible within the class or methods
/* 
function createStack() 
{
    return
    {
        items:[],
        push(item) 
        {
            this.items.push(item);
        },
        pop() 
        {
            return cthis.items.pop();
        }
    };
}

const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
stack.items;// => [10]
stack.items= [10,100,1000];// Encapsulation broken!
*/