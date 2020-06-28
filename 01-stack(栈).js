//声明一个栈存储的构造函数
//栈遵循先进后出的原则下面我们逐次为栈添加一些方法
//push向栈中添加元素
//pop删除栈顶的元素
//peek查看栈里最后添加的元素
//isEmpty栈是否空了
//clear清楚栈内所有元素
//size栈的大小
class Stack {
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
    }
}

//验证栈
//初始化栈
// const myStock=new Stock()
// console.log(myStock.isEmpty())//true
// myStock.push(1)
// myStock.push(2)
// myStock.push(3)
// console.log(myStock.peek()) //3
// console.log(myStock.pop())
// console.log(myStock.size())
//实例应用，禁止转化，将十进制转2进制
function myNumber(number){
    const myStack=new Stack()
    let num;
    let endnumber='';

    while( number > 0){
        //区余数放入到栈中
        let num=Math.floor(number%2)
        myStack.push(num)
        number=Math.floor(number/2)
    }
    while(!myStack.isEmpty()){
        let str=myStack.pop()
        endnumber+=str
    }

    return endnumber
}
console.log(myNumber(10))
