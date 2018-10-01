
## 第一步, 构建 React、ReactDOM 基础方法,实现渲染字符串

1. createElement
2. render
3. 页面输出Hello World

## 第二步 添加函数组件功能，能渲染函数组件

1. 实现如下效果：
```
const Hello = function() {
  return React.createELement('div', null, `Hello by function`);
}

const HelloWorld = React.createElement(Hello, null, null);
ReactDOM.render(HelloWorld, document.getElementById('root'));
```

## 第三步 增加对子组件支持

实现如下功能：
```
const Hello = function() {
  return React.createElement('div', null, `Hello !`);
}

const World = React.createElement(Hello, null, `World`);

const divEle = React.createElement('div', null, `我被一个div标签包裹`);

const HelloWorld = React.createElement('div', null, World, divEle, `我是空文本`);

ReactDOM.render(HelloWorld, document.getElementById('root'));
```

## 第四步 增加类组件的实现

