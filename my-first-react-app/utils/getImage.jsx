export function getImageUrl(person) {
    return (
        'https://i.imgur.com/' +
        person.imageId +
        's.jpg'
    );
}

export function getImageUrl2(imageId, size = 's') {
    return (
        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    );
}