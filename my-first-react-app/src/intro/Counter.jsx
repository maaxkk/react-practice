function Counter(){
    return (
        <>
            <h2>0</h2>
            <button className="incr" onClick={increment}>Increment</button>
            <button className="decr" onClick={decrement}>Decrement</button>
        </>
    )
}

function increment() {
    const h2 = document.querySelector('h2')
    h2.textContent = +h2.textContent + 1;
}

function decrement() {
    const h2 = document.querySelector('h2')
    h2.textContent = h2.textContent - 1;
}

export {Counter};