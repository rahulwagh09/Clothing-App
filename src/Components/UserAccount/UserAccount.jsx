import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './UserAccount.css';
import { ShopContext } from '../../Context/ShopContext';

const UserAccount = () => {
    const { logout } = useContext(ShopContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className='user-account'>
            <h2>User Account</h2>
            <Nav variant="tabs" defaultActiveKey="/profile" fill>
                <Nav.Item>
                    <Nav.Link onClick={() => navigate('/profile')}>My Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => navigate('/wishlist')}>Wishlist</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => navigate('/change-password')}>Change Password</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {handleLogout()}}>Logout</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default UserAccount;
