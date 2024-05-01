import twitter from '../images/icons/Twitter Icon.svg'
import facebook from '../images/icons/Facebook Icon.svg'
import instagram from '../images/icons/Instagram Icon.svg'
import github from '../images/icons/GitHub Icon.svg'

function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="logo of Twitter"/>
            </a>
            <a href="https://www.facebook.com/username" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="logo of Facebook"/>
            </a>
            <a href="https://www.instagram.com/username" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="logo of Instagram"/>
            </a>
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="logo of GitHub"/>
            </a>
        </footer>

    )
}

export {Footer}