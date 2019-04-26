// 建塔
// 通过以下给定参数构建塔：
// 楼层数（整数且始终大于0）。

// 塔块表示为 *
// 例如，3层楼的塔楼如下图所示

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// 一个6层楼的塔楼如下图所示

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]
function towerBuilder(nFloors){
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
      tower.push(" ".repeat(nFloors - i - 1)
               + "*".repeat((i * 2)+ 1)
               + " ".repeat(nFloors - i - 1));
    }
    return tower;
  

    }

    

console.log(towerBuilder(9));