function createElement(tag, obj, children) {
  // потрібно реалізувати
  if (Array.isArray(children)) {
    if (document.createElement(tag)) {
      let parentNode = document.createElement(tag);
      if (typeof obj === 'object' && obj.style) {
        for (let prop in obj.style) {
          parentNode.style[prop] = obj.style[prop];
        }
      }
      for (let i = 0; i < children.length; i++) {
        if (typeof children[i] === 'string') {
          parentNode.appendChild(
            document.createTextNode(children[i]),
          );
        } else {
          parentNode.appendChild(children[i]);
        }
      }
      return parentNode;
    }
  }

  if (document.createElement(tag)) {
    let element = document.createElement(tag);
    if (typeof children === 'string') {
      element.innerHTML = children;
    }
    if (typeof obj === 'object') {
      element.appendChild(document.createTextNode(obj.textContent));
    }
    return element;
  }
}

function render(nodes, rootNode) {
  // потрібно реалізувати
  rootNode.appendChild(nodes);
}

const React = {
  createElement,
  render,
};

const app = React.createElement(
  'div',
  { style: { backgroundColor: 'red' } },
  [
    React.createElement('span', undefined, 'Hello world'),
    React.createElement('br'),
    'This is just a text node',
    React.createElement('div', { textContent: 'Text content' }),
  ],
);

React.render(app, document.getElementById('app'));
