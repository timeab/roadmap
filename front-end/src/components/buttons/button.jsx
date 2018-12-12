import React from 'react';
import './button.css';

class Button extends React.Component {
    addToCart() {
        alert('added to cart');
    }
    render() {
        return (
            <button className='btn' id='button' onClick={this.addToCart}>
                Add to cart
            </button>
        );
    }
}

export default Button;