function createTextarea() {
  const textarea = document.createElement('textarea');

  textarea.setAttribute('id', 'textarea');
  textarea.setAttribute('rows', '5');
  textarea.setAttribute('cols', '50');
  textarea.setAttribute('autofocus', true);
  textarea.setAttribute('value', '');

  return textarea;
}

const textarea = createTextarea();

function createKeyButton(className) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.classList.add(className);
  return button;
}

function createWrapper(tagName, className) {
  const wrapper = document.createElement(tagName);
  wrapper.classList.add(className);
  return wrapper;
}

export { textarea, createKeyButton, createWrapper };
