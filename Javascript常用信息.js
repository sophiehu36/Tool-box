// 定义 log 函数
var log = function() {
    console.log.apply(console, arguments)
}

// 事件
// ===
//
// 事件是用来处理响应的一个机制
// 这个响应可以来自于用户(点击, 鼠标移动, 滚动), 也可以来自于浏览器
//
// 下面的链接描述了所有事件, 不过我们先从最常用的事件学起, click 事件
// https://developer.mozilla.org/en-US/docs/Web/Events
//
// 常用例子, 给按钮添加一个点击的事件
// 1, 获得按钮
var loginButton = document.querySelector('#id-button-login')
// 2, 声明一个函数, 用于在按钮点击后执行
var clicked = function() {
    log('按钮被点击到了')
}
// 3, 添加事件, 使用 addEventListener 函数, 它有两个参数
// 第一个是事件的名字, 第二个是事件发生后会被自动调用的函数
loginButton.addEventListener('click', clicked)
//

/*
display 属性:
    block:
        独占一行，如 <div>, <p> 等标签，可设置自身宽高
    inline:
        只占 content 的大小，不可设置自身宽高
    inline - block:
        inline 布局，block 模式。不会独占一行，但可以设置自身宽高
*/

/*position的几个常见值和作用: 
    static:
        默认值。无特殊定位，遵循正常文档流
        top, right, bottom, left 和 z-index 等属性无效
    relative:
        相对定位，遵循正常文档流，但可以相对于原本在文档流中的位置，进行偏移
        可以用 top left bottom right 属性来设置坐标
        可以用 z - index 属性来设置显示层次
    absolute:
        完全绝对定位，忽略其他所有东西，往上浮动到 非 static 的元素。脱离正常文档流
        可以用 top left bottom right 属性来设置坐标
        可以用 z - index 属性来设置显示层次
    fixed:
        基于 window 的绝对定位，不随页面滚动改变。脱离正常文档流
        可以用 top left bottom right 属性来设置坐标
        可以用 z - index 属性来设置显示层次
    sticky:
        不常用
*/


// 存储的时候把 array 转换为字符串
// 读取的时候把字符串转成 array
// 这个过程通常被称之为 序列化 和 反序列化
//
// 在 js 中, 序列化使用 JSON 格式

var s = JSON.stringify([1, 2, 3, 4])
log('序列化后的字符串', typeof s, s)
var a = JSON.parse(s)
log('反序列化后的数组', typeof a, a)

// 使用 JSON 序列化后, 就可以把 todo 存入浏览器的 localStorage 了


// 时间标准库
// ===
// 常用用法如下
/*
var d = new Date()
d.getFullYear()
年份, 2016
d.getMonth()
月份, 0-11
d.getDate()
日期, 1-31
d.getHours()
小时, 0-23
d.getMinutes()
分钟, 0-59
d.getSeconds()
秒数, 0-59
d.getMilliseconds()
毫秒, 0-999
d.getDay()
星期几, 0-6
*/