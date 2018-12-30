import 'assets/style';

function component() {

  let element = document.createElement('div');

  element.classList.add('app');
  element.innerHTML = '<header class="app-header">'
                    +   '<div class="app-logo"></div>'
                    +   '<h1 class="app-title">Webpack-app</h1>'
                    + '</header>'
                    + '<p class="app-intro">Hello World</p>';

  return element;
}

document.body.appendChild(component());
