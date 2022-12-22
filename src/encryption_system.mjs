"use strict"

const encryptionKeys = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat'
}

function encrypt(message) {

  let encryptedMessage = "";

  for(let _char of message) {

    for(const _key in encryptionKeys) {
      if(_char === _key) {
        _char = encryptionKeys[_key];
        break;
      } 
    }

    encryptedMessage += _char;
  }
  return encryptedMessage;

}

function decrypt(message) {
  let decryptedMessage = message;

  for(const _key in encryptionKeys) {
    const _value = encryptionKeys[_key];
    decryptedMessage = decryptedMessage.replaceAll(_value, _key);
  }

  return decryptedMessage;
}

function resolveEncryption(message, state) {
  if(state) return encrypt(message);

  return decrypt(message);
}

export { resolveEncryption }