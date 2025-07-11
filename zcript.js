const intervalInput = document.getElementById('interval');
const startBtn      = document.getElementById('startBtn');
const stopBtn       = document.getElementById('stopBtn');
const display       = document.getElementById('display');
const beep          = document.getElementById('beep');

let timerId   = null;
let remaining = 0;

// Format seconds to MM:SS
function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const s