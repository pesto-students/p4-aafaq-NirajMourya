var reverseList = function(head) {
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

//time complexity is O(n)
//space complexity is O(1)