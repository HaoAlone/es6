## let与var 的区别
1. 作用区域  
  var声明的变量的作用域是当前函数或全局作用域，也就是说在块级中用var声明的变量在块级外部依然
可以使用
```
    {
        var a = 1
    }
    console.log(a)//1
```
   而let声明的变量的作用域是块级作用域，也就是当前块区内，在块区外并不能使用该变量
   >当你用var想封闭局部变量时，只能声明一个函数将它包裹，但与此同时又将这个函数暴露出去了，
   如果你想将这个函数也隐藏的话，只能使用立即执行函数
   >
2. 变量声明之前调用 var 报 undefined ； let 报 referenceError ;   
    var 
    ```
    console.log(a)//undefined
    var a = 1;  
    ```
    let   

    ```
        console.log(a)//Uncaught ReferenceError: Cannot access '' before initialization
        let a = 1;
    ```
    var和let声明变量时都存在变量提升,只是他们对变量的初始化不同，var会对变量初始化为undefined,而let并不会对变量进行
    初始化，直到该变量被赋值，在这段时间里，都称这个变量处于暂时性死区里
    
    ECMAScript标准里并没有给出 TDZ（全称 Temporal Dead Zone）定义，这是 JS 社区里提出来的一种叫法。
    **TDZ 并不是某个地方， 或是内存中的某个区域，而是变量在被声明和被初始化之间的这段时间所存在的状态。**   
      
## const 
    定义一个常量，作用域同let相同。
    声明必须马上赋值
    const保证的常量不可更改实际上是创建了一个只读引用，但引用内容如果是对象的话，他就不能保证这个对象不可改变。
    
   参考文章:  
   [理解ES6中的暂时死区(TDZ)](https://segmentfault.com/a/1190000008213835#articleHeader1)
   [由阮一峰老师的一条微博引发的 TDZ 思考](https://www.jianshu.com/p/ebc51ce05416)