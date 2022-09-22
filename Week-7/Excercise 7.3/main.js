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

function CreateLoop(head,k)
{
    let pivot = head;
    while(--k)
    {
        pivot = pivot.next;
    }

    let tail = pivot;
    while(tail.next !== null)
    {
        tail =  tail.next;
    }
    tail.next = pivot;
}

function findPivot(head)
{
    let slow = head,fast = head;
    while(fast && fast.next)
    {
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast)
        {
            slow = head
            while(slow !== fast)
            {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
}

let head = CreateSLL([1,2,3]);
//traverseList(head);
CreateLoop(head,2);
let node = findPivot(head);
if(node)
    console.log(node.value);
else
    console.log("No Pivot exists");
