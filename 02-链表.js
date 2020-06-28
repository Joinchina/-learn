function defaultEquals(a, b) {
    return a === b;
}
class Node {
    constructor(element) {
        this.element = element;
        this.next = undefined;
    }
}
class LinkedList {
    constructor(){
        this.head=null;
        this.count=0
    }
    //向链表尾部添加元素
    push(element){
        const node=new Node(element);
        let current;
        if(this.head==null){
            this.head=node
        }else{
            current=this.head;
            //获取最后一项
            while(current.next!=null){
                current = current.next;
            }
            current.next = node;
        }
        this.count++
    }
    //向链表的特定位置插入一个新元素
    insert(element, index){
        //限制index
        if(index>=0&&index<=this.count){
            const node = new Node(element);
            if(index===0){
                const current=this.head
                node.next=current;
                this.head=node
            }else{
                const previous = this.getElementAt(index - 1);
                node.next=previous.next;
            }
            this.count++
            return true
        }
        return false
    }
    //从链表的特定位置移除一个元素。
    removeAt(index){
        if (index >= 0 && index < this.count) {
            let current = this.head;
            // 移除第一项
            if (index === 0) {
                this.head = current.next;
            } else {
                const previous = this.getElementAt(index - 1);
                current.next=previous.next;
            }
            this.count--;
            return current.element;
            }
            return undefined;
    }
    //返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回 undefined。
    getElementAt(number){
        if(number>=0&&number<=this.count){
            let node =this.head
            for (let i = 0; i <number&&node!=null; i++) {
                node=node.next
            }
            return node
        }
        return undefined
    }
    //从链表中移除一个元素
    remove(element){

    }
    //返回元素在链表中的索引。如果链表中没有该元素则返回-1。
    indexOf(element){

    }
    //如果链表中不包含任何元素，返回 true，如果链表长度大于 0则返回 false。
    isEmpty(){

    }
    //返回链表包含的元素个数，与数组的 length 属性类似。
    size(){

    }
    //返回表示整个链表的字符串。由于列表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
    toString(){

    }
}
const List=new LinkedList()
List.push(10)
List.push(11)
// List.removeAt(1)
List.insert(12,1)
console.log(List)
