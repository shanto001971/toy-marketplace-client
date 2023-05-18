import Marquee from "react-fast-marquee";
import Gallery from "../GallerySection/Gallery";
import ReactTabSection from "../ReactTab/ReactTabSection";
import Carousel from "./Carousel/Carousel";
import GalleryMarque from "../GallerySection/GalleryMarque";



const Home = () => {
    return (
        <div>
            <Carousel/>
           <div className="text-center mt-5">
            <h1 className="text-3xl">Choice Your Favorite Toys</h1>
            <p>Essay On My Favourite Toy For Class 1, 2 & 3 Kids</p>
           <Marquee>
            <GalleryMarque/>
           </Marquee>
           </div>

        </div>
    );
};

export default Home;