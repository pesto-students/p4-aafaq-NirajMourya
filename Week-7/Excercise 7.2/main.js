var rotateLeft = function(head, k) {
  
    for(let i =  0;i<k;i++)
    {
        console.log(i);
        let temp = head;
        while(temp.next != null)
            temp = temp.next;
        temp.next = head;
        top = head;
        head = head.next
        top.next = null;
        
    }
   return head;
    
};

//time complexity is O(k*n)
//space complexity is O(1)