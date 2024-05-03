import {useEffect, useState} from 'react'
import {shuffleData} from "./utils/shuffleData.js";
import './App.css'
import {Form} from "./components/Form.jsx";
import {decode} from "html-entities";
import {StartScreen} from "./components/StartScreen.jsx";

// import data from "./utils/data.js";

function App() {
    const [questionsData, setQuestionsData] = useState([])
    const [currentRound, setCurrentRound] = useState(0)
    const [showStartScreen, setShowStartScreen] = useState(true)
    const [error, setError] = useState('')

    let correctAnswers = {}

    if (questionsData.length > 0) {
        correctAnswers = {
            [decode(questionsData[0].question)]: decode(questionsData[0].correct_answer),
            [decode(questionsData[1].question)]: decode(questionsData[1].correct_answer),
            [decode(questionsData[2].question)]: decode(questionsData[2].correct_answer),
            [decode(questionsData[3].question)]: decode(questionsData[3].correct_answer),
            [decode(questionsData[4].question)]: decode(questionsData[4].correct_answer),
        }
    }

    const shuffledArrays = questionsData.map(question => {
        return shuffleData(question)
    })

    console.log('App render')

    useEffect(() => {
        let ignore = false;
        fetch('https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple')
            .then(response => {
                if (response.status === 429 && currentRound === 0) {
                    setError(`Status 429 too many requests, please try again later`)
                    throw new Error(`Status 429 too many requests`)
                }
                return response.json()
            })
            .then(data => {
                if (!ignore && data.results) { // cancel fetching if component was unmounted
                    setQuestionsData(prevQuestionData => [...data.results])
                    setError('')
                }
            })
        return () => {
            ignore = true
        }
    }, [currentRound])


    function startNewRound() {
        setCurrentRound(prevRound => prevRound + 1)
    }

    function hideStartScreen() {
        setShowStartScreen(false)
    }

    return (
        <div className={'container'}>
            {showStartScreen === true &&
                <StartScreen startNewRound={startNewRound}
                             hideStartScreen={hideStartScreen}/>
            }
            {showStartScreen === false &&
                <>
                    {<h2 className={'errorMsg'}>{error}</h2>}
                    <Form shuffledArrays={shuffledArrays}
                          correctAnswers={correctAnswers}
                          startNewRound={startNewRound}
                    />
                </>
            }
        </div>
    )
}

export default App
