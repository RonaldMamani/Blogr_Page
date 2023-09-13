import TextLittle from "../ConjuntText/TextsLittle";

export default function LaptopFeatures() {
    return (
        <section className="
            mx-5 my-16 grid grid-rows-2
            md:p-10
            ">
            <div className="bg-iluLaptopMob bg-cover bg-center bg-no-repeat"></div>
            <div className="flex flex-col gap-7">
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