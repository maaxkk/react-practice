import {useEffect, useState} from "react";

function createEncryptedConnection(roomId) {
    // A real implementation would actually connect to the server
    return {
        connect() {
            console.log('✅ 🔐 Connecting to "' + roomId + '... (encrypted)');
        },
        disconnect() {
            console.log('❌ 🔐 Disconnected from "' + roomId + '" room (encrypted)');
        }
    };
}

function createUnencryptedConnection(roomId) {
    // A real implementation would actually connect to the server
    return {
        connect() {
            console.log('✅ Connecting to "' + roomId + '... (unencrypted)');
        },
        disconnect() {
            console.log('❌ Disconnected from "' + roomId + '" room (unencrypted)');
        }
    };
}


// function ChatRoom({roomId, createConnection, isEncrypted}) {
//     useEffect(() => {
//         const connection = createConnection(roomId);
//         connection.connect();
//         return () => connection.disconnect();
//     }, [roomId, isEncrypted])
// }

// right solution
function ChatRoom({roomId, isEncrypted}) {
    useEffect(() => {
        const createConnection = isEncrypted ? createEncryptedConnection :
            createUnencryptedConnection;
        const connection = createConnection(roomId);
        connection.connect()
        return () => connection.disconnect();
    }, [roomId, isEncrypted])
}

function ChatAppCh4() {
    const [roomId, setRoomId] = useState('general');
    const [isEncrypted, setIsEncrypted] = useState(false);

    return (
        <>
            <label>
                Choose the chat room: {' '}
                <select
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                >

                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="music">music</option>
                </select>
            </label>
            <label>
                <input
                    type={'checkbox'}
                    checked={isEncrypted}
                    onChange={e => setIsEncrypted(e.target.checked)}
                    />
            </label>
            <hr/>
            <ChatRoom
                roomId={roomId}
                isEncrypted={isEncrypted}
            //     createConnection={isEncrypted ?
            //         createEncryptedConnection : createUnencryptedConnection
            // }
                />
        </>
    )

}


export  {ChatAppCh4}