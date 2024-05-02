import {shuffleData} from "../utils/shuffleData.js";
import {Question} from "./Question.jsx";
import styles from '../styles/Form.module.css'
import {useState} from "react";

function Form({questionsData, correctAnswers, handleCurrentRound}) {
    const [userAnswers, setUserAnswers] = useState({
        [questionsData[0][0]]: '',
        [questionsData[1][0]]: '',
        [questionsData[2][0]]: '',
        [questionsData[3][0]]: '',
        [questionsData[4][0]]: '',
    })

    function handleUserAnswer(event, question) {
        setUserAnswers(prevAnswers => {
            const nextAnswers = {...prevAnswers}
            nextAnswers[question] = event.target.value;
            return nextAnswers;
        })
    }

    function isCorrect(question, answer) {
        if (userAnswers[question] === correctAnswers[question]) {
            return true;
        }
        return false;
    }

    const radioAnswers = questionsData.map((questionObj, index) => {
        const currQuestion = shuffleData(questionObj);
        return <Question key={index} userAnswers={userAnswers}
                         handleUserAnswer={handleUserAnswer}
                         questionArray={currQuestion}
                         correctAnswers={correctAnswers}
                         isCorrect={isCorrect}
                         />
    })

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <button className={styles.submitBtn}>Check answers</button>
        </form>
    )
}

export {Form}