import './App.css'
import './switchTheme.css'
import Star from "./components/Toggle/Star.jsx";
import Toggle from "./components/Toggle/index.js";

function App() {
    const sports = ['Tennis', 'Pickleball', 'Racquetball', 'Squash']

    return (
        <>
            <Toggle>
                <Toggle.Button>
                    <Star/>
                </Toggle.Button>
            </Toggle>

            {/*<Menu>*/}
            {/*    <Menu.Button>Sports</Menu.Button>*/}
            {/*    <Menu.Dropdown>*/}
            {/*        {sports.map(sport => {*/}
            {/*            return <Menu.Item key={sport}>{sport}</Menu.Item>*/}
            {/*        })}*/}
            {/*    </Menu.Dropdown>*/}
            {/*</Menu>*/}
       </>
    )
}

export default App
