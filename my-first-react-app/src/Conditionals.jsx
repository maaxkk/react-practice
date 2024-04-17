// function Item({name, isPacked}){
//     if (isPacked) {
//         return <li className='item'>{name} ✔</li>
//     }
//     return <li className='item'>{name}</li>
// }

// more better way
// function Item({name, isPacked}) {
//     return (
//         <li className='item'>
//             {isPacked ? (
//                 <del>
//                     {name + ' ✔'}
//                 </del>
//             ) : (
//                 name
//             )}
//         </li>
//     )
// }

// with &&
// function Item({ name, isPacked}) {
//     return (
//         <li className='item'>
//             {name} {isPacked && '✔'}
//         </li>  // && returns value of right side, if the left side is true, if condition is false, whole expression becomes false
//     )
// }

// Don't put number on the left side of &&
function TestZero({num}) {
    return (
        <h1>
            {/*{num && 'Number is ' + num}*/}
            {num > 0 && 'Number is ' + num}
        </h1> // If num is 0 it prints 0, instead of not printing 0. To fix it use 'num > 0'
    )
}

function Item({name, isPacked}){
    let itemContent = name;
    if (isPacked) { // can return JSX expression with an if statement
        itemContent = (
            <del>
                {name + ' ✔'}
            </del>
        );
    } else itemContent = `${name} ❌` // can use just JS and I can use also JSX expressions
    return (
        <li className='item'>
            {itemContent}
        </li>
    );
}

function PackingList() {
    return (
        <section>
            <h1>Sally Ride's packing List</h1>
            <TestZero
                num={5}
                />
            <ul>
                <Item
                    isPacked={true}
                    name='Space suit'
                />
                <Item
                    isPacked={true}
                    name='Helmet with a golden leaf'
                />
                <Item
                    isPacked={false}
                    name='Photo of Tam'
                />
            </ul>
        </section>
    )
}

export {PackingList}