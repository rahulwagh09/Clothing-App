import React, { useState, useContext } from 'react';
import { ShopContext } from '../../../Context/ShopContext';
import './ChangePassword.css';

const ChangePassword = () => {
    const { changePassword } = useContext(ShopContext);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleChangePassword = () => {
        if (newPassword !== confirmNewPassword) {
            alert("New passwords do not match.");
            return;
        }
        const result = changePassword(currentPassword, newPassword);
        if (result) {
            alert("Password changed successfully.");
        } else {
            alert("Failed to change password.");
        }
    };

    return (
        <div className="change-password">
            <h2>Change Password</h2>
            <div className="change-password-details">
                <div className="password-field">
                    <label>Current Password:</label>
                    <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
                </div>
                <div className="password-field">
                    <label>New Password:</label>
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div className="password-field">
                    <label>Confirm New Password:</label>
                    <input type="password" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} />
                </div>
                <button onClick={handleChangePassword}>Update Password</button>
            </div>
        </div>
    );
};

export default ChangePassword;
