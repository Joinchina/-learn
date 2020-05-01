
  class Array {
      constructor(props){
        this.fn=function(x,y){return x-y}
        this.sortArr=props
      };
      sort(fn){
        if(!this.sortArr){
            return '请输入数据'
        }  
        var t;  
        fn=fn||this.fn;  
        for(var i=0;i<this.sortArr.length;i++){  
            for(var j=i;j<this.sortArr.length;j++){  
                if(fn(this.sortArr[i],this.sortArr[j])>0){  
                    t=this.sortArr[i];  
                    this.sortArr[i]=this.sortArr[j];  
                    this.sortArr[j]=t;  
                }  
            }  
        }  
      }
  }
  //冒泡排序
  //调用通过new Array构造函数

  let myArray=new Array([1,2,3,4,5]);
  myArray.sort((x,y)=>{ return y-x; })
  
  //2:样式题这里用一个css代替了
.row{
    width:100%;
}
.col-12{
    width:(100/12)%;
}
@media screen and (max-width: 640px) {
    .col-12{
        width:(100/6)%
    }
}

// 3:jsonp把
原理是动态的创建一个src标签
现在通常用的做法是再本地启用服务代理接口，因为jsonp跨域存在一个弊端没有get请求，所有现在基本都是用代理的方式实现跨域

// 4：react组件
class Square extends React.Component {
    constructor(props){
        super(props)
        this.state=0;
    }
    addNumber(){
        this.setData({
            state:state++
        })
    }
    render() {
      return (
          <div>
            <button onClick={this.addNumber.bind(this)}>
                点我
            </button>
            <span>{this.state}<span></span>
          </div>
      );
    }
  }

// 5:题
5
0 1 2 3 4 5
  
// 6题
1正确

// 7题
3
//8题
算法用时的时间复杂度

//9题
this指向问题，总结起来说看谁调用
1;指向全局
2：指向当前作用域
3：指向调用函数
4：指向构造函数
//10题
1、每个函数都可以是构造函数，每个对象都可以是原型对象。
2、构造函数的prototype与所有实例对象的__proto__都指向原型对象。
