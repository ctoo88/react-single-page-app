import './assets/style.scss';

function component() {

  let element = document.createElement('div');

  element.classList.add('app');
  element.innerHTML = '<header class="app-header">'
                    +   '<div class="app-logo"></div>'
                    +   '<h1 class="app-title">App demo</h1>'
                    + '</header>'
                    + '<p class="app-intro">hello world.</p>';

  return element;
}

document.body.appendChild(component());
