/* eslint-disable import/prefer-default-export */
import _ from 'lodash';

export function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _;

  return element;
}
