// Checkout.js
import React from 'react';
import './Checkout.css'; // Add your styling here

const Checkout = () => {
    const handlePayment = (method) => {
        alert(`Proceeding with ${method}`);
        // Here you would typically integrate with a payment API
    };

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <h2>Select Payment Method</h2>
            <div className="payment-options">
                <button onClick={() => handlePayment("Net Banking")}>Net Banking</button>
                <button onClick={() => handlePayment("Debit Card")}>Debit Card</button>
                <button onClick={() => handlePayment("Google Pay")}>Google Pay</button>
            </div>
        </div>
    );
};

export default Checkout;
