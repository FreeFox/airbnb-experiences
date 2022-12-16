import './Header.css';
import image from './images/logo.png';

function Header() {
    return (
    <>
        <header className="header">
            <img src={image} alt='logo' />
        </header>
    </>
    );
}

export default Header;
