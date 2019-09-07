import React from 'react';
import './App.css';
import Item from './Item';

const items = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5,
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15,
  },
  {
    name: 'Agua mineral',
    description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5,
  },
  {
    name: 3543,
    quantity: 2,
    category: 'Bebida',
  },
];


class ItemList extends React.Component {
    render() {

      return ( 
        <ul className="item-list">
          {items.map(function(item){
            return <li key={item.name}>
            <Item
            name={item.name}
            description={item.description}
            quantity={item.quantity}
            category={item.category}
            price={item.price}
            />
          </li>
        })}
      </ul>
      );
    }
  }



  export default ItemList;