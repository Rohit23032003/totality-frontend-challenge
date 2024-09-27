'use client';
import styles from './landing.module.scss';
import NavBar from '@/Components/navBar/navBar';
import SideBar from '@/Components/sideBar/sideBar';
import { useEffect, useState } from 'react';
import PropertyCard from '@/Components/propertCards/propertyCard';
import { useRouter } from 'next/navigation';
import propertyData from '../../lib/localData';
import { StaticImageData } from 'next/image';

interface propertyDetail{
    id: number,
    rent_price: number,
    location: string
    no_of_bedrooms: number,
    photo: string|StaticImageData,
    no_of_amenities: number,
    dealer_name: string,
    dealer_phone_number: string,
    no_of_items:number,
}


const LandingPage = () => {
    const route = useRouter();

    // State to hold user details
    const [userDetails, setUserDetails] = useState<{ username: string; email: string }>({
        username: "",
        email: ""
    });

    // States for filtering criteria
    const [searchQuery, setSearchQuery] = useState<string>(""); 
    const [price, setPrice] = useState<number | string>("");
    const [bedrooms, setBedrooms] = useState<number | string>("");
    const [activeProperty , setActiveProperty] = useState<number>(0);
    const [removeId , setRemoveID] = useState<number|undefined>();
    const [filteredProperties, setFilteredProperties] = useState<propertyDetail[]|undefined>(propertyData);
    const [totalCost , setTotalCost] = useState<number>(0);
    const [propertyId , setPropertyId] = useState<number>(0);
    const [itemNo , setItemNo] = useState<number|null>(null);

    const calculateTotalCost = (properties: propertyDetail[]) => {
        const total = properties.reduce((acc, property) => {
            return acc + (property.rent_price * (property.no_of_items || 1));
        }, 0);
        setTotalCost(total);
    };

    useEffect(()=>{
        if(itemNo && itemNo>0){
            const cost = propertyData[propertyId-1].rent_price*(itemNo);
            setTotalCost((prev)=> prev+cost);
        }
        else if(itemNo){
            const cost = propertyData[propertyId-1].rent_price*(itemNo);
            setTotalCost((prev)=>prev+cost);
        }
    },[itemNo])


    useEffect(()=>{
        if(activeProperty == 0){
            setFilteredProperties(propertyData);
        }
        else if(activeProperty == 1){
                const cartData = localStorage.getItem("cartList"); 
                if(cartData) {
                    setFilteredProperties(JSON.parse(cartData));
                    calculateTotalCost(JSON.parse(cartData));
                }
                else{
                    setFilteredProperties([]);
                }
        }
        else if(activeProperty == 2){
                const bookedData = localStorage.getItem('bookedList');
                if(bookedData) setFilteredProperties(JSON.parse(bookedData));
                else{
                    setFilteredProperties([]);
                }
        }
    },[activeProperty]);
    
    useEffect(()=>{
        if(removeId){
            const newCartList = filteredProperties?.filter((item)=>item.id !== removeId);
            localStorage.setItem('cartList', JSON.stringify(newCartList));
            setFilteredProperties(newCartList);
            if(newCartList && newCartList?.length>0) calculateTotalCost(newCartList);
            else setTotalCost(0);
        }
    },[removeId]) ;


    useEffect(() => {
        // Retrieve user details from session storage
        const storedUserDetails = localStorage.getItem('userDetails');
        if (storedUserDetails) {
            setUserDetails(JSON.parse(storedUserDetails));
        } else {
            route.push('/');
        }
    });

    const handleApplyFilter = () => {
        const filtered = propertyData.filter(property => {
            const matchesLocation = property.location.toLowerCase().includes(searchQuery.trim().toLowerCase());
            const matchesPrice = price === "" || property.rent_price <= Number(price);
            const matchesBedrooms = bedrooms === "" || property.no_of_bedrooms <= Number(bedrooms);

            return matchesLocation && matchesPrice && matchesBedrooms;
        });

        setFilteredProperties(filtered);
    };

    return (
        <div className={styles[`MainContainer`]}>
            <NavBar
                userName={userDetails.username}
                email={userDetails.email}
                onSearch={setSearchQuery}
            />
            <div className={styles[`Conatiner`]}>
                <SideBar activeBar ={setActiveProperty}/>
                <div className={styles[`propertyContainer`]}>
                    {
                        activeProperty === 0?(
                        <div className={styles[`filterSection`]}>
                            <input
                                type="text"
                                placeholder="Search Location"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Max Price"
                                value={price}
                                min="0"
                                onChange={(e) => setPrice(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Bedrooms"
                                value={bedrooms}
                                min="0"
                                onChange={(e) => setBedrooms(e.target.value)}
                            />
                            <button onClick={handleApplyFilter}>Apply</button>
                        </div>):(null)
                    }

                    <div className={styles[`propertyCardContainer`]}>
                        {filteredProperties && filteredProperties.length > 0 ? (
                            filteredProperties.map(property => (
                                <PropertyCard
                                    key={property.id}
                                    id={property.id}
                                    rent_price={property.rent_price}
                                    location={property.location}
                                    no_of_bedrooms={property.no_of_bedrooms}
                                    photo={property.photo}
                                    no_of_amenities={property.no_of_amenities}
                                    dealer_name={property.dealer_name}
                                    dealer_phone_number={property.dealer_phone_number}
                                    activeProperty = {activeProperty}
                                    setRemoveId = {setRemoveID}
                                    no_of_items={property.no_of_items}
                                    setItemNo={setItemNo}
                                    setPropertyId={setPropertyId}
                                />
                            ))
                        ) : (
                            <p>No properties found for your search.</p>
                        )}

                    </div>
                    {
                        activeProperty == 1&&
                            <div className={styles['ToatlConstDiv']}>
                                <div className={styles[`saperateLine`]}></div>
                                <div >
                                    <span>Total Cost : </span>
                                    <span>₹ {totalCost}</span>
                                </div>
                            </div>  
                    }
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
