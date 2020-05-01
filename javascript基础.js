//1位运算
// console.log('5 & 1:', (5 & 1)); //1
// console.log('5 | 1:', (5 | 1)); //5
// console.log('~ 5:', (~5)); //-6
// console.log('5 ^ 1:', (5 ^ 1));//4 
// console.log('5 << 1:', (5 << 1)); //10
// console.log('5 >> 1:', (6 >> 1));//2
//多维数组
let arr=[];
arr[0]=[1,2,3,4,5]
arr[1]=[6,7,8,9,10]
console.log(arr)
//迭代二维数组
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j])        
    }    
}