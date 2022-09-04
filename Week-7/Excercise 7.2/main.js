class SLLNode
{
    constructor(value)
    {
       this.value = value;
       this.next = null;
    }
}

function CreateSLL(arr)
{
    let head = new SLLNode(arr[0]);
    let curr = head;
    for(let i = 1;i<arr.length;++i)
    {
       curr.next = new SLLNode(arr[i]);
       curr = curr.next;
    }
    return head;
}

function traverseList(head)
{
    let curr = head;
    while(curr !== null)
    {
        console.log(curr.value)
        curr = curr.next;
    }
}

//time complexity is O(n)
//space complexity is O(1)
var rotateLeft = function(head, k) {
    let tail = head, n = 1;
    while(tail.next)
    {
        n++;
        tail = tail.next;
    }

    k %= n;
    if(k === 0)
       return head;
    tail.next = head;
    let newTail = head;
    while(--k)
        newTail = newTail.next;
    let newhead = newTail.next;
    newTail.next = null;
    return newhead;
    
};

let head = CreateSLL([1,2,3,4,5]);
traverseList(head);
head = rotateLeft(head, 28);
traverseList(head);
