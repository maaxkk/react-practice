function Greeting() {
    return <h1>&quot; I swear by my pretty floral bonnet, I will end you. &quot;</h1>
}

function FixErrors() {
    return (
        <>
            <h1>Test title</h1>
            <ol className="test-list">
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
            </ol>
            <svg>
                <circle cx="25" cy="75" r="20" stroke="green" strokeWidth="2"/>
            </svg>
            <form>
                <input type="text"/>
            </form>
        </>
    )
}

function FixErrors2() {
    return (
        <div>
            <h1>Hedy Lamarr's Todos</h1>
            <img
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="photo"
            />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </div>
    )
}

function FixErrors3() {
    return (
        <div>
            <div className="intro">
                <h1>Welcome to my website!</h1>
            </div>
            <p className="summary">
                You can find my thoughts here.
                <br></br>
                <b>And <i>pictures</i></b> of scientists!
            </p>
        </div>
    );
}


export {Greeting, FixErrors, FixErrors2, FixErrors3};