class TreeNode
{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
/*
function preorder(root)
{
  if(root !== null)
  {
    console.log(root.value.toString());
    preorder(root.left);
    preorder(root.right);
  }
}

function postorder(root)
{
  if(root !== null)
  {
    postorder(root.left);
    postorder(root.right);
    console.log(root.value.toString());
  }
}
*/

function inorder(root)
{
  if(root !== null)
  {
    inorder(root.left);
    console.log(root.value.toString());
    inorder(root.right);
  }
}

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

function isBST(root)
{
        return ValidateBST(root, Number.MIN_VALUE, Number.MAX_VALUE);
}
function ValidateBST(node,min,max)
{
    if(node == null)
       return true;
    
    if(node.value < min || node.value > max)
       return false;

    return ValidateBST(node.left,min,node.value) && ValidateBST(node.right,node.value,max);
}

//let arr = [5,3,6,2,4,7,9,14,21];  //Not a BST
let arr = [9,4,14,3,5,13,70]; //Is a BST
let root = createTree(arr);
inorder(root);
console.log(isBST(root));

//Time Complexity is O(2^n)
//Space Complexity is O(n)
