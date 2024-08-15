import React, { createContext, useState, useEffect } from 'react';
import products from './products.json';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(
        products.products.map((item) => ({ ...item, quantity: 1 }))
    );
    const [cartTotal, setCartTotal] = useState(0);

    const calculateTotal = (items) => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    useEffect(() => {
        setCartTotal(calculateTotal(cartItems));
    }, [cartItems]);

    const updateQuantity = (id, addOrSub) => {
        setCartItems((prevItems) =>
            prevItems
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + addOrSub } : item
                )
                .filter((item) => item.quantity > 0)
        );
    };


    return (
        <CartContext.Provider value={{ cartItems, cartTotal, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
