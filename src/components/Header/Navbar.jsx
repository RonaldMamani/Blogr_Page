import Close from "../../assets/icon-close.svg"
import Barra from "../../assets/icon-hamburger.svg"
import ArrowDown from "../../assets/ArrowTop.svg"
import ArrowTop from "../../assets/ArrowDown.svg"

import { useState } from 'react';
import { Link } from "react-router-dom";

import TextCommon from "../Texts/TextCommon";
import Button from "../Buttons/Button";

export default function NavBar() {
    const [open, setOpen] = useState(false)
    const [openProduct, setOpenProduct] = useState(false)
    const [openCompany, setOpenCompany] = useState(false)
    const [openConnect, setOpenConnect] = useState(false)

    return (
        <div className="relative">
            <button onClick={() => {setOpen(!open)}}>
                {open ? (
                    <>
                        <img className="" src={Close} alt="" />
                    </>
                ) : (
                    <>
                        <img src={Barra} alt="" />
                    </>
                )}
            </button>

            <div className={`${open ? "absolute" : "hidden"} bg-white px-24 py-4 -left-72 top-10 flex flex-col items-center text-center gap-4 rounded-2xl`}>
                <div className="flex flex-col gap-2">
                    <button className="flex items-center gap-2" onClick={() => {setOpenProduct(!openProduct)}}>
                        {openProduct ? (
                            <>
                                <TextCommon className="text-lg text-[#1F3E5A] pl-2 font-semibold" text="Product" />
                            <img className="pt-2" src={ArrowTop} alt="" />
                            </>
                        ) : (
                            <>
                                <TextCommon className="text-lg text-[#1F3E5A] pl-2 font-semibold" text="Product" />
                                <img className="pt-2" src={ArrowDown} alt="" />
                            </>
                        )}
                    </button>
                    <div className={`${openProduct ? "" : "hidden"} text-center flex flex-col gap-2`}>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Overview</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Pricing</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Marketplace</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Features</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Integrations</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <button className="flex items-center gap-2" onClick={() => {setOpenCompany(!openCompany)}}>
                        {openCompany ? (
                            <>
                                <TextCommon className="text-lg text-[#1F3E5A] pl-2 font-semibold" text="Company" />
                                <img className="pt-2" src={ArrowTop} alt="" />
                            </>
                        ) : (
                            <>
                                    <TextCommon className="text-lg text-[#1F3E5A] pl-2 font-semibold" text="Company" />
                                    <img className="pt-2" src={ArrowDown} alt="" />
                            </>
                        )}
                    </button>
                    <div className={`${openCompany ? "" : "hidden"} text-center flex flex-col gap-2`}>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">About</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Teams</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Blog</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Careers</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <button className="flex items-center gap-2" onClick={() => {setOpenConnect(!openConnect)}}>
                    {openConnect ? (
                            <>
                                <TextCommon className="text-lg text-[#1F3E5A] pl-2 font-semibold" text="Connect" />
                                <img className="pt-2" src={ArrowTop} alt="" />
                            </>
                        ) : (
                            <>
                                    <TextCommon className="text-lg text-[#1F3E5A] pl-2 font-semibold" text="Connect" />
                                    <img className="pt-2" src={ArrowDown} alt="" />
                            </>
                        )}
                    </button>
                    <div className={`${openConnect ? "" : "hidden"} text-center flex flex-col gap-2`}>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Contact</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">Newsletter</Link>
                        <Link to="/" className="text-neutral-400 hover:text-white transition-colors">LinkedIn</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <Button className="px-4 py-3 rounded-full bg-white text-[#1F3E5A] border-2 border-[#FF505C] text-lg font-bold" content="Login" />
                    <Button className="px-4 py-3 rounded-full bg-gradient-to-r from-[#FF8F71] to-[#FF3E55] text-white text-lg font-bold" content="Sign Up" />
                </div>
            </div>
        </div>
    );
}