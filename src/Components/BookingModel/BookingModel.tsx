import React, { useState } from 'react';
import styles from './BookingModel.module.scss'; // Create a corresponding SCSS module

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (data: { username: string; email: string; cardNo: string; amount: number; phone: string; }) => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onConfirm }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [cardNo, setCardNo] = useState('');
    const [phone, setPhone] = useState('');
    
    const handleSubmit = () => {
        // Check if all fields are filled
        if (!username || !email || !cardNo || !phone) {
            alert("All fields are required.");
            return; // Exit if any field is empty
        }

        const bookingData = {
            username,
            email,
            cardNo,
            amount: 0, // Set an appropriate amount if needed
            phone
        };
        onConfirm(bookingData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>Confirm Your Booking</h2>
                <input className={styles[`userInput`]} type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className={styles[`userInput`]} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className={styles[`userInput`]} type="text" placeholder="Card Number" value={cardNo} onChange={(e) => setCardNo(e.target.value)} />
                <input className={styles[`userInput`]} type="text" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button style={{margin:"1rem" , cursor:"pointer"}}onClick={handleSubmit}>Confirm</button>
                <button style={{margin:"1rem" ,cursor:"pointer"}} onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default BookingModal;
