import '../styles/Header.css'

function Header() {
    return (
        <header className={'header'}>
            <img className={'header--image'} src="../../public/images/troll_face.png" alt="Image of Troll face"/>
            <h1 className={'header--title'}>Meme Generator</h1>
            <h4 className={'header--course'}>React Course - Project 3</h4>
        </header>
    )
}

export {Header}