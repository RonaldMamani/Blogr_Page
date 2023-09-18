import TextLittle from "../ConjuntText/TextsLittle";
import Title from "../Texts/Title";

export default function Descrition() {
    return (
        <section className="
            mx-4 my-20 text-center flex flex-col gap-10
            md:p-10
            lg:p-32
            ">
            <Title className="text-[#1F3E5A] text-3xl font-bold" text="Designed for the future" />
            <div className="
                grid grid-rows-2 gap-5
                lg:grid-cols-2 lg:grid-rows-1
                ">
                <div className="
                    bg-[url('./assets/illustration-editor-mobile.svg')] bg-cover bg-center 
                    lg:bg-[url('./assets/illustration-editor-desktop.svg')] lg:order-2"></div>
                <div className="flex flex-col gap-7 lg:order-1 lg:pt-20">
                    <TextLittle 
                        title="Introducing an extensible editor"
                        descrition="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
                    />
                    <TextLittle 
                        title="Robust content management"
                        descrition="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
                    />
                </div>
            </div>
        </section>
    )
}