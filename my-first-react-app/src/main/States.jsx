import {useState} from "react";
import {sculptureList} from "../../utils/getSculptures.jsx";

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function ChangeColor() {
    const [backgroundColor, setBackgroundColor] = useState(COLORS[0])

    const onButtonClick = (color) => () => {
        setBackgroundColor(color);
    };

    return (
        <div className='App' style={{backgroundColor,}}>
            {COLORS.map((color) => (
                <button type='button' key={color} onClick={onButtonClick(color)}
                        className={backgroundColor === color ? 'selected' : ''} >
                    {color}
                </button>
            ))}
        </div>
    )
}

function GallerySt() {
    const [index, setIndex] = useState(0); // making React remember 'index'
    // hooks functions starting with use -> can only be called at the top level
    // of your components or your own hooks. You can't call hooks inside conditions, loops, or other nested functions
    const [showMore, setShowMore] = useState(false);
    function handleClick() {
        setIndex(index + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (
        <>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
                />
        </>
    )
}

function Page() {
    return ( // their states are independent
        <div className='Page'>
            <GallerySt />
            <GallerySt />
        </div>
    )
}

export {ChangeColor, Page}