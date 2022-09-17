class Queue
{
    constructor()
    {
        this.s1 = [];    //stack for enqueue
        this.s2 = [];     //stack for dequeue
    }

    enqueue(num)
    { 
       this.s1.push(num);    //push operation take  O(1) time
    }
 
    dequeue()                //pop operation takes O(n) time
    {
         if(this.s2.length == 0)
         {
            if(this.s1.length == 0)
            {
                return -1;
            }
            
            while(this.s1.length != 0)
            {
                this.s2.push(this.s1.pop());
            }   
         }

         return this.s2.pop();      
    }
}

function ProcessRequests(arr)
{
     let q = new Queue();
     let pushFlag = false;
     for(let i=0;i<arr.length;i++)
     {
        if(pushFlag)
        {
            q.enqueue(arr[i]);
            pushFlag = false;
        }
        else
        {
            if(arr[i] == 1)
               pushFlag = true;
            else if(arr[i] == 2)
               console.log(q.dequeue());
        }
    }
}

ProcessRequests([1, 2, 1, 3, 2, 1, 4, 2]);
ProcessRequests([1, 2, 2, 2, 1, 4]);
