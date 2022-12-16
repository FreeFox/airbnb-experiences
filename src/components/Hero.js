import './Hero.css'
import hero from './images/hero.png';

function Hero() {
    return (
        <section className='hero'>
            <img src={hero} className='hero--image' alt='hero' />
            <div className='hero--text'>
                <h1>Online Experiences</h1>

                <p className='hero--promo-text'>
                    Join unique interactive activities led by one-of-a-kind hosts — all
                    without leaving home.
                </p>
            </div>
        </section>
    );
}

export default Hero;