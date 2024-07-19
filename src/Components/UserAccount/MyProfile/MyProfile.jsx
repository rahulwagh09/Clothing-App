import React, { useContext, useState } from 'react';
import { ShopContext } from '../../../Context/ShopContext';
import './MyProfile.css';

const MyProfile = () => {
    const { user, updateUser } = useContext(ShopContext);
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [address, setAddress] = useState(user?.address || '');
    const [pincode, setPincode] = useState(user?.pincode || '');
    const [mobile, setMobile] = useState(user?.mobile || '');

    const handleUpdate = () => {
        updateUser({ name, email, address, pincode, mobile });
        alert('Profile updated successfully!');
    };

    return (
        <div className="profile">
            <h2>My Profile</h2>
            {user ? (
                <div className="profile-details">
                    <div className="profile-field">
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="profile-field">
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="profile-field">
                        <label>Address:</label>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="profile-field">
                        <label>Pincode:</label>
                        <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                    </div>
                    <div className="profile-field">
                        <label>Mobile:</label>
                        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </div>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            ) : (
                <p>Please log in to see your profile details.</p>
            )}
        </div>
    );
};

export default MyProfile;
