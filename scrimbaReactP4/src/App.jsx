import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import {nanoid} from "nanoid"
import {useEffect, useState} from "react";


export default function App() {
    const [notes, setNotes] = useState(
        () => JSON.parse(localStorage.getItem('notes')) || [])
    const [currentNoteId, setCurrentNoteId] = useState(
        (notes[0]?.id) || ""
    )

    const currentNote = notes.find(note => note.id === currentNoteId) || notes[0]

    // lazy state initialization allows put function as initial value, and this function wont be called again after initial
    // component render. It's nice when our initial value is item from localStorage and we dont need to call localStorage
    // everytime

    // const [state, setState] = useState(console.log('State initialization'))
    // const [state, setState] = useState(() => console.log('State initialization'))

    useEffect(() =>{
        localStorage.setItem('notes', JSON.stringify(notes))

    }, [notes]) // everytime notes array changes, we set this array to local storage

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here"
        }
        setNotes(prevNotes => {
            // more better way to use useEffect instead of use localStorage here
            // localStorage.setItem('notes', JSON.stringify([newNote, ...prevNotes]))
            return [newNote, ...prevNotes]
        })
        setCurrentNoteId(newNote.id)
    }

    function updateNote(text) {
        setNotes(oldNotes => {
            const newArray = []
            for (let i = 0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i]
                if (oldNote.id === currentNoteId) {
                    newArray.unshift({...oldNote, body: text})
                } else {
                    newArray.push(oldNote)
                }
            }
            return newArray
        })
    }

    function deleteNode(event, noteId) {
        event.stopPropagation();
        setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
    }

    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

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
                            notes={notes}
                            currentNote={currentNote}
                            setCurrentNoteId={setCurrentNoteId}
                            newNote={createNewNote}
                            deleteNote={deleteNode}
                        />
                        {
                            currentNoteId &&
                            notes.length > 0 &&
                            <Editor
                                currentNote={currentNote}
                                updateNote={updateNote}
                            />
                        }
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