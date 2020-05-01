//定义链表类
//定义一个自定义的比较函数
function defaultEquals(a, b) { 
    return a === b; 
}
//定义链表的node结构
class Node { 
    constructor(element) { 
        this.element = element; 
        this.next = undefined; 
    } 
}
class linkedList {
    constructor(equalsFn = defaultEquals()){
        this.count=0;//记录链表的元素数量
        this.head=undefined;//链表结构
        this.equalsFn = equalsFn;
    }
    //向链表中添加一个元素
    push(element){
        const node = new Node(element); // {1} 
        let current; // {2} 
        if (this.head == null) { // {3} 
            this.head = node; 
        } else { 
            current = this.head; // {4} 
            while (current.next != null) { // {5} 获得最后一项
                current = current.next; 
            } 
            // 将其 next 赋为新元素，建立链接
            current.next = node; // {6} 
        } 
        this.count++; // {7}
        console.log(this.head)
    }
}
const list=new linkedList()
list.push(1)
list.push(15)
list.push(30)