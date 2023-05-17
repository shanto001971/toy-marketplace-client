import Gallery from "../GallerySection/Gallery";
import ReactTabSection from "../ReactTab/ReactTabSection";
import Carousel from "./Carousel/Carousel";



const Home = () => {
    return (
        <div>
            <Carousel/>
            <Gallery/>
            <ReactTabSection/>
           <h1>this is home page</h1>

        </div>
    );
};

export default Home;