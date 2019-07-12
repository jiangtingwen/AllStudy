//      1
// null     2
//      3
//中序遍历 一棵大树  递归的概念

function TreeNode(val) {
    this.val = val
    this.right = this.left = null
}
const a1 = new TreeNode(1)
const a2 = new TreeNode(2)
const a3 = new TreeNode(3)
a1.right = a2
a2.left = a3

var inorderTraversal = function(root) {
    let arr = [];
    const inorder = root => {
        if(root === null) return null;
        inorder(root.left);
        arr.push(root.val);
        inorder(root.right);
    }
    inorder(root)
    return arr;
}
console.log(inorderTraversal(a1));



//           root
//      left      right
// left1    right1     
// 中序遍历   先输出左子树 在输出根结点  最后输出右子树

        //         1    
        //     2        3
        // 4       5  6    7

        // 输出 4 2 5 1 6 3 7