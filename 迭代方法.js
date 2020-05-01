function isEven(x) { 
    // 如果 x 是 2 的倍数，就返回 true 
    return x % 2 === 0 ? true : false; 
} 
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(numbers.every(isEven));
console.log(numbers.some(isEven));
console.log(numbers.reduce((previous, current) => {
    previous 
    // console.log(current)
    // console.log(index)
    // console.log(array)
}));