// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 示例：

// 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
// 输出：7 -> 0 -> 8
// 原因：342 + 465 = 807
// var a = Number(l1.join('')) ;
    // var b = Number(l2.join('')) ;
    // var c =a+b;
    // var arr = String(c).split('').reverse();
    // return arr;
   
    var addTwoNumbers = function (l1, l2) {
      
        let result = new ListNode();
        let current = result;
        let cl1 = l1;
        let cl2 = l2;
        let carry = 0;
        while (cl1 || cl2) {
            let sum = ((cl1 && cl1.val) || 0) + ((cl2 && cl2.val) || 0) + carry
            carry = Number(sum >= 10);
    
            current.val = carry ? sum % 10 : sum;
    
            cl1 = cl1 && cl1.next || null
            cl2 = cl2 && cl2.next || null
            if (cl1 || cl2 || carry) {
                current.next = new ListNode(carry);
                current = current.next
            }
        }
        return result
    };
console.log(addTwoNumbers([2, 4, 3], [4, 6, 5]))