import styles from '../styles/StartScreen.module.css'
function StartScreen({startNewRound, hideStartScreen}) {
    function handleClick() {
        startNewRound()
        hideStartScreen()
    }
    return (
        <div className={styles.startScreen}>
            <h1>Quizzical</h1>
            <p className={styles.description}>Some description if needed</p>
            <button onClick={handleClick} className={styles.startBtn}>Start quiz</button>
        </div>
    )
}

export {StartScreen}