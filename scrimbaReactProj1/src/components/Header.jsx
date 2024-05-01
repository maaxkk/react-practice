import imgAboutMe from '../images/Rectangle 90.png'
import email from '../images/icons/Icon.svg'
import linkedin from '../images/icons/Vector.svg'
import styles from '../styles/Header.module.css'

function Header() {
    return (
        <header>
            <img className={styles.imageAboutMe} src={imgAboutMe} alt="Image about me"/>
            <div className={styles.wrapper}>
                <h1>Laura Smith</h1>
                <h2 className={styles.profession}>Frontend Developer</h2>
                <p className={styles.website}>laurasmith.website</p>
                <div className="contacts">
                    <button className={`${styles.emailBtn} btn`}>
                        <img src={email} alt={'Icon of email'}/>
                        <span className={'btn-text'}>Email</span>
                    </button>
                    <button className={`${styles.linkedinBtn} btn`}>
                        <img src={linkedin} alt={'Icon of linkedin'}/>
                        <span className={'btn-text'}>LinkedIn</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export {Header}