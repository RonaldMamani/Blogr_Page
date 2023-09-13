import Descrition from "../components/Descrition";
import Footer from "../components/Footer";
import Intro from "../components/Intro/indes";
import LaptopFeatures from "../components/LaptopFeatures";
import MobileFeatures from "../components/MobileFeatures";

export default function Home() {
    return (
        <>
            <Intro />
            <Descrition />
            <MobileFeatures />
            <LaptopFeatures />
            <Footer />
        </>
    )
}