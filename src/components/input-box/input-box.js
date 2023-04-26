function createInputBox() {
  const INPUT = document.createElement('textarea');

  INPUT.setAttribute('id', 'textarea');
  INPUT.setAttribute('rows', '5');
  INPUT.setAttribute('cols', '50');
  INPUT.setAttribute('autofocus', 'true');
  INPUT.textContent = '';

  return INPUT;
}

export default { createInputBox };
