import Button from "../Buttons/Button";
import Header from "../Header";
import TextCommon from "../Texts/TextCommon";
import Title from "../Texts/Title";

export default function Intro() {
    return (
        <section className="bg-gradient-to-r from-[#FF8F71] to-[#FF3E55] h-screen rounded-bl-large">
            <div className="bg-introMob bg-center h-screen rounded-bl-large">
                <div className=" flex flex-col gap-5 text-center ">
                    <Header />
                    <div className="
                        flex flex-col gap-14 mx-3
                        md:p-10
                        ">
                        <div className="flex flex-col gap-5">
                            <Title className="text-4xl text-white font-semibold mx-2" text="A modern publishing platform" />
                            <TextCommon className="text-white text-xl" text="Grow your audience and build your online brand" />
                        </div>
                        <div className="
                            flex gap-4
                            md:justify-center 
                            ">
                            <Button className="px-4 py-3 rounded-full bg-white text-[#FF505C] text-lg font-bold" content="Start for Free" />
                            <Button className="px-4 py-3 rounded-full border-white border-2 text-white text-lg font-bold" content="Learn More" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}