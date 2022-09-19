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

function findTreeDepth(root)
{
    if(root == null)
       return 0;
    return 1+Math.max(findTreeDepth(root.left),findTreeDepth(root.right));
}

let arr = [5,3,6,2,4,7,9,14,21];
//let arr = [3,9,20,null,null,15,7]; //Tree height 3
let root = createTree(arr);
preorder(root);
console.log("Tree height "+findTreeDepth(root)); //Tree height 4
