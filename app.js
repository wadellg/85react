
const Hello = function() {
  return React.createElement('div', null, `Hello !`);
}

const World = React.createElement(Hello, null, `World`);

const divEle = React.createElement('div', null, `我被一个div标签包裹`);

const HelloWorld = React.createElement('div', null, World, divEle, `我是空文本`);

ReactDOM.render(HelloWorld, document.getElementById('root'));