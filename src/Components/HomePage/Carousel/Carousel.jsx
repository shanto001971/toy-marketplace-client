

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full ">
                    <img src="https://i.pinimg.com/736x/7d/1e/2a/7d1e2aa18ea0624d18905e9655403f17--kids-cars-car-game.jpg" className="w-full rounded" />
                </div>
                <div id="item2" className="carousel-item w-full ">
                    <img src="https://mysterio.yahoo.com/mysterio/api/33A83688A22B7E5106BE4A752DABA4AB279B4D551EE375600FD683E0089E52C6/autoblog/resizefill_w660_h372;quality_80;format_webp;cc_31536000;/https://s.aolcdn.com/commerce/blogcdn/slideshows/images/slides/760/202/6/S7602026/slug/l/mclaren-720s-ride-on-1.jpg" className="w-full rounded" />
                </div>
                <div id="item3" className="carousel-item w-full ">
                    <img src="https://o.aolcdn.com/images/dims3/GLOB/crop/1643x925+337+296/resize/800x450!/format/jpg/quality/85/https://s.yimg.com/os/creatr-uploaded-images/2019-06/edfd0440-98e7-11e9-bfff-2013ffd33d28" className="w-full rounded" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://m.media-amazon.com/images/I/71sA3Rsd9qL._AC_SL1500_.jpg" className="w-full rounded" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Carousel;