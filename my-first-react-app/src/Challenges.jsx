function Item({name, isPacked, importance}) {

    return (
        <li className='item'>
            {name} {importance > 0 && <i>{'Importance: ' + importance}</i>} {isPacked && '✔'} {!isPacked && '❌'}
        </li>
    );
}

function PackingList2() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    importance={9}
                    isPacked={true}
                    name='Space suit'
                    />
                <Item
                    importance={0}
                    isPacked={false}
                    name='Helmet with a golden leaf'
                    />
                <Item
                    importance={6}
                    isPacked={false}
                    name='Photo of Tam'
                />
            </ul>
        </section>
    )
}

// more cooler way
const drinks = {
    tea: {
        part: 'leaf',
        caffeine: '15-70 mg/cup',
        age: '4,000+ years',
    },
    coffee: {
        part: 'bean',
        caffeine: '80-185 mg-cup',
        age: '1,000+ years'
    }
}

function Drink({name}){
    const info = drinks[name]
    return (
        <section>
            <h1>{name}</h1>
            <dl>
                <dt>Part of plant</dt>
                <dd>{info.part}</dd>
                <dt>Caffeine content</dt>
                <dd>{info.caffeine}</dd>
                <dt>Age</dt>
                <dd>{info.age}</dd>
            </dl>
        </section>
    )
}



// function Drink({name}){
//     let partOfPlant = 'leaf';
//     let caffeineContent = '15-70 mg/cup'
//     let age = '4,000+ years'
//     if (name !== 'tea') partOfPlant = 'bean';
//     if (name !== 'tea') caffeineContent = '80-185 mg/cup';
//     if (name !== 'tea') age = '1,000+ years';
//     return (
//         <section>
//             <h1>{name}</h1>
//             <dl>
//                 <dt>Part of plant</dt>
//                 <dd>{partOfPlant}</dd>
//                 <dt>Caffeine content</dt>
//                 <dd>{caffeineContent}</dd>
//                 <dt>Age</dt>
//                 <dd>{age}</dd>
//             </dl>
//         </section>
//     )
// }

function DrinkList() {
    return (
        <div>
            <Drink name='tea' />
            <Drink name='coffee' />
        </div>
    )
}



export {PackingList2, DrinkList}