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

function addEventListener(){

}

function removeEventListener(){

}

export default {
  getWidth,
  getHeight,
  addEventListener,
  removeEventListener
};
