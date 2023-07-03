import React, { Component } from 'react';



class ShoppingCart extends Component {
    state = {}
    render() {
        return <div className='shopping-cart'>
            <h3>Shopping Cart</h3>
            {this.props.items.map(item => <div key={item.name} className='items'>{item.amount}x {item.name} {item.price}€</div>)}
        </div>;
    }
}

export default ShoppingCart;