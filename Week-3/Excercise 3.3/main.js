function createIncrement()                                //This function is executed when createIncrement is called at line no. 20 & It executes only once
{
    let count = 0;                               //Sets the count variable as 0
    function increment()                         //It increments the count 'variable', since the function does not have 'count' variable it increments the parent's 'count' variable
    {
        count++;        
    }
    
    let message = `Count is ${count}`;            //because it's executed only once, while it's being executed the value of count is 0. so it sets the message variable as 'Count is 0' 
    function log()                               //It puts the parent's 'message' variable value in the console
    {
        console.log(message);
    }
    
    return [increment,log];
}


// The execution starts from here as above part is just function declaration
const [increment,log] = createIncrement();      //return 2 functions and is stored in 'increment' and 'log' respectively
// When the above line is executed it set count as 0 and message as 'Count is 0'
//No matter how many time increment and log function is called, the message variable value remains 'Count is 0'
increment();                                    //increments the 'count' variable by 1,so now value of count is 1
increment();                                    //increments the 'count' variable by 1,so now value of count is 2
increment();                                    //increments the 'count' variable by 1,so now value of count is 3
log();                                          //message variable is logged to the screen. So, the output will be printed as 'Count is 0'

