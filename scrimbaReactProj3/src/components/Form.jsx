import { Question } from "./Question.jsx";
import styles from '../styles/Form.module.css';
import { useState } from "react";
import { decode } from "html-entities";

function Form({shuffledArrays, handleCorrectAnswers, correctAnswers }) {
    const [userAnswers, setUserAnswers] = useState({});

    console.log('Form render')
    function handleUserAnswer(event, question) {
        setUserAnswers(prevState => ({
            ...prevState,
            [question]: event.target.value
        }));
    }

    let radioAnswers = shuffledArrays.map((questionArray, index) => {
        return (
            <Question
                key={index}
                questionArray={questionArray}
                handleChange={handleUserAnswer}
            />
        );
    });

    function handleSubmit(event) {
        event.preventDefault();
        let correctAns = 0
        for (let question in correctAnswers) {
            if (correctAnswers[question] === userAnswers[question]){
                correctAns++;
            }
        }
        console.log(userAnswers)
        console.log(correctAnswers)
        console.log(`You did ${correctAns}/5 !!`)
    }

    return (
        <form onSubmit={handleSubmit}>
            {radioAnswers}
            <button className={styles.submitBtn}>Check answers</button>
        </form>
    );
}

export { Form };