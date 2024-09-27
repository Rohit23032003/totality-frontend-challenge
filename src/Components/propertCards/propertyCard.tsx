'use client';
import styles from './propertyCard.module.scss';
import Image from 'next/image';
import { location, bedroom, rupees ,phone } from '@/assets/index';
import { StaticImageData } from 'next/image';
import { useState } from 'react';
import BookingModal from '../BookingModel/BookingModel';

interface PropertyCardProps {
    id: number;  // Unique identifier for the property
    rent_price: number;
    location: string;
    no_of_bedrooms: number;
    photo: string | StaticImageData;
    no_of_amenities: number;
    dealer_name: string;
    dealer_phone_number: string;
    activeProperty: number;
    no_of_items: number;
    setRemoveId: (id: number) => void;
    setItemNo :(num:number) => void;
    setPropertyId:(id:number) => void;
}

const PropertyCard = (props: PropertyCardProps): JSX.Element => {
    const [noOfItems, setItems] = useState(1); // State for number of items
    const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility
    const locationData = props.location.split(',');

    // Function to add property to cart in localStorage
    const handleAddToCart = () => {
        const cartList = JSON.parse(localStorage.getItem('cartList') || '[]');
        const newCartItem = {
            id: props.id,
            rent_price: props.rent_price,
            location: props.location,
            no_of_bedrooms: props.no_of_bedrooms,
            photo: props.photo,
            no_of_amenities: props.no_of_amenities,
            dealer_name: props.dealer_name,
            dealer_phone_number: props.dealer_phone_number,
            no_of_items: noOfItems // Include no_of_items
        };
        localStorage.setItem('cartList', JSON.stringify([...cartList, newCartItem]));
        alert('Added to cart!');
    };

    // Function to open the modal
    const openBookingModal = () => {
        setModalOpen(true);
    };

    // Function to handle booking confirmation
    const handleBookingConfirmation = (data: { username: string; email: string; cardNo: string; amount: number; phone: string; }) => {
        const bookedList = JSON.parse(localStorage.getItem('bookedList') || '[]');
        const newBookedItem = {
            id: props.id,
            rent_price: props.rent_price,
            location: props.location,
            no_of_bedrooms: props.no_of_bedrooms,
            photo: props.photo,
            no_of_amenities: props.no_of_amenities,
            dealer_name: props.dealer_name,
            dealer_phone_number: props.dealer_phone_number,
            no_of_items: noOfItems, // Include no_of_items in the booking
            ...data // Include user details
        };

        localStorage.setItem('bookedList', JSON.stringify([...bookedList, newBookedItem]));
        alert(`Property booked! Ordered ${noOfItems} items.`);
    };

    const handleRemoveFromCart = () => {
        props.setRemoveId(props.id); // Trigger removal of the property from cart
    };

    return (
        <div className={styles.cardSection}>
            <Image src={props.photo} alt="houseimage" />
            <div className={styles.saperateLine}></div>
            <div className={styles.DataDiv}>
                <div className={styles.detail}>
                    <Image src={location} alt="locationPng" width={20} height={20} />
                    Location
                </div>
                <span style={{ marginLeft: '0.25rem' }}>{locationData[0]}</span>
            </div>
            <div className={styles.DataDiv}>
                <div className={styles.detail}>
                    <Image src={location} alt="locationPng" width={20} height={20} />
                    State
                </div>
                <span style={{ marginLeft: '0.25rem' }}>{locationData[1]}</span>
            </div>
            <div className={styles.DataDiv}>
                <div className={styles.detail}>
                    <Image src={rupees} alt="rupees" width={20} height={20} />
                    Price
                </div>
                <span style={{ marginLeft: '0.25rem' }}>₹ {props.rent_price}</span>
            </div>
            <div className={styles.DataDiv}>
                <div className={styles.detail}>
                    <Image src={bedroom} alt="bedroom" width={20} height={20} />
                    BHK
                </div>
                <span style={{ marginLeft: '0.25rem' }}>{props.no_of_bedrooms}</span>
            </div>
            {props.activeProperty === 2 &&
                    <><div className={styles.DataDiv}>
                        <div className={styles.detail}>
                            name
                        </div>
                        <span style={{ marginLeft: '0.25rem' }}>{props.dealer_name}</span>
                    </div>
                    <div className={styles.DataDiv}>
                        <div className={styles.detail}>
                        <Image src={phone} alt="bedroom" width={20} height={20} />
                            phone
                        </div>
                        <span style={{ marginLeft: '0.25rem' }}>{props.dealer_phone_number}</span>
                    </div>
                    </>
            }
            {props.activeProperty === 1 && (
                <div>
                    <input
                        type='text'
                        value={noOfItems}
                        onChange={(e) => {
                            const value = parseInt(e.target.value) || 1;
                            const prev = noOfItems;
                            props.setItemNo(value-prev);
                            setItems(value);
                            props.setPropertyId(props.id);
                        }} // Update no_of_items on input change
                        placeholder="No. of Items"
                    />
                </div>
            )}
            <div className={styles.btnsDiv}>
                {props.activeProperty === 0 && (
                    <button className={styles.btn2} onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                )}
                {props.activeProperty !== 2 && (
                    <button className={styles.btn1} onClick={openBookingModal}>
                        Book
                    </button>
                )}
                {props.activeProperty === 1 && (
                    <button className={styles.btn3} onClick={handleRemoveFromCart}>
                        Remove
                    </button>
                )}
                
                {props.activeProperty === 2 && props.no_of_items && (
                    <div>
                        <span>Items booked: {props.no_of_items}</span>
                    </div>
                )}
            </div>
            <BookingModal 
                isOpen={modalOpen} 
                onClose={() => setModalOpen(false)} 
                onConfirm={handleBookingConfirmation} 
            />
        </div>
    );
};

export default PropertyCard;
