(()=> {
  
  function createElement(parentEleTag, props, childEle) {
    let parentElement = document.createElement(parentEleTag);

    parentElement.innerHTML = childEle;
    return parentElement;
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