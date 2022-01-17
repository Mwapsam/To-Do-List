import _ from 'lodash';

export default function component() {
  const element = document.createElement('div');

  element.innerHTML = _;

  return element;
}
