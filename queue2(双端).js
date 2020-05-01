// 双端队列可从两端进出
class Queue {
    constructor(){
        this.count=0;//存储key
        this.lowCount=0;//存储位置
        this.items={};//输出数据
    }
    //添加
    enQueue(ele){
        this.items[this.count]=ele
        this.count++
    }
    enQueueend(ele){
        
    }
    //删除
    dlQueue(){
        if(this.isEmpty()){
            return undefined
        }
        let result=this.items[this.lowCount]
        delete this.items[this.lowCount]
        this.lowCount++
        return result
    }
    //查看头元素
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[0]
    }
    //为空
    isEmpty(){
        return this.count-this.lowCount===0
    }
    //元素数
    size(){
        return this.count-this.lowCount
    }
    //清空
    clear(){
        this.count=0
        this.lowCount=0
        this.items={}
    }
    //序列化
    toString(){
        if(this.isEmpty()){
            return ''
        }
        let str=`${this.items[this.lowCount]}`
        for (let i = this.lowCount+1; i < this.count; i++) {
            str= `${str},${this.items[i]}`;            
        }
        return str
    }
}
const arr=new Queue()
arr.enQueue(1)
arr.enQueue(2)
arr.enQueue(3)
console.log(arr.peek())
console.log(arr.dlQueue())
console.log(arr.size())
console.log(arr.toString())