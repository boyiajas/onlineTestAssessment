import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

export default function GuestLayout({ children }) {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                {children}
            </div>
            <div>
                <Footer/>
            </div>
        </>
            
    )
}