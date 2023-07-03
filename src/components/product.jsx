import React, { Component } from 'react';


class Product extends Component {
    state = {}
    render() {
        return <div className="card" styles={{ width: '18rem' }}>
            <img src={"assets/img/" + this.props.img} className="card-img-top" alt='img' />
            <div className="card-body">
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.description}</p>
                <button onClick={this.props.onAdd} href="/" className="btn btn-primary">Hinzufügen</button>
            </div>
        </div>;
    }
}



export default Product;