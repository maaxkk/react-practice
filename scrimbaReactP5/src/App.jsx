import {useEffect, useState} from 'react'
import './styles/App.css'
import {Die} from "./components/Die.jsx";
import {nanoid} from "nanoid";
import Confetti from "react-confetti";

function App() {
    // lazy state initialization
    const [diceArray, setDiceArray] = useState( () => allNewDice());
    const [tenzies, setTenzies] = useState(false);

    useEffect(() =>{
        const allHeld = diceArray.every(die => die.isHeld)
        const firstValue = diceArray[0].value;
        const allSameValue = diceArray.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
        console.log('Dice changed')
    }, [diceArray])

    // let won = true
    // let tmp = 0
    // const dices = diceArray.map((die, index) => {
    //     if (die.isHeld === false) won = false
    //     if (index === 0) {
    //         tmp = die.value
    //     }
    //     else if (die.value !== tmp) won = false
    //     return die
    // })
    //
    // if (won) {
    //     console.log('You won')
    // }

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            let randInt = Math.floor(Math.random() * 6) + 1
            newDice.push(
                {value: randInt, isHeld: false, id: nanoid()}
            )
        }
        return newDice
    }

    function holdDice(id) {
        setDiceArray(prevDice => {
            return prevDice.map(die => {
                return die.id === id ? {...die, isHeld: !die.isHeld} : die
            })
        })
    }

    function generateDice() {
        setDiceArray(prevDice => prevDice.map(die => {
                if (die.isHeld) return die
                return generateNewDie()
            }))
        if (tenzies) {
            setDiceArray(prevDice => allNewDice())
            setTenzies(false)
        }
    }

    function generateNewDie() {
        return {
            value: Math.floor(Math.random() * 6) + 1,
            isHeld: false,
            id: nanoid(),
        }
    }

    const diceElements = diceArray.map(die => {
        return <Die key={die.id} value={die.value} held={die.isHeld} holdDice={() => holdDice(die.id)}/>
    })

    return (
        <main>
            {tenzies && <Confetti/>}
            <h1 className={'app--title'}>Tenzies</h1>
            <p className={'app--instructions'}>Roll until add dice are the same. Click each dice to freeze it
            at its current value between rolls.</p>
            <div className="app--dice">
                {diceElements}
            </div>
            <button onClick={generateDice} className={'app--roll'}>{tenzies ? 'New Game' : 'Roll'}</button>
        </main>
    )
}

export default App
