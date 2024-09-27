import styles from './sideBar.module.scss';
import { cart, booked, houseIcon, logOut } from '@/assets/index';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SideBarProps {
    activeBar: (activeProperty: number) => void;
}

const SideBar = ({ activeBar }: SideBarProps): JSX.Element => {
    const router = useRouter();
    const handleLogout = () => {
        localStorage.clear();
        router.push('/');
    };

    return (
        <div className={styles[`SideBarContainer`]}>
            <div style={{ width: "100%" }}>
                <div className={styles[`sideBarOptions`]} onClick={() => activeBar(0)}>
                    <Image src={houseIcon} alt='rentals' />
                    <div className={styles[`option`]}>Rentals</div>
                </div>
                <div className={styles[`sideBarOptions`]} onClick={() => activeBar(1)}>
                    <Image src={cart} alt='cart' />
                    <div className={styles[`option`]}>Cart</div>
                </div>
                <div className={styles[`sideBarOptions`]} onClick={() => activeBar(2)}>
                    <Image src={booked} alt='booked' />
                    <div className={styles[`option`]}>Orders</div>
                </div>
            </div>
            <div className={styles[`logOutDiv`]} onClick={handleLogout}>
                <Image src={logOut} alt='logout' />
                <div className={styles[`option`]}>Logout</div>
            </div>
        </div>
    );
};

export default SideBar;

