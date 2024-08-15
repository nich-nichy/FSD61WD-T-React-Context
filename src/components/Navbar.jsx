import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
    const { cartTotal } = useContext(CartContext);

    return (
        <div className="nav d-flex align-items-center justify-content-between p-4 position-sticky top-0 bg-white">
            <h1 className="d-flex align-items-center">
                Shopping Cart <IoCartOutline className="ms-2" />
            </h1>
            <p className="fw-bold fs-5">
                Subtotal: <span className="text-success">(${cartTotal?.toFixed(2)})</span>
            </p>
        </div>
    );
};

export default Navbar;
