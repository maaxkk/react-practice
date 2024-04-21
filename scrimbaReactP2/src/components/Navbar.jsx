import airbnbLogo from '../../public/images/airbnb-logo.png'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav>
            <img className={'main--logo'} src={airbnbLogo} alt="Airbnb Logo"/>
        </nav>
    )
}

export {Navbar}