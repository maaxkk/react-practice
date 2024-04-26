
function Die({value, held, holdDice}) {
    return (
        <button onClick={holdDice} className={held ? 'die held' : 'die'} >
            <h2 className={'die--num'}>{value}</h2>
        </button>
    )
}


export {Die}