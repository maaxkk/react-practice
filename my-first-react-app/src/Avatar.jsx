const today = new Date();
const baseUrl = 'https://i.imgur.com/';
const person = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 'b',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};
function Avatar(){
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
    const description = 'Gregorio Y. Zara';
    return (
        <img
            className="avatar"
            src={baseUrl + person.imageId + person.imageSize + '.jpg'}
            alt={description}
        />
    );
}

function TodoList() {
    const name = 'Gregorio Y. Zara';
    return (
        <>
            <h1 style={{
                color: person.theme.color,
                backgroundColor: person.theme.backgroundColor
            }}>{person.name}'s To Do List</h1>
            <h2>Today is {formatDate(today)}</h2>
        </>
    )
}

function formatDate(date){
    return new Intl.DateTimeFormat(
        'en-US',
        {weekday: 'long'}
    ).format(date)
}

export {Avatar, TodoList};