import ArrowDown from "../../assets/icon-arrow-light.svg"
import ArrowTop from "../../assets/icon-arrow-dark.svg"

import { useState } from "react"
import { Link } from "react-router-dom"

import TextCommon from "../Texts/TextCommon"
import Button from "../Buttons/Button"

export default function NavBarDesk() {

    const [openProduct, setOpenProduct] = useState(false)
    const [openCompany, setOpenCompany] = useState(false)
    const [openConnect, setOpenConnect] = useState(false)

    return (
        <div className="flex justify-between items-center relative max-[1023px]:hidden">
            <div className="flex justify-between gap-20">
                <div>
                    <button className="
                        flex gap-2 items-center text-white font-bold" onClick={() => {setOpenProduct(!openProduct)}}>
                        {openProduct ? (
                            <>
                                <TextCommon className="mb-1 border-4 border-b-white border-transparent" text="Product" />
                                <img className="pt-2" src={ArrowTop} alt="" />
                            </>
                        ) : (
                            <>
                                <TextCommon className="" text="Product" />
                                <img className="pt-2" src={ArrowDown} alt="" />
                            </>
                        )}
                    </button>
                    <div className={`${openProduct ? "absolute top-12" : "hidden"} bg-white px-8 py-4 rounded-xl flex flex-col gap-4`}>
                        <Link to="/" className="text-neutral-400 hover:text-[#1F3E5A] hover:font-bold transition-colors">Overview</Link>
                        <Link to="/" className="text-neutral-400 hover:text-[#1F3E5A] hover:font-bold transition-colors">Pricing</Link>
                        <Link to="/" className="text-neutral-400 hover:text-[#1F3E5A] hover:font-bold transition-colors">Marketplace</Link>
                        <Link to="/" className="text-neutral-400 hover:text-[#1F3E5A] hover:font-bold transition-colors">Features</Link>
                        <Link to="/" className="text-neutral-400 hover:text-[#1F3E5A] hover:font-bold transition-colors">Integrations</Link>
                    </div>
                </div>
                <div>
                    <button className="
                        flex gap-2 items-center text-white font-bold" onClick={() => {setOpenCompany(!openCompany)}}>
                        {openCompany ? (
                            <>
                                <TextCommon className="mb-1 border-4 border-b-white border-transparent" text="Company" />
                                <img className="pt-2" src={ArrowTop} alt="" />
                            </>
                        ) : (
                            <>
                                <TextCommon className="" text="Company" />
                                <img className="pt-2" src={ArrowDown} alt="" />
                            </>
                        )}
                    </button>
                    <div className={`${openCompany ? "absolute top-12" : "hidden"} bg-white px-8 py-4 rounded-xl flex flex-col gap-4`}>
                        <Link to="/" className="text-neutral-400 hover:text-[#1F3E5A] hover:font-bold transition-colors">About</Link>
                        <Link to="/" className="text-neutral-400 hover:text-[#1F3E5A] hover:font-bold transition-colors">Teams</Link>
                        <Link to="/" className="text-neutral-400 hover:text-[#1F3E5A] hover:font-bold transition-colors">Blog</Link>
                        <Link to="/" className="text-neutral-400 hover:text-[#1F3E5A] hover:font-bold transition-colors">Careers</Link>
                    </div>
                </div>
                <div>
                    <button className="
                        flex gap-2 items-center text-white font-bold" onClick={() => {setOpenConnect(!openConnect)}}>
                        {openConnect ? (
                            <>
                                <TextCommon className="mb-1 border-4 border-b-white border-transparent" text="Connect" />
                                <img className="pt-2" src={ArrowTop} alt="" />
                            </>
                        ) : (
                            <>
                                <TextCommon className="" text="Connect" />
                                <img className="pt-2" src={ArrowDown} alt="" />
                            </>
                        )}
                    </button>
                    <div className={`${openConnect ? "absolute top-12" : "hidden"} bg-white px-8 py-4 rounded-xl flex flex-col gap-4`}>
                        <Link to="/" className="text-neutral-400 hover:text-[#1F3E5A] hover:font-bold transition-colors">Contact</Link>
                        <Link to="/" className="text-neutral-400 hover:text-[#1F3E5A] hover:font-bold transition-colors">Newsletter</Link>
                        <Link to="/" className="text-neutral-400 hover:text-[#1F3E5A] hover:font-bold transition-colors">LinkedIn</Link>
                    </div>
                </div>
            </div>
            <div className="flex gap-5">
                <Button className="
                    px-4 py-2 rounded-full bg-gradient-to-r from-[#FF8F71] to-[#FF3E55] text-slate-50 text-lg font-bold
                    hover:text-yellow-300 transition-colors
                    " content="Login" />
                <Button className="
                    px-4 py-2 rounded-full bg-slate-50 text-[#FF3E55] text-lg font-bold
                    hover:bg-[#FF7B86] hover:text-slate-50 transition-colors
                    " content="Sign UP" />
            </div>
        </div>
    )
}