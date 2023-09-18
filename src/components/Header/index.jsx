import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "../../assets/logo.svg"
import NavBar from "./Navbar"
import NavBarDesk from './NavBarDesk';

export default function Header() {
    return (
        <header className="
            m-4 flex justify-between items-center
            md:p-10
            lg:px-32 lg:grid lg: grid-cols-5
            ">
            <div>
                <img src={logo} alt="Logotipo do Blogr" />
            </div>
            <div className='col-span-4'>
                <NavBar />
                <NavBarDesk />
            </div>
        </header>
    )
}