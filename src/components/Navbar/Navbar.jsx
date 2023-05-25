import {NavLink} from 'react-router-dom';
const Navbar = () => {
    const styleActive = "underline underline-offset-4"
    return (
        <nav className="flex justify-between top-0 items-center fixed z-10 w-full py-5 px-8 text-sm font-light bg-red-100">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/" className={({isActive}) => isActive ? styleActive : undefined}>
                        Shopi
                    </NavLink>
                </li>
                <li>All</li>
                <li>Clothes</li>
                <li>Electronics</li>
                <li>Furtine</li>
                <li>Toys</li>
                <li>Others</li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">andre@gmail.com</li>
                <li>
                    <NavLink to="/my-orders" className={({isActive}) => isActive ? styleActive : undefined}>
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account" className={({isActive}) => isActive ? styleActive : undefined}>
                        My Account
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;