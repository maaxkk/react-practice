import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
// import {nanoid} from "nanoid"
import {useEffect, useState} from "react";
import {onSnapshot, addDoc, doc, deleteDoc, setDoc, getDocs, orderBy, query} from 'firebase/firestore'
import {db, notesCollection} from "../firebase.js";


export default function App() {
    const [notes, setNotes] = useState([])
    const [currentNoteId, setCurrentNoteId] = useState("");
    const [tempNoteText, setTempNoteText] = useState('');

    const currentNote = notes.find(note => note.id === currentNoteId) || notes[0]

    const sortedNotes = notes.sort((a, b) => b.updatedAt - a.updatedAt)

    // lazy state initialization allows put function as initial value, and this function wont be called again after initial
    // component render. It's nice when our initial value is item from localStorage and we dont need to call localStorage
    // everytime

    // const [state, setState] = useState(console.log('State initialization'))
    // const [state, setState] = useState(() => console.log('State initialization'))

    useEffect(() => {
        const unsubscribe = onSnapshot(notesCollection, function (snapshot) {
            // Sync up our local notes with the snapshot data
            const notesArray = snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id
            }))
            setNotes(notesArray)
        })
        return unsubscribe
    }, []) // everytime notes array changes, we set this array to local storage

    useEffect(() => {
        if (currentNote) {
            setTempNoteText(prevText => currentNote.body)
        }
    }, [currentNote])

    useEffect(() => {
        if (!currentNoteId) {
            setCurrentNoteId(notes[0]?.id)
        }
    }, [notes])

    /*
    Create an effect that runs any time the tempNoteText changes
    Delay the sending of the request to Firebase
    uses setTimeout
    use clearTimeout to cancel the timeout
     */

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (tempNoteText !== currentNote.body) {
                updateNote(tempNoteText)
            }
        }, 500)
        return () => clearTimeout(timeoutId)
    }, [tempNoteText])

    async function createNewNote() {
        const newNote = {
            body: "# Type your markdown note's title here",
            createdAt: Date.now(),
            updatedAt: Date.now(),
        }
        const newNoteRef = await addDoc(notesCollection, newNote)
        setCurrentNoteId(newNoteRef.id)
        // setNotes(prevNotes => {
        // more better way to use useEffect instead of use localStorage here
        // localStorage.setItem('notes', JSON.stringify([newNote, ...prevNotes]))
        // return [newNote, ...prevNotes]
        // })
        // setCurrentNoteId(newNote.id)
    }

    // function changeTempText(text) {
    //     setTempNoteText(prevText => text)
    // }

    async function updateNote(text) {
        const docRef = doc(db, 'notes', currentNoteId)
        await setDoc(docRef, {body: text, updatedAt: Date.now()}, {merge: true})
        // await sortedNotes()
    }

    // const sortedNotes = async () => {
    //     const data = await getDocs(query(notesCollection, orderBy('updatedAt', 'desc')));
    //     const newData = data.docs.map((doc) => ({
    //         ...doc.data(),
    //         id: doc.id,
    //     }));
    //     setNotes(newData)
    // }

    async function deleteNode(noteId) {
        const docRef = doc(db, 'notes', noteId)
        await deleteDoc(docRef)
    }

    // function findCurrentNote() {
    //     return notes.find(note => {
    //         return note.id === currentNoteId
    //     }) || notes[0]
    // }

    return (
        <main>
            {
                notes.length > 0
                    ?
                    <Split
                        sizes={[30, 70]}
                        direction="horizontal"
                        className="split"
                    >
                        <Sidebar
                            notes={sortedNotes}
                            currentNote={currentNote}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNode}
                        />
                        <Editor
                            tempNoteText={tempNoteText}
                            setTempNoteText={setTempNoteText}
                        />
                    </Split>
                    :
                    <div className="no-notes">
                        <h1>You have no notes</h1>
                        <button
                            className="first-note"
                            onClick={createNewNote}
                        >
                            Create one now
                        </button>
                    </div>

            }
        </main>
    )
}

export {App}