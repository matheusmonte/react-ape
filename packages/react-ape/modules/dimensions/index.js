'use strict';

function getWidth() {
  if (window && window.innerWidth) {
    return window.innerWidth;
  }
}

function getHeight() {
  if (window && window.innerHeight) {
    return window.innerHeight;
  }
}

function addEventListener(type: string, handler: Function) {
  if (type === undefined) {
    return 'You are trying to add a undefinied event';
  }
  window.addEventListener(type, handler);
}

function removeEventListener(type: string, handler: Function) {
  window.removeEventListener(type, handler);
}

export default {
  getWidth,
  getHeight,
  addEventListener,
  removeEventListener,
};
