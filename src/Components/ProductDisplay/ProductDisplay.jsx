import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart, user } = useContext(ShopContext);

    const handleAddToCart = (productId) => {
        if (user) {
            addToCart(productId);
        } else {
            toast.error("Please log in to add items to the cart");
        }
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(130)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old"> ${product.old_price} </div>
                    <div className="productdisplay-right-price-new"> ${product.new_price} </div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with
                    a round neckline and short sleeves, worn as an undershirt or outer
                    garment.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { handleAddToCart(product.id) }}>ADD TO CART</button>
                <div className='productdisplay-right-tryon'><button>Try-On</button></div>
                <p className='productdisplay-right-category'> <span>Category :</span> Men, T-shirt</p>
                <p className='productdisplay-right-category'> <span>Tags :</span> Mordern, Latest</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductDisplay;
