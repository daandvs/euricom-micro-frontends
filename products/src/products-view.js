import React from 'react';

export default class ProductsView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const products = this.props.products || [];

    const productItems = products.map((product) => {
      return React.createElement('div', { 
        key: `product-holder-${product.id}`,
        className: 'card',
        style: {
          width: '18rem'
        }
      }, [
        React.createElement('img', {
          className: 'card-img-top',
          src: `/products/dist/assets/images/${product.img}`,
          style: {
            height: '100px',
            objectFit: 'cover'
          }
        }),
        React.createElement('div', {
          className: 'card-body'
        }, [
          React.createElement('h5', { key: `product-name-${product.id}` }, product.name),
          React.createElement('button', {
            key: `product-btn-${product.id}`,
            className: 'btn btn-success',
            onClick: () => {
              console.log('[PRODUCT] clicked', product);
            }
          }, `Buy for only $${product.price}`)
        ])]);
    });
  
    return [React.createElement('h3', {}, 'Products'), React.createElement('div', {}, productItems)];
  }
}