import Button from "../Buttons/Button";
import Header from "../Header";
import TextCommon from "../Texts/TextCommon";
import Title from "../Texts/Title";

export default function Intro() {
    return (
        <section className="bg-gradient-to-r from-[#FF8F71] to-[#FF3E55] h-screen rounded-bl-large">
            <div className="
                bg-[url('./assets/bg-pattern-intro-mobile.svg')] bg-center h-screen rounded-bl-large 
                lg:bg-[url('./assets/bg-pattern-intro-desktop.svg')]">
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
                            flex gap-5 justify-center
                            ">
                            <Button className="
                                px-4 py-3 rounded-full bg-slate-50 text-[#FF505C] text-lg font-bold
                                hover:bg-[#FF7B86] hover:text-slate-50 transition-colors
                                " content="Start for Free" />
                            <Button className="
                                px-4 py-3 rounded-full text-slate-50 font-bold border-2
                                hover:bg-white hover:text-[#FF505C] transition-colors
                                " content="Learn More" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}