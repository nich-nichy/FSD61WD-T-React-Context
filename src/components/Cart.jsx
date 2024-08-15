import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { MdAddBox } from "react-icons/md";
import { FaSquareMinus } from "react-icons/fa6";

const Cart = () => {
    const { cartItems, cartTotal, updateQuantity } = useContext(CartContext);

    const truncateText = (text, maxLength) => {
        if (text?.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className="container mt-2">
            <h2 className="mb-4">Your Cart:</h2>
            <ul className="list-group">
                {cartItems?.map((item) => (
                    <li key={item.id} className="list-group-item">
                        <div className="mb-3 rounded">
                            <div className="card-body d-flex align-items-center">
                                <div>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="rounded m-2"
                                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="m-3 flex-grow-1">
                                    <h5 className="mb-1">{item.title}</h5>
                                    <p className="text-muted mb-1 w-75">
                                        {truncateText(item.description, 150)}
                                    </p>
                                    <p className="mb-0 poppins-medium">Price: $<span className="text-decoration-underline fs-6">{item.price}</span></p>
                                </div>
                                <div className="d-flex align-items-center m-5">
                                    <button
                                        className="btn btn-outline-primary me-2"
                                        onClick={() => updateQuantity(item.id, 1)}
                                    >
                                        <MdAddBox size={24} />
                                    </button>
                                    <span className="badge bg-secondary fs-6">{item.quantity}</span>
                                    <button
                                        className="btn btn-outline-danger ms-2"
                                        onClick={() => updateQuantity(item.id, -1)}
                                    >
                                        <FaSquareMinus size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <h3 className='text-end m-5 me-0'>Total: ${cartTotal?.toFixed(2)}</h3>
        </div>
    );
};

export default Cart;
