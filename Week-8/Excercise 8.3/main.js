class TreeNode
{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function preorder(root)
{
  if(root !== null)
  {
    console.log(root.value.toString());
    preorder(root.left);
    preorder(root.right);
  }
}
/*
function postorder(root)
{
  if(root !== null)
  {
    postorder(root.left);
    postorder(root.right);
    console.log(root.value.toString());
  }
}

function inorder(root)
{
  if(root !== null)
  {
    inorder(root.left);
    console.log(root.value.toString());
    inorder(root.right);
  }
}
*/
function insertIntoTree(i, arr)
{
  let curr = null;
  if(i < arr.length && arr[i]!=null)
  {
    curr = new TreeNode(arr[i]);
    curr.left = insertIntoTree(2*i + 1, arr);
    curr.right = insertIntoTree(2*i + 2, arr);
  }
  return curr;
}

function createTree(arr)
{
  return insertIntoTree(0, arr);
}

function LevelOrderTraversal(root)
{
    let queue = [];
    queue.push(root);
    while(queue.length != 0)
    {
        let node = queue.shift();
        console.log(node.value);
        if(node.left)
           queue.push(node.left);
        if(node.right)
           queue.push(node.right)
    }
}

let arr = [5,3,6,2,4,7,9,14,21];
//let arr = [3,9,20,null,null,15,7]; 
let root = createTree(arr);
console.log("Pre Order Traversal");
preorder(root);
console.log("Level Order Traversal");
LevelOrderTraversal(root);

//Time Complexity is O(n)
//Space Complexity is O(n)
