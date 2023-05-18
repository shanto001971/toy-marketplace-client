

const Card = ({singleData}) => {
console.log(singleData)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={singleData?.Picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{singleData?.Name}</h2>
                <p>Price ${singleData?.Price}</p>
                <p>{singleData?.Rating}</p>
                <div className="card-actions w-full">
                    <button className="btn btn-primary w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;