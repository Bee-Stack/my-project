const user = document.querySelector('#user');
const greeting = document.querySelector('#greeting');

user.addEventListener('keyup', (evt) => {
  if (evt.key === 'Enter') {
    if (evt.target.value !== '') {
      greeting.innerText = 'Hey, ' + evt.target.value + '!';
    }
  }
});
