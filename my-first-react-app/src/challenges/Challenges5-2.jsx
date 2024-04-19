import {useState} from "react";
import './styles.css'

function Letter({
                    letter,
                    isHighlighted,
                    onHover,
                    onToggleStar,
                }) {
    return (
        <li
            className={
                isHighlighted ? 'highlighted' : ''
            }
            onFocus={() => {
                onHover(letter.id);
            }}
            onPointerMove={() => {
                onHover(letter.id);
            }}
        >
            <button onClick={() => {
                onToggleStar(letter.id);
            }}>
                {letter.isStarred ? 'Unstar' : 'Star'}
            </button>
            {letter.subject}
        </li>
    )
}


function MailClient() {
    const [letters, setLetters] = useState(initialLetters);
    // After button click (toggle star) we update letters array and create new letter which is different from highlightedLetter
    // highlightedLetter !== letter and the highlight disappears, it reappears next time you call setHighlightedLetter
    // const [highlightedLetter, setHighlightedLetter] = useState(null);

    const [highlightedId, setHighlightedId] = useState(null);

    function handleHover(letterId) {
        setHighlightedId(letterId);
    }

    function handleStar(starredId) {
        setLetters(letters.map(letter => {
            if (letter.id === starredId) {
                return {
                    ...letter,
                    isStarred: !letter.isStarred
                };
            } else {
                return letter;
            }
        }));
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isHighlighted={
                            letter.id === highlightedId
                        }
                        onHover={handleHover}
                        onToggleStar={handleStar}
                    />
                ))}
            </ul>
        </>
    );
}

// const initialLetters = [{
const letters = [{
    id: 0,
    subject: 'Ready for adventure?',
    isStarred: true,
}, {
    id: 1,
    subject: 'Time to check in!',
    isStarred: false,
}, {
    id: 2,
    subject: 'Festival Begins in Just SEVEN Days!',
    isStarred: false,
}];


// Ch.4
function Letter2({
                     letter,
                     onToggle,
                     isSelected,
                 }) {
    return (
        <li className={
            isSelected ? 'selected' : ''
        }>
            <label>
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => {
                        onToggle(letter.id);
                    }}
                />
                {letter.subject}
            </label>
        </li>
    )
}

function MailClient2() {
    const [selectedIDs, setSelectedIDs] = useState([]);

    // TODO: allow multiple selection
    const selectedCount = selectedIDs.length;

    function handleToggle(toggledId) {
        // TODO: allow multiple selection
        let newArr = [...selectedIDs]
        console.log(newArr)
        if (selectedIDs.includes(toggledId)){
            console.log('I am in IF body!')
            console.log('New arr before: ', newArr)
            // newArr.filter(id => id !== toggledId)
            const index1 = newArr.indexOf(toggledId)
            newArr.splice(index1, 1)
            console.log('New arr after: ', newArr)
            setSelectedIDs(newArr);
            return;
        }
        newArr.push(toggledId);
        setSelectedIDs(newArr);
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter2
                        key={letter.id}
                        letter={letter}
                        isSelected={
                            // TODO: allow multiple selection
                            selectedIDs.includes(letter.id)
                        }
                        onToggle={handleToggle}
                    />
                ))}
                <hr />
                <p>
                    <b>
                        You selected {selectedCount} letters
                    </b>
                </p>
            </ul>
        </>
    );
}



export {MailClient, MailClient2}