
const Hello = function() {
  return React.createElement('div', null, `Hello by function`);
}

const HelloWorld = React.createElement(Hello, null, null);
ReactDOM.render(HelloWorld, document.getElementById('root'));