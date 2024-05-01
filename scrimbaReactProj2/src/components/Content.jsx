import data from "../utils/data.js";
import {Card} from "./Card.jsx";

function Content() {

    const locations = data.map(location => (
        <Card key={location.id} {...location} />
    ))
    return (
        <main>
            {locations}
        </main>
    )
}

export {Content}