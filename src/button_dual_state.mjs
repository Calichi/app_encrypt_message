"use strict";

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

function getDefaultButtonStyleObj(state) {
  let stateNum = Number(state);
  let defaultButton_state = defaultButton_states[stateNum];
  return defaultButton_styleObjs[defaultButton_state];
}

function changeButtonStyle(defaultButton, state) {
  let styleObj = getDefaultButtonStyleObj(state);
  defaultButton.innerText = styleObj.caption;
  defaultButton.className = styleObj.classes;
}

export {changeButtonStyle};