import '../styles/Meme.css'
import memes from '../utils/memesData.js'
import {useState} from "react";

function Meme() {
    const [memeImage, setMemeImage] = useState('http://i.imgflip.com/1bij.jpg')
    function handleClick() {
        const memesArray = memes.data.memes
        const randomId = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomId].url)
    }
    return (
        <main>
            <div className={'form'}>
                <div>
                    <label htmlFor={'top-text'} className={'form--label'}>Top Text</label>
                    <input id={'top-text'} className={'form--input'} type="text" placeholder={'Shut up'}/>
                </div>
                <div>
                    <label htmlFor={'bottom-text'} className={'form--label'}>Bottom Text</label>
                    <input id={'bottom-text'} className={'form--input'} type="text" placeholder={'And take my money'}/>
                </div>
                <button onClick={handleClick} className={'form--button'}>Get a new meme image 🖼</button>
            </div>
            <img className={'main--meme-img'} src={memeImage} alt="Image of meme"/>
        </main>
    )
}

export {Meme}