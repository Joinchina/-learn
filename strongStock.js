class strongStock {
    constructor(){
        this.count=0
        this.item={}
    }
    push(ele){
        this.item[this.count]=ele
        this.count++
    }
    pop(){
        if(this.isEmpty()){
            return undefined
        }
        this.count--
        let result=this.item[this.count]
        delete this.item[this.count]
        return result
    }
    peek(){
        return this.item[this.count-1]
    }
    isEmpty(){
        return this.count===0
    }
    clear(){
        this.count=0
        this.item={}
    }
    size(){
        return this.count
    }
}
const myStrongStock=new strongStock()
myStrongStock.push(1)
myStrongStock.push(2)
myStrongStock.push(3)
console.log(myStrongStock.peek())
console.log(myStrongStock.size())
console.log(myStrongStock.pop())