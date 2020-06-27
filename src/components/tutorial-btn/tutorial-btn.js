import './tutorial-btn.scss';

class TutorialBtn {
  btnCssClass = 'tutorial-btn';

  render() {
    const button = document.createElement('button');
    button.innerHTML = 'Hello World';
    const body = document.querySelector('body');
    button.onclick = function() {
      const p = document.createElement('p');
      p.classList.add('tutorial-btn-text');
      p.innerHTML = 'Hello World'
      body.appendChild(p);
    }
    button.classList.add(this.btnCssClass);
    body.appendChild(button);
  }
}

export default TutorialBtn;
