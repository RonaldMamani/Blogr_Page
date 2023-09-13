import { Link } from "react-router-dom";
import TextCommon from "../Texts/TextCommon";
import logo from "../../assets/logo.svg"

export default function Footer() {
    return (
        <footer className="bg-[#24242c] rounded-tr-large">
            <div className="
                flex flex-col gap-10 py-28
                md:px-10 md:grid md:grid-cols-4
                ">
                <img className="w-32 max-[767px]:m-auto" src={logo} alt="Logotipo Blogr" />
                <div className="flex flex-col gap-2 text-center">
                    <TextCommon className="text-white text-lg" text="Product" />
                    <div className="flex flex-col gap-2 my-2">
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Overview</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Pricing</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Marketplace</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Features</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Integrations</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-3 text-center">
                    <TextCommon className="text-white text-lg" text="Company" />
                    <div className="flex flex-col gap-2 my-2">
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">About</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Teams</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Blog</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Careers</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-3 text-center">
                    <TextCommon className="text-white text-lg" text="Conect" />
                    <div className="flex flex-col gap-2">
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Contact</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Newsletter</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}