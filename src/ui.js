"use strict";

let state = false;
const defaultButton_states = ['encrypt', 'decrypt'];
const defaultButton_styleObjs = {

  encrypt: {
    caption: "Encriptar",
    classes: "btt_common btt_encrypt"
  },

  decrypt: {
    caption: "Desencriptar",
    classes: "btt_common btt_decrypt"
  }

}

function getDefaultButtonStyleObj() {
  let stateNum = Number(state);
  let defaultButton_state = defaultButton_states[stateNum];
  return defaultButton_styleObjs[defaultButton_state];
}

function changeDefaultButtonStyle() {
  let styleObj = getDefaultButtonStyleObj();
  defaultButton.innerText = styleObj.caption;
  defaultButton.className = styleObj.classes;
}


const defaultButton = document.getElementById('btt_default');

defaultButton.addEventListener('click', bttDefaultOnClick);

function bttDefaultOnClick() {
  state = !state;
  changeDefaultButtonStyle();
}