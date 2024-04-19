import {useState} from "react";
import {initialTravelPlan} from "../../utils/getPlaces2.js";
import {useImmer} from "use-immer";
// avoid duplication in state

const initialItems = [
    {title: 'pretzels', id: 0},
    {title: 'crispy seaweed', id: 1},
    {title: 'granola bar', id: 2},
];

function Menu3() {
    const [items, setItems] = useState(initialItems);
    // const [selectedItem, setSelectedItem] = useState(items[0])

    // Currently, it stores the selected item as an object in the selectedItem state variable. However, this is not great:
    // the contents of the selectedItem is the same object as one of the items inside the items list. This means that the
    // information about the item itself is duplicated in two places.

    // it worked fine with selectedItem, but it did not re-render selectedItem in the bottom after we changed his value in input field
    // we would need to re-render selectedItem, or we just can create selectedId state which will save id of current chosen item
    // (we will change id when use click on button) and then in variable we just search item in items and re-render it
    const [selectedId, setSelectedId] = useState(0)

    const selectedItem = items.find(item => item.id === selectedId)

    function handleItemChange(id, e) {
        setItems(items.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    title: e.target.value,
                };
            } else {
                return item;
            }
        }))
    }

    return (
        <>
            <h2>What's your travel snack?</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {/*{item.title}*/}
                        {/*{' '}*/}
                        {/*<button onClick={() => {*/}
                        {/*    setSelectedItem(item);*/}
                        {/*}}>Choose</button>*/}
                        <input
                            value={item.title}
                            onChange={e => {
                                handleItemChange(item.id, e)
                            }}
                        />
                        {' '}
                        <button onClick={() => {
                            setSelectedId(item.id);
                        }}>Choose
                        </button>
                    </li>
                ))}
            </ul>
            <p>You picked {selectedItem.title}.</p>
        </>
    )
}

// avoid deeply nested state
// Instead of tree-like structure where each place has an array of its child places, you can have each place hold an array
// of its child place IDs. Then store a mapping from each place ID to the corresponding place.

// with IDs we have more 'flat'('normalized') solution for this problem
function PlaceTree({id, parentId, placesById, onComplete}) {
    const place = placesById[id]; // get place by his id
    const childIds = place.childIds; // get his childPlaces or childIds

    return (
        <li>
            {place.title} {/* render title of Place*/}
            <button onClick={() => {
                onComplete(parentId, id);
            }}>Complete</button>
            {/* if this place has childPlaces we run recursion to traverse whole tree */}
            {childIds.length > 0 && (
                <ol>
                    {childIds.map(childId => ( // traverse through childPlaces
                        <PlaceTree key={childId} id={childId}
                                   placesById={placesById}
                                   parentId={id} onComplete={onComplete}/>
                        // recursion in Component! Calling same component for childPlaces
                    ))}
                </ol>
            )}
        </li>
    )
}

function TravelPlan() {
    const [plan, setPlan] = useState(initialTravelPlan);

    function handleComplete(parentId, childId) {
        const parent = plan[parentId]; // get parent place, from which we will delete child Place, e.g we delete earth from (root)
        // it means from (root) we delete childId 1, and all childPlaces of earth will be also deleted as Earth

        // Create a new version of the parent place
        // that doesn't include this child ID.
        const nextParent = {
            ...parent,
            childIds: parent.childIds.filter(id => id !== childId) // just filter(remove) this one Place that we just deleted
        };
        // Update the root state object
        setPlan({
            ...plan,
            // ... so that it has the updated parent.
            [parentId]: nextParent // replace old parentId's properties with new(in this case only changed childIds array)
        });
    }

    const root = plan[0] // root of our tree
    const planetsIds = root.childIds; // traverse through childIds

    return (
        <>
            <h2>Places to visit</h2>
            <ol>
                {planetsIds.map(id => (
                    <PlaceTree key={id} id={id} placesById={plan}
                               parentId={0} onComplete={handleComplete}/>
                ))}
            </ol>
        </>
    )
}

// Improving memory usage
// function TravelPlan() {
//     // useImmer to improve memory usage
//     const [plan, updatePlan] = useImmer(initialTravelPlan);
//
//     function handleComplete(parentId, childId) {
//         updatePlan(draft => {
//             // Remove from the parent place's child IDs.
//             const parent = draft[parentId];
//             parent.childIds = parent.childIds
//                 .filter(id => id !== childId);
//
//             // Forget this place and all its subtree.
//             deleteAllChildren(childId);
//             function deleteAllChildren(id) {
//                 const place = draft[id];
//                 place.childIds.forEach(deleteAllChildren);
//                 delete draft[id];
//             }
//         });
//     }
//
//     const root = plan[0];
//     const planetIds = root.childIds;
//     return (
//         <>
//             <h2>Places to visit</h2>
//             <ol>
//                 {planetIds.map(id => (
//                     <PlaceTree
//                         key={id}
//                         id={id}
//                         parentId={0}
//                         placesById={plan}
//                         onComplete={handleComplete}
//                     />
//                 ))}
//             </ol>
//         </>
//     );
// }
//
// function PlaceTree({ id, parentId, placesById, onComplete }) {
//     const place = placesById[id];
//     const childIds = place.childIds;
//     return (
//         <li>
//             {place.title}
//             <button onClick={() => {
//                 onComplete(parentId, id);
//             }}>
//                 Complete
//             </button>
//             {childIds.length > 0 &&
//                 <ol>
//                     {childIds.map(childId => (
//                         <PlaceTree
//                             key={childId}
//                             id={childId}
//                             parentId={id}
//                             placesById={placesById}
//                             onComplete={onComplete}
//                         />
//                     ))}
//                 </ol>
//             }
//         </li>
//     );
// }
//

export {Menu3, TravelPlan}
