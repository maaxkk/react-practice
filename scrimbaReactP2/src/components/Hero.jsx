import airbnbGrid from '../../public/images/photo-grid.png'
import '../styles/Hero.css'

function Hero() {
    return (
        <section className={'hero'}>
            <img className={'hero--grid'} src={airbnbGrid} alt='Aibnb photo grid'/>
            <h1 className={'hero--title'}>Online Experiences</h1>
            <p className={'hero--description'}>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home</p>
        </section>
    )
}

export {Hero}