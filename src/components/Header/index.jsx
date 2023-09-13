import 'bootstrap/dist/css/bootstrap.min.css';

import logo from "../../assets/logo.svg"
import NavBar from "./Navbar"

export default function Header() {
    return (
        <header className="
            m-4 flex justify-between items-center
            md:p-10">
            <div>
                <img src={logo} alt="Logotipo do Blogr" />
            </div>
            <NavBar />
        </header>
    )
}