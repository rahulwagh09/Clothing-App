import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {

  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitate 
                buying and selling of products or services over the internet
                serves as a virtual marketplace where businesses and individual
                showcse their products, interact with customers, and conduct
                transactions without the need for a physical presence. E-commerce
                website have gained immense popularity due to their convenius
                accessibility, and the global reach they offer.
            </p>
            <p>E-Commerce wesite typically display products or services a 
                detailed decriptions, images, prices, and any available var
                (e.g., sizes, colors). Each product usually has its own detailed
                with relevant information.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox