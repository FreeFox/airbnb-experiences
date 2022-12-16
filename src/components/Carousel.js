import Slide from './Slide';
import './Carousel.css';
import slidesData from '../data.js';

function Carousel () {
    return (
        <div className='carousel'>
            {
            slidesData.map(function (elemData, i) {
                return <Slide
                    item={elemData}
                    // img={elemData.img}
                    // rating={elemData.rating}
                    // ratingNum={elemData.ratingNum}
                    // title={elemData.title}
                    // price={elemData.price}
                    // location={elemData.location}
                    // openSpots={elemData.openSpots}
                    key={i}
                />;
            })
            }
        </div>
    );
}

export default Carousel;