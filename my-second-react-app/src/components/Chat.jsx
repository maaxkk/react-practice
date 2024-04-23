import {useContext, useEffect, useState} from "react";

function createConnection(serverUrl, roomId) {
    // A real implementation would actually connect to the server
    return {
        connect() {
            console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
        },
        disconnect() {
            console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
        }
    }
}

// const serverUrl = 'https://localhost:1234'

// function ChatRoom({roomId}){
//     // each effect represent a separate synchronization process
//
//     // GOOD!
//     // useEffect(() => {
//         // logVisit(roomId);
//     // }, [roomId]);
//
//     useEffect(() => {
//         // BAD!
//         // logVisit(roomId);
//
//         const connection = createConnection(serverUrl, roomId);
//         connection.connect();
//         return () => connection.disconnect();
//     }, [roomId]); // this effect depends on 'roomId'
//     // every time component re-renders, react will look at the array of dependencies that you have passed. If any of the
//     // values in the array is different from the value at the same spot that you passed during the previous render, React
//     // will re-synchronize your Effect. e.g you passed ['general'] during the initial render, and later you passed
//     // ['travel'] during the next render, React will compare 'general' and 'travel' (it uses Object.is()) so react will
//     // re-synchronize your Effect. But if on re-render roomId is the same your Effect will remain connected to the same room.
//     return <h1>Welcome to the {roomId} room!</h1>;
// }

// export default function ChatApp() {
//     const [roomId, setRoomId] = useState('general');
//     const [show, setShow] = useState(false);
//     return (
//         <>
//             <label>
//                 Choose the chat room:{' '}
//                 <select
//                     value={roomId}
//                     onChange={e => setRoomId(e.target.value)}
//                     >
//                     <option value="general">general</option>
//                     <option value="travel">travel</option>
//                     <option value="music">music</option>
//                 </select>
//             </label>
//             <button onClick={() => setShow(!show)}>
//                 {show ? 'Close chat' : 'Open chat'}
//             </button>
//             {show && <hr />}
//             {show && <ChatRoom roomId={roomId} />}
//         </>
//     )
// }

// function ChatRoom({roomId}) {
//     const [serverUrl, setServerUrl] = useState('https://localhost:1234');
//
//     useEffect(() => {
//         const connection = createConnection(serverUrl, roomId);
//         connection.connect();
//         return () => connection.disconnect();
//     }, [roomId, serverUrl]);
//     return (
//         <>
//             <label>
//                 Server URL:{' '}
//                 <input
//                     value={serverUrl}
//                     onChange={e => setServerUrl(e.target.value)}
//                     />
//             </label>
//             <h1>Welcome to the {roomId} room!</h1>
//         </>
//     )
// }
//
// export default function ChatApp() {
//     const [roomId, setRoomId] = useState('general');
//     return (
//         <>
//             <label>
//                 Choose the chat room:{' '}
//                 <select
//                     value={roomId}
//                     onChange={e => setRoomId(e.target.value)}
//                 >
//                     <option value="general">general</option>
//                     <option value="travel">travel</option>
//                     <option value="music">music</option>
//                 </select>
//             </label>
//             <ChatRoom roomId={roomId} />
//         </>
//     )
// }


const serverUrl = 'https://localhost:1234';
const roomId = 'general';

function ChatRoom() {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect()
        return () => connection.disconnect()
    }, []);
    return <h1>Welcome to the {roomId} room!</h1>
}

// Now useEffect does not have dependencies, so useEffect connects to the chat room only when the component mounts, and
// disconnects only when the component unmounts.
export default function ChatApp() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? 'Close chat' : 'Open chat'}
            </button>
            {show && <hr/>}
            {show && <ChatRoom/>}
        </>
    )
}

// any reactive value can change on a re-render, so you need to include reactive values as Effect's dependencies
// In other words, Effects “react” to all values from the component body.
// export default function ChatApp({roomId, selectedServerUrl}) { // roomId is reactive
//     const settings = useContext(SettingsContext); // settings is reactive
//     const serverUrl = selectedServerUrl ?? settings.defaultServerUrl; // serverUrl is reactive
//     useEffect(() => {
//         const connection = createConnection(serverUrl, roomId); // Your effect reads roomId and serverUrl
//         connection.connect();
//         return () => {
//             connection.disconnect();
//         };
//     }, [roomId, serverUrl]) // So it needs to re-synchronize when either of them changes!
// }



