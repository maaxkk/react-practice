import {useEffect, useState} from 'react'
import {shuffleData} from "./utils/shuffleData.js";
import data from "./utils/data.js";
import './App.css'
import {Form} from "./components/Form.jsx";
import {decode} from "html-entities";

function App() {
    const [questionsData, setQuestionsData] = useState(data)
    const [correctAnswersCounter, setCorrectAnswersCounter] = useState(0)

    const correctAnswers = {
        [decode(questionsData[0].question)]: questionsData[0].correct_answer,
        [decode(questionsData[1].question)]: questionsData[1].correct_answer,
        [decode(questionsData[2].question)]: questionsData[2].correct_answer,
        [decode(questionsData[3].question)]: questionsData[3].correct_answer,
        [decode(questionsData[4].question)]: questionsData[4].correct_answer,
    }

    const shuffledArrays = questionsData.map(question => {
        return shuffleData(question)
    })

    function handleCorrectAnswers(num) {
        setCorrectAnswersCounter(num)
    }

    console.log('App render')

    // useEffect(() => {
    //     let ignore = false;
    //     if (!ignore) { // cancel fetching if component was unmounted
    //         fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
    //             .then(response => response.json())
    //             .then(data => {
    //                 setQuestionsData(prevQuestionData => [...data.results])
    //                 const newHashSet = new Set()
    //                 data.results.map((questionObj, index) => {
    //                     newHashSet.add([questionObj.correct_answer])
    //                 })
    //                 setCorrectAnswers(prevHashSet => newHashSet)
    //                 console.log(correctAnswers)
    //             })
    //     }
    //     return () => {
    //         ignore = true
    //     }
    // }, [])


    return (
        <div className={'container'}>
            <Form shuffledArrays={shuffledArrays}
                  handleCorrectAnswers={handleCorrectAnswers}
                  correctAnswers={correctAnswers}
            />
        </div>
    )
}

export default App
