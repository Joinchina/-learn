let arr1=[1,2,3,4]
let arr2=[5,6,7,8]
//数组合并
//concat 连接 2 个或更多数组，并返回结果
console.log(arr1.concat(arr2))
//every 对数组中的每个元素运行给定函数，如果该函数对每个元素都返回 true，则返回 true
console.log(arr1.every(item=>{
    console.log(item)
}))
// filter 对数组中的每个元素运行给定函数，返回该函数会返回 true 的元素组成的数组
arr1.filter(item=>{
    if(item>1){
        console.log(item)
    }
})
// forEach 对数组中的每个元素运行给定函数。这个方法没有返回值
// join 将所有的数组元素连接成一个字符串
// indexOf 返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1
// lastIndexOf 返回在数组中搜索到的与给定参数相等的元素的索引里最大的值
// map 对数组中的每个元素运行给定函数，返回每次函数调用的结果组成的数组
// reverse 颠倒数组中元素的顺序，原先第一个元素现在变成最后一个，同样原先的最后一个元素变成了现在
// 的第一个
// slice 传入索引值，将数组里对应索引范围内的元素作为新数组返回
// some 对数组中的每个元素运行给定函数，如果任一元素返回 true，则返回 true
// sort 按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数
// 将数组作为字符串返回
console.log(arr1.toString())
//valueOf 和 toString 类似，将数组作为字符串返回
console.log(arr1.valueOf())