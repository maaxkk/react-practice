import {getImageUrl, getImageUrl2} from "../../utils/getImage.jsx";

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
                    <b>{'Awards: ' + awardsCount + ' '}</b>
                    ({awards.join(', ')})
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
            <Profile name={'Katsuko Saruhashi'} profession={'geochemist'} awardsCount={2} awards={[
                'Miyake Prize for geochemistry',
                'Tanaka Prize'
            ]}
                     discovered={'a method for measuring carbon dioxide in seawater'} src={'YfeOqp2'}/>
            <section className='profile'></section>
            <Profile name={'Maria Skłodowska-Curie'} profession={'physicist and chemist'} awardsCount={4} awards={[
                'Nobel Prize in Physics',
                'Nobel Prize in Chemistry',
                'Davy Medal, Matteucci Medal',
            ]}
                     discovered={'polonium (chemical element)'} src={'szV5sdG'}/>

        </div>
    )
}

// showing sharper image for high DPI screens
const ratio = window.devicePixelRatio;

function AvatarCh3({person, size}) {
    let ch = size * ratio > 90 ? 'b' : 's'
    return (
        <img
            className='avatar'
            src={getImageUrl2(person.imageId, ch)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}

function ProfileCh3() {
    return (
        <>
            <h2>Your ratio is {ratio}</h2>
            <h2>Your screen height is {window.screen.availHeight}</h2>
            <h2>Your screen width is {window.screen.availWidth}</h2>
            <AvatarCh3
                size={40}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />
            <AvatarCh3
                size={120}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />
        </>
    )
}

function CardCh3({person, size}) {
    return (
        <div>
            <div className='card'>
                <div className='card-content'>
                    <h1>Photo</h1>
                    <img
                        src={person.imageId}
                        alt={person.name}
                        width={size}
                        height={size}
                    />
                </div>
            </div>
            <div className='card'>
                <div className='card-content'>
                    <h1>About</h1>
                    <p>{person.bio}</p>
                </div>
            </div>
        </div>
    )
}

function Profile2Ch3() {
    return (
        <>
            <CardCh3 person={
                {
                    name: 'Aklilu Lemma',
                    imageId: "https://i.imgur.com/OKS67lhm.jpg",
                    bio: 'Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.'
                }
            } size={70}
            />
            <CardCh3 person={
                {
                    name: 'Aklilu Lemma',
                    imageId: "https://i.imgur.com/OKS67lhm.jpg",
                    bio: 'Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.'
                }
            } size={140}
            />
        </>

    )
}

export {Gallery, ProfileCh3, Profile2Ch3}