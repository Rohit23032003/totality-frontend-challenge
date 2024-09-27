import styles from './navBar.module.scss';
import Image from 'next/image';
import { search_icon } from '@/assets';

interface userData {
    userName: string;
    email: string;
    onSearch: (query: string) => void; // Add onSearch prop to handle search input
}

const NavBar = ({ userName, onSearch }: userData): JSX.Element => {
    // Function to handle input change and trigger the search
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value); // Call the onSearch function passed from the parent
    };

    return (
        <div className={styles[`navBar`]}>
            <div className={styles[`searchBar`]}>
                <Image src={search_icon} alt={"search icon"} />
                <input
                    type="text"
                    placeholder="Search on Locations"
                    onChange={handleSearchChange} // Handle input changes
                />
            </div>
            <div className={styles[`userIcon`]}>
                {userName[0]}
            </div>
        </div>
    );
};

export default NavBar;
