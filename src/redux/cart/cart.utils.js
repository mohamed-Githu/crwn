export const addItemToCart = (cartItems, itemToAdd) => {
  const exictingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
  
  if (exictingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === itemToAdd.id 
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  if (itemToRemove.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
  }

  return cartItems.map(cartItem => 
    cartItem.id === itemToRemove.id
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
  );
}