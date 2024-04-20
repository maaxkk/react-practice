import starImg from '../assets/star.png'
import imgKatie from '../assets/katie-zaferes.png'

import '../styles/Card.css'
function Card() {
    return (
        <div className={'card'}>
            <img className={'card--image'} src={imgKatie} alt="Image of Katie Zaferes"/>
            <div className="card--stats">
                <img className={'card--star'} src={starImg} alt="Star image"/>
                <span>5.0</span>
                <span className={'card--gray'}>(6) • </span>
                <span className={'card--gray'}>USA</span>
            </div>
            <h2 className={'card--description'}>Life lessons with Katie Zaferes</h2>
            <p className={'card--price'}> <span className={'card--bold'}> From $136  </span> / person</p>
            <p className={'card--soldout'}>sold out</p>

        </div>
    )
}

export {Card}