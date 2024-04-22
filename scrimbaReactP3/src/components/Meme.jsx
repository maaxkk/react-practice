import '../styles/Meme.css'
// import memes from '../utils/memesData.js'
import {useEffect, useState} from "react";

function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = useState([])

    useEffect(function() {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => setAllMemes(prevMemes => data))
    }, [allMemes])
    function getMemeImage() {
        const memesArray = allMemes.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className={'form'}>
                <div>
                    <label htmlFor={'top-text'} className={'form--label'}>Top Text</label>
                    <input id={'top-text'}
                           className={'form--input'}
                           type="text"
                           placeholder={'Shut up'}
                           name="topText"
                           value={meme.topText}
                           onChange={handleChange}
                    />

                </div>
                <div>
                    <label htmlFor={'bottom-text'} className={'form--label'}>Bottom Text</label>
                    <input id={'bottom-text'}
                           className={'form--input'}
                           type="text"
                           placeholder={'And take my money'}
                           name="bottomText"
                           value={meme.bottomText}
                           onChange={handleChange}
                    />
                </div>
                <button onClick={getMemeImage} className={'form--button'}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img className={'main--meme-img'} src={meme.randomImage} alt="Image of meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export {Meme}