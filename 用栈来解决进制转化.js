class Stock {
    constructor(){
        this.items=[];//声明栈
    };
    //向栈中添加元素
    push(ele){
        this.items.push(ele)
    };
    //删除栈顶的元素
    pop(){
        return this.items.pop()
    };
    //查看栈里最后添加的元素
    peek(){
        return this.items[this.items.length-1]
    };
    //产看栈是否为空，空返回true否则是false
    isEmpty(){
        return this.items.length===0?true:false
    };
    //清空栈内所有元素
    clear(){
        this.items=[];
    };
    //查看栈的长度
    size(){
        return this.items.length
    };
    getStock(){
        return this.items.toString()
    }
}
function  decimalToBinary(number){
    let myStock=new Stock();//声明一个栈存数据
    let rem;//余数
    let endnumber='';//转化后的2进制
    while (number>0) {
        rem=Math.floor(number%2)
        myStock.push(rem)
        number=Math.floor(number/2)
    }
    while (!myStock.isEmpty()) {
        endnumber+=myStock.pop().toString()    
    }
    return endnumber
    
}
console.log(decimalToBinary(10))