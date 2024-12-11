import { Link } from "react-router-dom";
import BellIcon from '../../assets/Bell.svg'
import AccountIcon from '../../assets/Account.svg'
import Icon from '../../assets/Icon.svg'


export const MainHead = () => {
    return (
        <div className="flex justify-between px-5 items-center">
            <Link to="/">
                <img src="Logo.png" alt="" />
            </Link>
            <h1>Home</h1>
            <div className="flex">
                <div className="flex items-center ml-[15px] ">
                    <img className="w-[30px]" src={Icon} alt="Notification Icon" />
                    <h1>Notification</h1>
                </div>
                <div className="flex items-center ml-[15px] ">
                    <img className="w-[30px]" src={BellIcon} alt="Cart Icon" />
                    <h1>Go to Cart</h1>
                </div>
                <div className="flex items-center ml-[15px] ">
                    <img className="w-[30px]" src={AccountIcon} alt="Account Icon" />
                    <h1>Account</h1>
                </div>
            </div>
        </div>
    );
};