import TextLittle from "../ConjuntText/TextsLittle";

export default function LaptopFeatures() {
    return (
        <section className="
            mx-5 my-16 grid grid-rows-2
            md:p-10
            lg:p-32 lg:grid-cols-2 lg:grid-rows-1
            ">
            <div className="
                bg-[url('./assets/illustration-laptop-mobile.svg')] bg-cover bg-center bg-no-repeat 
                lg:bg-[url('./assets/illustration-laptop-desktop.svg')]"></div>
            <div className="flex flex-col gap-7 text-center">
                <TextLittle
                    title="Free, open, simple" 
                    descrition="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn." 
                />
                <TextLittle
                    title="Powerful tooling" 
                    descrition="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites." 
                />
            </div>
        </section>
    )
}