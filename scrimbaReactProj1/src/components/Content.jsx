import styles from '../styles/Content.module.css'
function Content() {
    return (
        <section className={'content'}>
            <h2 className={styles.aboutTitle}>About</h2>
            <p className={styles.aboutText}>I am a frontend developer with a particular interest in making things simple and automating daily tasks.
                I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h2 className={styles.interestsTitle}>Interests</h2>
            <p className={styles.interests}>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture
                ninja. Coffee fanatic.</p>
        </section>
    )
}

export {Content}