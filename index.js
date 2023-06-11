setTimeout(appear, 4000);

function appear() {
  document.getElementById('screen').style.opacity = '1';
  document.querySelectorAll('.load').forEach((e) => {
    e.style.display = 'none';
  });
}

document.addEventListener('click', doStuff);

function doStuff() {
  document.getElementById('screen').style.opacity = '0';
  document.getElementById('game').style.display = 'block';
}
