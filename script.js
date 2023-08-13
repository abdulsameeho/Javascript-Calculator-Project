function numberClick (val) {
  document.getElementById('screen').value += val;
  
}

function totalResult () {
    let text = document.getElementById('screen').value;
    let result = eval(text)
    document.getElementById('screen').value = result;
}

function resetDisplay () {
    document.getElementById('screen').value = '';
}