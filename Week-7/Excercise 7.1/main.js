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
function reverseList(head) {
    let prev = null;
    let current = head;
    let next;
    while(current != null)
    {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next
    }
    return prev;
};

let head = CreateSLL([1,2,3,4,5]);
traverseList(head);
head = reverseList(head);
traverseList(head);