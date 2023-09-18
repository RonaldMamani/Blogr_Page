import Phone from "../../assets/illustration-phones.svg"
import TextMedium from "../ConjuntText/TextMedium";

export default function MobileFeatures() {
    return (
        <section className="
            bg-[#2D2E40] rounded-tr-large rounded-bl-large relative max-[768px]:mt-60 pb-28 grid grid-rows-2 items-center text-center
            md:p-28 lg:grid-rows-1 lg:grid-cols-2
            lg:px-32
            ">
            <div className="absolute max-[768px]:-top-44 sm:left-24 lg:-top-16">
                <img className="" src={Phone} alt="" />
            </div>
            <div></div>
            <div className="flex flex-col gap-4 lg:text-start px-8">
                <TextMedium 
                    title="State of the Art Infrastructure"
                    descrition="With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."
                />
            </div>
        </section>
    )
}