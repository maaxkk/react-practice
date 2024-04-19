import {useState} from "react";
import {foods, filterItems} from "../../utils/getFoods.js";

function Panel({ title, children, isActive, onShow}){
    return (
        <section className={'panel'}>
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <button onClick={onShow}>
                    Show
                </button>
            )}
        </section>
    )
}

function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel title='About' isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
                With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
            </Panel>
            <Panel title={'Etymology'} isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
                The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
            </Panel>
        </>
    )
}

// Ch.1

function SyncedInputs() {
    const [text, setText] = useState('')
    return (
        <>
            <Input label="First input" text={text} onChange={(e) => setText(e.target.value)} />
            <Input label="Second input" text={text} onChange={(e) => setText(e.target.value)}/>
        </>
    );
}

function Input({ label, text, onChange }) {

    // function handleChange(e) {
    //     e.target.value = text;
    // }

    return (
        <label>
            {label}
            {' '}
            <input
                value={text}
                onChange={onChange}
            />
        </label>
    );
}


// Ch.2

function FilterableList() {
    const [query, setQuery] = useState('');
    let foodsSearch = filterItems(foods, query)
    return (
        <>
            <SearchBar query={query} handleChange={(e) => {
                setQuery(e.target.value)
            }} />
            <hr />
            <List items={foodsSearch} />
        </>
    );
}

function SearchBar({query, handleChange}) {

    // function handleChange(e) {
    //     setQuery(e.target.value);
    // }

    return (
        <label>
            Search:{' '}
            <input
                value={query}
                onChange={handleChange}
            />
        </label>
    );
}

function List({ items}) {
    return (
        <table>
            <tbody>
            {items.map(food => (
                <tr key={food.id}>
                    <td>{food.name}</td>
                    <td>{food.description}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}



export {Accordion, SyncedInputs, FilterableList}