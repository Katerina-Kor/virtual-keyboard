function createTextarea() {
  const textarea = document.createElement('textarea');

  textarea.setAttribute('id', 'textarea');
  textarea.setAttribute('rows', '5');
  textarea.setAttribute('cols', '50');
  textarea.setAttribute('autofocus', true);
  textarea.setAttribute('value', '');

  return textarea;
}

let textarea = createTextarea();
export { textarea };
