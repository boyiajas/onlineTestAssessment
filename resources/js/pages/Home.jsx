import Hero from "../Components/Hero/Hero";
import HeroSub from "../Components/HeroSub/HeroSub";
import HowItWorks from "../Components/HowItWorks/HowItWorks";
import GuestLayout from "../Layouts/GuestLayout";

export default function Home(){
    return (
        <>
            <GuestLayout>
                <Hero />
                <HeroSub />
                <HowItWorks />
            </GuestLayout>
            
        </>
    )
}