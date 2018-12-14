import React from 'react';
import './button.css';
import MaterialButton from '@material-ui/core/Button';

class Button extends React.Component {
    addToCart() {
        alert('added to cart');
    }
    render() {
        return (
            <MaterialButton variant="contained" className='btn' id='button' onClick={this.addToCart}>
                Add to cart
            </MaterialButton>
        );
    }
}

export default Button;