import { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11 } from "@/assets";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];

const n = images.length;

const shuffleArray = ():number[]=> {
    const array :number[] =[]; 
  for (let i = 0 ; i < 25; i++) {
    const j = Math.floor(Math.random() * n);
    array.push(j);
  }
  return array;
};


// Shuffle and repeat images for 25 properties

const numArray = shuffleArray();


const propertyData = [
  {
      id: 1,
      rent_price: 15000,
      location: "Mumbai, Maharashtra",
      no_of_bedrooms: 4,
      photo: images[numArray[0]],
      no_of_amenities: 5,
      dealer_name: "Aman Singh",
      dealer_phone_number: "9876543210",
      no_of_items: 1 // Number of items for this property
  },
  {
      id: 2,
      rent_price: 18000,
      location: "Bangalore, Karnataka",
      no_of_bedrooms: 5,
      photo: images[numArray[1]],
      no_of_amenities: 6,
      dealer_name: "Rajesh Kumar",
      dealer_phone_number: "9823456789",
      no_of_items: 1
  },
  {
      id: 3,
      rent_price: 22000,
      location: "Delhi, Delhi",
      no_of_bedrooms: 4,
      photo: images[numArray[2]],
      no_of_amenities: 7,
      dealer_name: "Sonia Mehta",
      dealer_phone_number: "9898765432",
      no_of_items: 1
  },
  {
      id: 4,
      rent_price: 12000,
      location: "Pune, Maharashtra",
      no_of_bedrooms: 5,
      photo: images[numArray[3]],
      no_of_amenities: 4,
      dealer_name: "Karan Verma",
      dealer_phone_number: "9812345678",
      no_of_items: 1
  },
  {
      id: 5,
      rent_price: 25000,
      location: "Hyderabad, Telangana",
      no_of_bedrooms: 4,
      photo: images[numArray[4]],
      no_of_amenities: 6,
      dealer_name: "Anjali Rao",
      dealer_phone_number: "9845678901",
      no_of_items: 1
  },
  {
      id: 6,
      rent_price: 13000,
      location: "Chennai, Tamil Nadu",
      no_of_bedrooms: 5,
      photo: images[numArray[5]],
      no_of_amenities: 5,
      dealer_name: "Vinod Nair",
      dealer_phone_number: "9876543211",
      no_of_items: 1
  },
  {
      id: 7,
      rent_price: 17000,
      location: "Jaipur, Rajasthan",
      no_of_bedrooms: 4,
      photo: images[numArray[6]],
      no_of_amenities: 6,
      dealer_name: "Ravi Sharma",
      dealer_phone_number: "9876543212",
      no_of_items: 1
  },
  {
      id: 8,
      rent_price: 26000,
      location: "Kolkata, West Bengal",
      no_of_bedrooms: 5,
      photo: images[numArray[7]],
      no_of_amenities: 8,
      dealer_name: "Sneha Gupta",
      dealer_phone_number: "9834567890",
      no_of_items: 1
  },
  {
      id: 9,
      rent_price: 16000,
      location: "Ahmedabad, Gujarat",
      no_of_bedrooms: 4,
      photo: images[numArray[8]],
      no_of_amenities: 5,
      dealer_name: "Arjun Patel",
      dealer_phone_number: "9876543213",
      no_of_items: 1
  },
  {
      id: 10,
      rent_price: 30000,
      location: "Surat, Gujarat",
      no_of_bedrooms: 5,
      photo: images[numArray[9]],
      no_of_amenities: 7,
      dealer_name: "Dinesh Bhatt",
      dealer_phone_number: "9823456781",
      no_of_items: 1
  },
  {
      id: 11,
      rent_price: 14000,
      location: "Lucknow, Uttar Pradesh",
      no_of_bedrooms: 4,
      photo: images[numArray[10]],
      no_of_amenities: 6,
      dealer_name: "Rekha Tiwari",
      dealer_phone_number: "9876543214",
      no_of_items: 1
  },
  {
      id: 12,
      rent_price: 22000,
      location: "Indore, Madhya Pradesh",
      no_of_bedrooms: 5,
      photo: images[numArray[11]],
      no_of_amenities: 7,
      dealer_name: "Prakash Joshi",
      dealer_phone_number: "9812345679",
      no_of_items: 1
  },
  {
      id: 13,
      rent_price: 17000,
      location: "Patna, Bihar",
      no_of_bedrooms: 4,
      photo: images[numArray[12]],
      no_of_amenities: 6,
      dealer_name: "Manish Kumar",
      dealer_phone_number: "9876543215",
      no_of_items: 1
  },
  {
      id: 14,
      rent_price: 26000,
      location: "Bhopal, Madhya Pradesh",
      no_of_bedrooms: 5,
      photo: images[numArray[13]],
      no_of_amenities: 8,
      dealer_name: "Pooja Singh",
      dealer_phone_number: "9834567891",
      no_of_items: 1
  },
  {
      id: 15,
      rent_price: 19000,
      location: "Vadodara, Gujarat",
      no_of_bedrooms: 4,
      photo: images[numArray[14]],
      no_of_amenities: 6,
      dealer_name: "Hiren Desai",
      dealer_phone_number: "9823456782",
      no_of_items: 1
  },
  {
      id: 16,
      rent_price: 17000,
      location: "Nagpur, Maharashtra",
      no_of_bedrooms: 5,
      photo: images[numArray[15]],
      no_of_amenities: 4,
      dealer_name: "Ashok Sinha",
      dealer_phone_number: "9876543216",
      no_of_items: 1
  },
  {
      id: 17,
      rent_price: 25000,
      location: "Visakhapatnam, Andhra Pradesh",
      no_of_bedrooms: 4,
      photo: images[numArray[16]],
      no_of_amenities: 7,
      dealer_name: "Mohan Reddy",
      dealer_phone_number: "9845678902",
      no_of_items: 1
  },
  {
      id: 18,
      rent_price: 21000,
      location: "Rajkot, Gujarat",
      no_of_bedrooms: 5,
      photo: images[numArray[17]],
      no_of_amenities: 8,
      dealer_name: "Nisha Patel",
      dealer_phone_number: "9876543217",
      no_of_items: 1
  },
  {
      id: 19,
      rent_price: 12000,
      location: "Thane, Maharashtra",
      no_of_bedrooms: 4,
      photo: images[numArray[18]],
      no_of_amenities: 5,
      dealer_name: "Ajay Bhosle",
      dealer_phone_number: "9812345680",
      no_of_items: 1
  },
  {
      id: 20,
      rent_price: 28000,
      location: "Agra, Uttar Pradesh",
      no_of_bedrooms: 5,
      photo: images[numArray[19]],
      no_of_amenities: 7,
      dealer_name: "Rohan Saxena",
      dealer_phone_number: "9876543218",
      no_of_items: 1
  },
  {
      id: 21,
      rent_price: 16000,
      location: "Coimbatore, Tamil Nadu",
      no_of_bedrooms: 4,
      photo: images[numArray[20]],
      no_of_amenities: 6,
      dealer_name: "Sridhar Iyer",
      dealer_phone_number: "9823456783",
      no_of_items: 1
  },
  {
      id: 22,
      rent_price: 27000,
      location: "Kochi, Kerala",
      no_of_bedrooms: 5,
      photo: images[numArray[21]],
      no_of_amenities: 7,
      dealer_name: "Nandini Nair",
      dealer_phone_number: "9845678903",
      no_of_items: 1
  },
  {
      id: 23,
      rent_price: 18000,
      location: "Varanasi, Uttar Pradesh",
      no_of_bedrooms: 4,
      photo: images[numArray[22]],
      no_of_amenities: 5,
      dealer_name: "Suresh Yadav",
      dealer_phone_number: "9876543219",
      no_of_items: 1
  },
  {
      id: 24,
      rent_price: 29000,
      location: "Mysore, Karnataka",
      no_of_bedrooms: 5,
      photo: images[numArray[23]],
      no_of_amenities: 6,
      dealer_name: "Pavan Shetty",
      dealer_phone_number: "9823456784",
      no_of_items: 1
  },
  {
      id: 25,
      rent_price: 20000,
      location: "Jodhpur, Rajasthan",
      no_of_bedrooms: 4,
      photo: images[numArray[24]],
      no_of_amenities: 5,
      dealer_name: "Nitin Jangir",
      dealer_phone_number: "9812345681",
      no_of_items: 1
  },
];



export default propertyData;
