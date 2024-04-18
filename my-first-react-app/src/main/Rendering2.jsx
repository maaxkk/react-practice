// import {createRoot} from "react-dom/client.js";

function Image() {
    return (
        <img src="https://i.imgur.com/ZF6s192.jpg"
        alt="'Floralis Genérica' by Eduardo Catalano: a gigantic metallic flower sculpture with reflective petals"/>
    )
}

// const root = createRoot(document.getElementById('root'))
// root.render(<Image/>)

function GalleryRender() {
    return (
        <section>
            <h1>Inspiring Sculptures</h1>
            <Image />
            <Image />
            <Image />
        </section>
    )
}

export {GalleryRender}