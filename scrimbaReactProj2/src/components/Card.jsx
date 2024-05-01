
import styles from '../styles/Card.module.css'
import pathImage from '../images/icons/path.png'

function Card({title, location, googleMapsUrl, startDate, endDate, description, imageUrl}) {
    return (
        <section className={styles.card}>
            <img className={styles.locationImage} src={imageUrl} alt={`Image of ${title}`}/>
            <article className={styles.locationInfo}>
                <div className={styles.wrapper}>
                    <img className={styles.path} src={pathImage} alt="Icon path"/>
                    <p className={styles.locationTitle}>{location}</p>
                    <a href={googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{title}</h2>
                <p className={styles.date}>{startDate}{' - '}{endDate}</p>
                <p>{description}</p>
            </article>
        </section>
    )
}

export {Card}