import React from 'react';

const RightNav = ({ cart, onRemove, totalPrice }) => {
  return (
    <div className="right-nav">
      <h2>Produits Commandés</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => onRemove(index)}>Retirer</button>
          </li>
        ))}
      </ul>
      <div>
        <strong>Total: ${totalPrice.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default RightNav;
