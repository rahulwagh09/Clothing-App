import React, { createContext, useState } from "react";
// import { useNavigate } from 'react-router-dom';
import all_product from '../Components/Assets/all_product';
import '../Components/CartItems/CartItems';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 1; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;

}

const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [user, setUser] = useState(null);
    // const navigate = useNavigate();


    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }

        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const login = async (email, password) => {
        // Replace with actual login logic
        if (email === 'rahul' && password === 'pass') {
            setUser({ name: 'Rahul', email });
            return null;
        }
        return 'Invalid email or password';
    };

    const signup = async (name, email, password) => {
        // Replace with actual signup logic
        if (name && email && password) {
            setUser({ name, email });
            return null;
        }
        return 'Signup failed';
    };

    const updateUserProfile = (profile) => {
        setUser({ ...user, ...profile });
    };

    const logout = () => {
        setUser(null);
        setCartItems(getDefaultCart()); // Reset cart to default values on logout
        // navigate('/'); // Redirect to home page after logout
    };


    const contextValue = { user, login, signup,logout,updateUserProfile, getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;