import {getImageUrl2} from "../utils/getImage.jsx";

function Profile({name, size = 70, src, profession, awardsCount, awards, discovered}) {
    return (
        <div>
            <h2>{name}</h2>
            <img
                className='avatar'
                src={getImageUrl2(src)}
                alt={name}
                width={size}
                height={size}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {profession}
                </li>
                <li>
                    <b>{'Awards: ' + awards}</b>
                    {awards}
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovered}
                </li>
            </ul>
        </div>

    )
}

function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <section className='profile'></section>
            <Profile name={'Katsuko Saruhashi'} profession={'geochemist'} awardsCount={2} awards={'Miyake Prize for geochemistry, Tanaka Prize'}
             discovered={'a method for measuring carbon dioxide in seawater'} src={'YfeOqp2'}/>
            <section className='profile'></section>
            <Profile name={'Maria Skłodowska-Curie'} profession={'physicist and chemist'} awardsCount={4} awards={'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal'}
                     discovered={'polonium (chemical element)'} src={'szV5sdG'}/>

        </div>
    )
}

export {Gallery}