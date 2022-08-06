function createStack() 
{
    let items = [];
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
//below operations are performed on the stack is done on the items array of the object's parent
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items);  //Hence, when we try to access a property which does not exist it give us 'undefined'
