"use strict";

import { changeButtonStyle } from "./button_dual_state.mjs";
import { resolveEncryption } from './encryption_system.mjs';

function defBttClick() {
  state = !state;
  changeButtonStyle(defBtt, state);
  defOut.value = resolveEncryption(defOut.value, state);
}

function cleanBttClick() {
  defOut.value = "";
  state = false;
  changeButtonStyle(defBtt, state);
}

let state = false;
const cleanBtt = document.getElementById('btt_clean');
const defBtt = document.getElementById('btt_default');
const defOut = document.getElementById('output_default');

cleanBtt.addEventListener('click', cleanBttClick);
defBtt.addEventListener('click', defBttClick);