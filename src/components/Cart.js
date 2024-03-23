import React from 'react'
import { useContext } from 'react';
import { Cart } from './Context';
import { useState, useEffect } from 'react';
import SingleProduct from './SingleProduct';

const CartPage = () => {
  const { cart } = useContext(Cart);
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: {total}</span>
      <div className="product-container">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}

export default CartPage