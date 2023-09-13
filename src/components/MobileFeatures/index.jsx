import Phone from "../../assets/illustration-phones.svg"
import TextMedium from "../ConjuntText/TextMedium";

export default function MobileFeatures() {
    return (
        <section className="bg-[#2D2E40] rounded-tr-large rounded-bl-large relative mt-60 pt-60 pb-20 items-center">
            <div className="absolute -top-40">
                <img src={Phone} alt="" />
            </div>
            <div className="flex flex-col gap-4">
                <TextMedium 
                    title="State of the Art Infrastructure"
                    descrition="With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive."
                />
            </div>
        </section>
    )
}