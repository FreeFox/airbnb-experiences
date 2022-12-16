import "./Slide.css";

function Slide ({item : {img, rating, location, title, price, openSpots}}) {
    let badgeText = "";

    if (openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (location.toLowerCase() === "online") {
        badgeText = "ONLINE";
    }

    return (
        <div className="slide">
            <div className="image-container">
                <img src={require('./images/' + img)} alt="slide" />
                { badgeText &&
                    <div className="badge">
                        {badgeText}
                    </div>
                }
            </div>
            <div className="rating">
                <span className="rating-star">{rating.stars.toFixed(1)} </span>
                <span className="grey-text">
                    (<span className="rating-counter">{rating.count}</span>)
                    <span className="dot"></span>
                    <span className="country">{location}</span>
                </span>
            </div>
            <div className="item-name">{title}</div>
            <div className="item-price">
                <span className="value">From ${price} </span>
                / person
            </div>
        </div>
    )
}

export default Slide;