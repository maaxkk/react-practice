import starImg from '../../public/images/star.png'

import '../styles/Card.css'
function Card(props) {
    let badgeText;
    if (props.item.openSpots === 0){
        badgeText = 'SOLD OUT'
    } else if (props.item.location === 'Online') {
        badgeText = 'ONLINE'
    }
    return (
        <div className={'card'}>
            {(props.item.openSpots === 0 || props.item.location === 'Online') && <div className={'card--badge'}>{badgeText}</div>}
            <img className={'card--image'} src={`../../public/images/${props.item.coverImg}`} alt="Image of Katie Zaferes"/>
            <div className="card--stats">
                <img className={'card--star'} src={starImg} alt="Star image"/>
                <span>{props.item.stats.rating}</span>
                <span className={'card--gray'}>({props.item.stats.reviewCount}) • </span>
                <span className={'card--gray'}>{props.item.location}</span>
            </div>
            <h2 className={'card--description'}>{props.item.title}</h2>
            <p className={'card--price'}> <span className={'card--bold'}>${props.item.price}</span> / person</p>
        </div>
    )
}

export {Card}