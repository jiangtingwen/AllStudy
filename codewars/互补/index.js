// 在DNA串中，符号“A”和“T”是彼此的互补，如“C”和“G”。你有DNA的一面功能（字符串，Haskell除外）; 你需要获得另一个互补的一面。DNA链从不是空的或根本没有DNA（再次，除了Haskell）。

// 更多类似的练习在这里找到http://rosalind.info/problems/list-view/（来源）

// DNAStrand ("ATTGC") // return "TAACG"

// DNAStrand ("GTAT") // return "CATA" 


// function DNAStrand(dna) {

    // //方法一（笨方法）
    // var arr = dna.split('');
    
    //         for (let i = 0, l = arr.length; i < l; i++) {
    //             if (arr[i] === 'A') {
    //                  arr[i]='T';
    //             } else if (arr[i] === 'T') {
    //                arr[i] = 'A'
    //             }
    //             else if (arr[i] === 'G') {
    //                  arr[i] = 'C'
    //             } else if (arr[i] === 'C') {
    //                  arr[i] = 'G'
    //             }

        
    //         }
    //         return arr.join('');
    //     }
    // console.log(DNAStrand('GAGCTT'))
    // ============================================
    //方法二

//     var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }
   var pairs = {'A':'T','T':'A','G':'C','C':'G'}
   function DNAStrand(dna){
   return dna.split('').map(function(v){
       return pairs[v];
   }).join('');
}
console.log(DNAStrand('GAGCTT'));


   
   


