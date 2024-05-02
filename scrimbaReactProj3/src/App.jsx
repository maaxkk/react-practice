import {useEffect, useState} from 'react'
import {shuffleData} from "./utils/shuffleData.js";
import data from "./utils/data.js";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Form} from "./components/Form.jsx";

function App() {
    const [questionsData, setQuestionsData] = useState(data)
    const [correctAnswersCounter, setCorrectAnswersCounter] = useState(0)
    const [currentRound, setCurrentRound] = useState(0)

    const correctAnswers = {
        [questionsData[0].question]: questionsData[0].correct_answer,
        [questionsData[1].question]: questionsData[1].correct_answer,
        [questionsData[2].question]: questionsData[2].correct_answer,
        [questionsData[3].question]: questionsData[3].correct_answer,
        [questionsData[4].question]: questionsData[4].correct_answer,
    }

    function increaseRound() {
        setCurrentRound(prevRound => prevRound + 1)
    }

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
            <Form questionsData={questionsData} correctAnswers={correctAnswers} handleCurrentRound={increaseRound}/>
        </div>
    )
}

export default App
