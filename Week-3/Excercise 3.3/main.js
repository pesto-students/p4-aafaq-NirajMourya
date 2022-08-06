createIncrement() 
{
    letcount=0;
    functionincrement() 
    {
        count++;
    }
    
    letmessage=`Count is${count}`;
    functionlog() 
    {
        console.log(message);
    }
    
    return[increment,log];
}

const[increment,log] =createIncrement();
increment();
increment();
increment();
log();