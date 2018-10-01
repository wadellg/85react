(()=> {
  
  function createElement(parentEle, props, ...childEles) {
    //console.log(childEles);
    if (typeof parentEle === 'function' && /^\s*class\s+/.test(parentEle.toString())) {
      let component = new parentEle();
      return component.render();
    }
    else if (typeof parentEle === 'function') {
      return parentEle();
    }else {
      let parentElement = document.createElement(parentEle);

      childEles.map(child=>{
        console.log(typeof child);
        if (typeof child === 'string'){
          parentElement.innerHTML += child;
        } else if (typeof child === 'object') {
          parentElement.appendChild(child);
        }
      })
      return parentElement;
    }
    
  }

  function render(innerEle, rootEle) {
    rootEle.appendChild(innerEle);
  }

  window.React = {
    createElement
  };
  window.ReactDOM = {
    render
  };
})()