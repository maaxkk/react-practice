// props destructuring
// function Button(props) {
//     const buttonStyle = {
//         color: props.color,
//         fontSize: props.fontSize + 'px',
//     };
//     return (
//         <button style={buttonStyle}>{props.text}</button>
//     );
// }

// creating new component for each case is not good, that's why props exist
// function Button2() {
//     return (
//         <button>Don't click me!</button>
//     )
// }


// Button.defaultProps = { // DRY
//     text: 'Click Me!',
//     color: 'blue',
//     fontSize: 12
// };

// Combining default props and destructuring
// function Button({text = 'Click me', color='blue', fontSize= 12}) {
//     const buttonStyle = {
//         color: color,
//         fontSize: fontSize + 'px',
//     };
//     return (
//         <button style={buttonStyle}>{text}</button>
//     );
// }

// Functions as Props
import {getImageUrl} from "../../utils/getImage.jsx";

function Button({text = 'Click me', color = 'blue', fontSize = 12, handleClick}) { // handler for function
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px',
    };
    return (
        <button onClick={() => handleClick('https://www.theodinproject.com')} style={buttonStyle}>{text}</button>
    );
}

function App2() {
    const handleButtonClick = (url) => {
        window.location.href = url;
    };
    return (
        <div>
            {/*<Button text ='Click me' color='blue' fontSize={12}/>*/}
            {/*<Button text="Don't click me" color='red' fontSize={12}/>*/}
            {/*<Button text='Click me' color='blue' fontSize={20}/>*/}

            {/*Default props:*/}
            <Button handleClick={handleButtonClick}/>
            <Button text="Don't click me!" color='red'/>
            <Button fontSize={20}/>
        </div>
    );
}

function Avatar2(props) {
    let person = props.person
    let size = props.size
    return (
        // before props

        // <img
        //     className='avatar'
        //     src='https://i.imgur.com/1bX5QH6.jpg'
        //     alt='Lin lanying'
        //     width={100}
        //     height={100}
        // />

        //after
        <img
            className='avatar'
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}

function Profile() {
    return ( // react components functions accept a single argument, a props objects
        <div>
            <Avatar2
                person={{name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'}} // double {{}} means object inside JSX
                size={100}
            />
            <Avatar2
                person={{name: 'Aklilu Lemma', imageId: 'OKS67lh'}} // double {{}} means object inside JSX
                size={80}
            />
            <Avatar2
                person={{name: 'Lin Lanying', imageId: '1bX5QH6'}} // double {{}} means object inside JSX
                size={50}
            />
        </div>
    )
}

function Profile2({person, size, isSepia, thickBorder}) {
    return (
        <div className='card'>
            <Avatar2
                person={person}
                size={size}
                isSepia={isSepia}
                thickBorder={thickBorder}
            />
        </div>
    )
}

// the same could be done with 'spread' syntax
function Profile3(props) {
    return (
        <div className='card'>
            <Avatar2 {...props} />
        </div>
    )
}

// Passing JSX as children
function Card({children}) {
    return (
        <div className='card'>
            {children}
        </div>
    )
}

function Profile4() {
    return (
        <Card>
            {/*<Avatar2*/}
            {/*    size={100}*/}
            {/*    person={{*/}
            {/*        name: 'Katsuko Saruhashi',*/}
            {/*        imageId: 'YfeOqp2'*/}
            {/*    }}*/}
            {/*/>*/}
            <h1>Katsuko Saruhashi</h1>
        </Card>
    )
}


export {App2, Profile, Profile4}