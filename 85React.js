(()=> {
  
  function createElement(parentEle, props, childEle) {
    if (typeof parentEle === 'function') {      
      return parentEle();
    }else {
      let parentElement = document.createElement(parentEle);

      parentElement.innerHTML = childEle;
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