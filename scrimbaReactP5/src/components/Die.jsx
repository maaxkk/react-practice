
function Die({value, held}) {
    return (
        <button className={held ? 'die held' : 'die'} >
            <h2 className={'die--num'}>{value}</h2>
        </button>
    )
}


export {Die}