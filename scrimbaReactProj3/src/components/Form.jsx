import {Question} from "./Question.jsx";
import styles from '../styles/Form.module.css';
import {useState} from "react";
import {decode} from "html-entities";

function Form({shuffledArrays, startNewRound, correctAnswers}) {
    const [userAnswers, setUserAnswers] = useState({});
    const [gameOver, setGameOver] = useState(false)

    let correctAns = 0
    for (let question in correctAnswers) {
        if (correctAnswers[question] === userAnswers[question]) {
            correctAns++;
        }
    }

    console.log('Form render')

    function handleUserAnswer(event, question) {
        if (!gameOver) {
            setUserAnswers(prevState => ({
                ...prevState,
                [question]: event.target.value
            }));
        }
    }

    let radioAnswers = shuffledArrays.map((questionArray, index) => {
        return (
            <Question
                key={index}
                questionArray={questionArray}
                handleChange={handleUserAnswer}
                gameOver={gameOver}
                correctAnswers={correctAnswers}
                userAnswers={userAnswers}
            />
        );
    });

    function handleSubmit(event) {
        event.preventDefault();
        setGameOver(true)
    }

    function handleNewRound() {
        setGameOver(false);
        startNewRound()
    }

    return (
        <form onSubmit={handleSubmit}>
            {radioAnswers}
            {!gameOver
                ? <div className={styles.gameOver}>
                    <button className={styles.submitBtn}>Check answers</button>
                </div>
                : <div className={styles.gameOver}>
                    <span className={styles.gameOverText}>You scored {correctAns}/5 correct answers</span>
                    <button onClick={handleNewRound} className={styles.submitBtn}>Play again</button>
                </div>

            }
        </form>
    );
}

export {Form};