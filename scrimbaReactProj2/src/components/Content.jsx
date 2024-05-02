import data from "../utils/data.js";
import {Card} from "./Card.jsx";

function Content() {

    const locations = data.map((location, index) => (
        <Card key={location.id} {...location} border={index < data.length-1 ? true : false} />
    ))
    return (
        <main>
            {locations}
        </main>
    )
}

export {Content}