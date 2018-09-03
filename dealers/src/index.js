import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

class Dealers {

  constructor() {
    this.buttons = [];
  }

  render() {
    fetch('http://localhost:3005/dealers')
      .then((response) => {
        return response.json();
      })
      .then((dealers) => {
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
  }
}