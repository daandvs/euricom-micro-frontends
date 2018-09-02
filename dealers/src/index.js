import 'bootstrap/dist/css/bootstrap.min.css';
import renderView from './render';
import './styles.css';
class Dealers extends HTMLElement {

  constructor() {
    super();

    this.buttons = [];
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {

  }

  render() {
    fetch('http://localhost:3005/dealers')
      .then((response) => {
        return response.json();
      })
      .then((dealers) => {
        this.innerHTML = renderView(dealers);

        this.detachListeners();
        this.attachListeners();
      })
    ;
  }

  attachListeners() {
    this.buttons = [].slice.call(this.getElementsByClassName('js-view-product-btn'));
    this.buttons.forEach((el) => {
      el.addEventListener('click', this.onButtonClicked);
    });
  }

  detachListeners() {
    this.buttons.forEach((btn) => {
      btn.removeEventListener('click', this.onButtonClicked);
    });
  }

  onButtonClicked(ev) {
    const dealerId = ev.target.getAttribute('data-dealer-id');
    console.log('[DEALER] clicked', dealerId);
    window.history.pushState({ dealerId }, 'dealer', `/dealer/${dealerId}`);
    window.dispatchEvent(new CustomEvent('dealer:clicked', { detail: { dealerId } }));
  }
}

window.customElements.define('dealers-app', Dealers);