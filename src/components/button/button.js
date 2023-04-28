export function createKeyButton(className) {
  const button = document.createElement('button');
  button.classList.add('button');
  button.classList.add(className);
  return button;
}

