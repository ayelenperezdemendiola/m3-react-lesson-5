import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
    render() {
      return (
        <div className="item">
          <h5 className="quantity">{ this.props.quantity }</h5>
          <div>
            <h5>{ this.props.name }</h5>
            <h6 className="text-muted">{ this.props.description }</h6>
          </div>
          <div className="badge badge-info">{ this.props.category }</div>
          <h5 className="price">{ this.props.price }€</h5>
        </div>
      );
    }
  }

  Item.defaultProps = {
      description: 'Estamos actualizando la información'
    }

  Item.propTypes = {
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number,
      price: PropTypes.number.isRequired,
      category: PropTypes.string,
      description: PropTypes.string,
    };
   

    // Dado el resultado del ejercicio 3, vamos a hacer que el nombre de los items sea obligatorio y que el precio sea también obligatorio y de tipo numérico. Crea después un nuevo item con valores erróneos para ver qué pinta tiene el error que nos envía React.

  export default Item;