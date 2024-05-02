import styles from '../styles/Question.module.css'
import {Fragment, useState} from "react";

function Question({questionArray, handleChange}) {
    const question = questionArray[0];
    const onlyAnswers = questionArray.slice(1, 5)

    console.log('Question render')
    const allAnswers = onlyAnswers.map((answer, index) => {
        return (
            <Fragment key={index}>
                <input
                    id={answer}
                    name={question}
                    type={'radio'}
                    value={answer}
                    onChange={(e) => handleChange(e, question)}
                />
                <label className={`${styles.radio}`}
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