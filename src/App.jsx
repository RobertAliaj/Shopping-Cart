import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/product';
import ShoppingCart from './components/shopping-cart';


class App extends Component {
    state = {
        items: []
    }

    addItem = (amount, name, price) => {
        let currentItems = this.state.items;

        let existingItem = this.state.items.find(item => item.name == name);

        if (existingItem) {
            existingItem.amount++;
        } else {
            currentItems.push({
                amount,
                name,
                price
            })
        }
        this.setState({ items: currentItems });
    }

    render() {
        return <React.Fragment>
            <Navbar />
            <div className="main-container">
                <div className='product-container'>
                    <Product onAdd={() => this.addItem(4, 'Tomaten', 2.99)} img="tomaten.jpg" title="Tomaten" description="Description 1" />
                    <Product onAdd={() => this.addItem(2, 'Paprika', 5.99)} img="paprika.jpg" title="Paprika" description="Description 2" />
                    <Product onAdd={() => this.addItem(8, 'Zwiebel', 4.99)} img="zwiebel.jpg" title="Zwiebel" description="Description 3" />
                    <Product onAdd={() => this.addItem(5, 'Kartoffel', 0.99)} img="kartoffel.jpg" title="Kartoffel" description="Description 4" />
                    <Product onAdd={() => this.addItem(3, 'Knoblauch', 6.99)} img="knoblauch.jpg" title="Knoblauch" description="Description 5" />
                </div>
                <ShoppingCart items={this.state.items} />
            </div>
        </React.Fragment>;
    }
}

export default App;