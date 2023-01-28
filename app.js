const _n = 30;
const _array = [];
const container = document.getElementById("container");

let _audioCtx = null;

function _playNote(_freq) {
  if (_audioCtx === null) {
    _audioCtx = new (AudioContext ||
      webkitAudioContext ||
      window.AudioContext)();
  }
  const _duration = 0.1;
  const _oscilator = _audioCtx.createOscillator();
  _oscilator.frequency.value = _freq;
  _oscilator.start();
  _oscilator.stop(_audioCtx.currentTime + _duration);
  const _node = _audioCtx.createGain();
  _node.gain.value = 0.1;
  _node.gain.linearRampToValueAtTime(0, _audioCtx.currentTime + _duration);
  _oscilator.connect(_node);
  _node.connect(_audioCtx.destination);
}

function _reset() {
  for (let i = 0; i < _n; i++) {
    _array[i] = Math.random();
  }
  _showBars();
}
_reset();

function _play() {
  const _copy = [..._array];
  const _moves = _bubbleSort(_copy);
  _animate(_moves);
}

function _animate(_moves) {
  if (_moves.length == 0) {
    _showBars();
    return;
  }
  const _move = _moves.shift();
  const [i, j] = _move._indices;

  if (_move._type == "swap") {
    [_array[i], _array[j]] = [_array[j], _array[i]];
  }

  _playNote(200 + _array[i] * 500);
  _playNote(200 + _array[j] * 500);
  _showBars(_move);
  setTimeout(function () {
    _animate(_moves);
  }, 50);
}
function _bubbleSort(_array) {
  const _moves = [];
  do {
    var _swapped = false;

    for (let i = 1; i < _array.length; i++) {
      _moves.push({
        _indices: [i - 1, i],
        _type: "compare",
      });
      if (_array[i - 1] > _array[i]) {
        _swapped = true;
        _moves.push({
          _indices: [i - 1, i],
          _type: "swap",
        });
        [_array[i - 1], _array[i]] = [_array[i], _array[i - 1]];
      }
    }
  } while (_swapped);
  return _moves;
}

function _showBars(_move) {
  container.innerHTML = "";
  for (let i = 0; i < _array.length; i++) {
    const bar = document.createElement("div");
    bar.style.height = _array[i] * 100 + "%";
    bar.classList.add("bar");

    if (_move && _move._indices.includes(i)) {
      bar.style.backgroundColor = _move._type == "swap" ? "red" : "blue";
    }
    container.appendChild(bar);
  }
}
