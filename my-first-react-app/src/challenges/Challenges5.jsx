import {useEffect, useState} from "react";

function Clock(props) {
    // const [color, setColor] = useState(props.color)
    const color = props.color;
    return (
        <h1 style={{color: color}}>
            {props.time}
        </h1>
    )
}

function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
    }, []);
    return time;
}

function AppClock() {
    const time = useTime();
    const [color, setColor] = useState('lightcoral');
    return (
        <div>
            <p>
                Pick a color:{' '}
                <select value={color} onChange={e => setColor(e.target.value)}>
                    <option value="lightcoral">lightcoral</option>
                    <option value="midnightblue">midnightblue</option>
                    <option value="rebeccapurple">rebeccapurple</option>
                </select>
            </p>
            <Clock color={color} time={time.toLocaleTimeString()} />
        </div>
    );
}
// Ch. 2
function PackingList({
                         items,
                         onChangeItem,
                         onDeleteItem
                     }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={item.packed}
                            onChange={e => {
                                onChangeItem({
                                    ...item,
                                    packed: e.target.checked
                                });
                            }}
                        />
                        {' '}
                        {item.title}
                    </label>
                    <button onClick={() => onDeleteItem(item.id)}>
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    );
}

function AddItem({ onAddItem }) {
    const [title, setTitle] = useState('');
    return (
        <>
            <input
                placeholder="Add item"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <button onClick={() => {
                setTitle('');
                onAddItem(title);
            }}>Add</button>
        </>
    )
}

let nextId = 3;
const initialItems = [
    { id: 0, title: 'Warm socks', packed: true },
    { id: 1, title: 'Travel journal', packed: false },
    { id: 2, title: 'Watercolors', packed: false },
];

// redundant variables -> total and packed
// no need in these variables, we can use regular variables, that will depend on state of main useState(items) and now
// item counts are now calculated during the next render from items, so they are always up-to-date.
function TravelPlan2() {
    const [items, setItems] = useState(initialItems);
    // const [total, setTotal] = useState(3);
    // const [packed, setPacked] = useState(1);

    let total = items.length;
    let packed = items.filter(item => item.packed).length

    function handleAddItem(title) {
        // setTotal(total + 1);
        total += 1;
        setItems([
            ...items,
            {
                id: nextId++,
                title: title,
                packed: false
            }
        ]);
    }

    function handleChangeItem(nextItem) {
        if (nextItem.packed) {
            // setPacked(packed + 1);
            packed += 1;
        } else {
            // setPacked(packed - 1);
            packed -= 1;
        }
        setItems(items.map(item => {
            if (item.id === nextItem.id) {
                return nextItem;
            } else {
                return item;
            }
        }));
    }

    function handleDeleteItem(itemId) {
        // setTotal(total - 1);
        total -= 1;
        setItems(
            items.filter(item => item.id !== itemId)
        );
    }

    return (
        <>
            <AddItem
                onAddItem={handleAddItem}
            />
            <PackingList
                items={items}
                onChangeItem={handleChangeItem}
                onDeleteItem={handleDeleteItem}
            />
            <hr />
            <b>{packed} out of {total} packed!</b>
        </>
    );
}




export {AppClock, TravelPlan2}