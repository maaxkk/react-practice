import planetImg from '../images/icons/planet.svg'
import styles from '../styles/Header.module.css'
function Header() {
    return (
        <header className={styles.header}>
            <img src={planetImg} alt="Icon of planet"/>
            <h1>my travel journal.</h1>
        </header>
    )
}

export {Header}