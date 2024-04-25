// Ch. 1
import {useState, useEffect} from 'react';

function createConnection(serverUrl, roomId) {
    // A real implementation would actually connect to the server
    return {
        connect() {
            console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
        },
        disconnect() {
            console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
        }
    };
}


const serverUrl = 'https://localhost:1234';

function ChatRoom({roomId}) {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        // roomId is reactive value, and it has to be in dependencies array
        connection.connect();
        return () => connection.disconnect();
    }, [roomId]);

    return (
        <>
            <h1>Welcome to the {roomId} room!</h1>
            <input
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
        </>
    );
}

function ChatCh1() {
    const [roomId, setRoomId] = useState('general');
    return (
        <>
            <label>
                Choose the chat room:{' '}
                <select
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                >
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <hr/>
            <ChatRoom roomId={roomId}/>
        </>
    );
}


function DotAppCh2() {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [canMove, setCanMove] = useState(true);


    useEffect(() => {

        function handleMove(e) {
            setPosition({x: e.clientX, y: e.clientY})
        }

        window.addEventListener('pointermove', handleMove);
        if (!canMove) {
            window.removeEventListener('pointermove', handleMove)
        }
        return () => window.removeEventListener('pointermove', handleMove)
    }, [canMove]);

    const styles = {
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
    }

    return (
        <>
            <label>
                <input type="checkbox"
                       checked={canMove}
                       onChange={e => setCanMove(e.target.checked)}
                />
                {canMove ? 'The dot is allowed to move' : 'The dot is not allowed to move'}
            </label>
            <hr/>
            <div style={styles}></div>
            {/*{ canMove && <div styles={styles}/>}*/}
        </>
    )
}

export {ChatCh1, DotAppCh2}
