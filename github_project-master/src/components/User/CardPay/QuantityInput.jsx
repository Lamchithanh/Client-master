import React, { useState } from 'react';

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="quantity-input">
      <button onClick={handleDecrement}>-</button>
      <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default QuantityInput;
