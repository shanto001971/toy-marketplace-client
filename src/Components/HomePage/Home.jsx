import Carousel from "./Carousel/Carousel";
import GalleryMarque from "../GallerySection/GalleryMarque";
import Banner from "../Banner/Banner";
import ReactTabSection from "../ReactTab/ReactTabSection";
import NumberThreeBanner from "../Banner/NumberThreeBanner";
import { useContext } from "react";
import { AuthContex } from "../../AuthProvider/AuthProvider";
import { useEffect } from 'react';
// import 'aos/dist/aos.css';
// import Aos from 'aos';





const Home = () => {
    const { loding } = useContext(AuthContex)

    useEffect(() => {
        document.title = 'ToyStore | Home';
    }, []);

    {
        if (loding) {
            return <progress className="progress w-56"></progress>
        }
    }

    // useEffect(() => {
    //     Aos.init({
    //       offset: 200,
    //       duration: 1000,
    //     });
    //   }, [])


    return (
        <div>

            <Carousel />
            <div className="text-center mt-10 font-serif">
                <div className="border p-10">
                    <h1 className="text-4xl">Choice Your Favorite Toys</h1>
                    <p className="font-thin text-2xl">Essay On My Favourite Toy For Class 1, 2 & 3 Kids</p>
                </div>
                <div>
                    <GalleryMarque />
                </div>
            </div>
            <ReactTabSection />
            <Banner />
            <NumberThreeBanner />
        </div>
    );
};

export default Home;