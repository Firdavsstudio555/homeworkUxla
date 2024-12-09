import { Link } from "react-router-dom";
export const MainHead = () => {
    return (
        <div className="flex justify-between p-[5px 70px]">
            <Link to="/">
                <img src="Logo.png" alt="" />
            </Link>
            <h1>Home</h1>
            <div>
                <div className="flex">
                    <img src="Icon.svg" alt="Notification Icon" />
                    <h1>Notification</h1>
                </div>
                <div className="flex">
                    <img src="Bell.svg" alt="Cart Icon" />
                    <h1>Go to Cart</h1>
                </div>
                <div className="flex">
                    <img src="Account.svg" alt="Account Icon" />
                    <h1>Account</h1>
                </div>
            </div>
        </div>
    );
};