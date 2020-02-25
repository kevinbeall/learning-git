const modal = document.querySelector('.modal');
const button = document.querySelector('button');

function handleClick() {
  if (modal.classList.contains('open')) {
    modal.classList.toggle('open');
    modal.style.display = 'none'
  } else {
    modal.style.display = 'block';
  }
}

button.addEventListener('click', handleClick)