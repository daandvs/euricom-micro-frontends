import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import ProductsView from './products-view';
import './styles.css';

class Products extends HTMLElement {
  constructor() {
    super();

    this.root = null;
  }

  static get observedAttributes() { return ['dealer']; }

  connectedCallback() {
    this.root = document.getElementById('root');
    if (!this.root) {
      this.root = document.createElement('div');
      this.root.setAttribute('id', 'root');
      this.appendChild(this.root);
    }
  }

  disconnectedCallback() {

  }

  attributeChangedCallback(attr, oldValue, newValue) {
    this.render();
  }

  render() {
    const dealerId = this.getAttribute('dealer');
    fetch(`http://localhost:3005/products?dealerId=${dealerId}`)
      .then((response) => {
        return response.json();
      })
      .then((products) => {
        ReactDOM.render(
          React.createElement(ProductsView, { products }),
          this.root
        );
      })
    ;
  }
}

window.customElements.define('products-app', Products);