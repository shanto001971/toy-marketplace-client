import Carousel from "./Carousel/Carousel";
import GalleryMarque from "../GallerySection/GalleryMarque";
import Banner from "../Banner/Banner";
import ReactTabSection from "../ReactTab/ReactTabSection";



const Home = () => {
    return (
        <div>
            <Carousel/>
           <div className="text-center mt-5">
            <h1 className="text-3xl">Choice Your Favorite Toys</h1>
            <p>Essay On My Favourite Toy For Class 1, 2 & 3 Kids</p>
           <div>
            <GalleryMarque/>
           </div>
           </div>
           <ReactTabSection/>
           <Banner/>

        </div>
    );
};

export default Home;