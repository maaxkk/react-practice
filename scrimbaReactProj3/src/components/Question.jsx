import styles from '../styles/Question.module.css'
import {Fragment, useState} from "react";

function Question({questionArray, handleChange, gameOver, userAnswers, correctAnswers}) {
    const question = questionArray[0];
    const onlyAnswers = questionArray.slice(1, 5)

    function validateAnswer(question, answer) {
        if (gameOver)
            if (userAnswers[question] === correctAnswers[question]) {
                if (answer === correctAnswers[question]) {
                    return 2;
                }
            } else if (answer === correctAnswers[question]){
                return 1;
            }
        return 0;
    }


    console.log('Question render')

    const allAnswers = onlyAnswers.map((answer, index) => {
        const validationNum = validateAnswer(question, answer);
        return (
            <Fragment key={index}>
                <input
                    disabled={gameOver}
                    required={true}
                    id={answer}
                    name={question}
                    type={'radio'}
                    value={answer}
                    checked={answer === userAnswers[question]}
                    onChange= {(e) => handleChange(e, question)}
                />
                <label
                    className={`${styles.radio} ${validationNum === 2 ? styles.correct : validationNum === 1 ? styles.incorrect : ''}`}
                    htmlFor={answer}>{answer}</label>
            </Fragment>
        )
    })

    return (
        <div>
            <p className={styles.question}>{question}</p>
            <div className={styles.answers}>{allAnswers}</div>
        </div>
    )
}

export {Question}