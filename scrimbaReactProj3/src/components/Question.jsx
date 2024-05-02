import styles from '../styles/Question.module.css'
import {Fragment, useState} from "react";

function Question({questionArray, correctAnswers, handleUserAnswer, isCorrect}) {

    function validationCheck(question, answer) {
        if (correctAnswers[question] === answer) {
            return true;
        }
        return false;
    }

    const allAnswers = questionArray.slice(1, 5).map((answer, index) => {
        return (
            <Fragment key={index}>
                <input
                    key={answer.id}
                    id={answer}
                    name={questionArray[0]}
                    type={'radio'}
                    value={answer}
                    onChange={(event) => handleUserAnswer(event, questionArray[0])}
                    />
                <label className={`${styles.radio} ${isCorrect(questionArray[0], answer) && styles.correct}`}
                       htmlFor={answer}>{answer}</label>
            </Fragment>
        )
    })
    return (
        <div>
            <p className={styles.question}>{questionArray[0]}</p>
            <div className={styles.answers}>{allAnswers}</div>
        </div>
    )
}

export {Question}