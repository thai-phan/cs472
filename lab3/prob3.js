let libraryBooks = [
    {title: "The Road Ahead", author: "Bill Gates", ID: 1235},
    {title: "Walter Isaacson", author: "Steve Jobs", ID: 4268},
    {title: "The Road Ahead", author: "Bill Gates", ID: 4268},
    {title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257}
];


function addBook(title, author, ID) {
    let book = {
        title,
        author,
        ID
    }
    let bookAvailable = libraryBooks.find(book => book.title === title)
    if (!bookAvailable) {
        libraryBooks.push(book)
        return book;
    } else {
        return false;
    }
}

function getTitles() {
    return libraryBooks.map(book => book.title).sort((a, b) => a.localeCompare(b))
}

function findBooks(title) {
    return libraryBooks.filter(book => book.title.toLowerCase().includes(title.toLowerCase())).sort((b1, b2) => a.localeCompare(b))
}


let book1 = addBook("The Road Ahead", "Bill Gates", 1235)
let book2 = addBook("One Flew Over the Cuckoo's Nest", "Ken Kesey", 5273)

console.log(book1)
console.log(book2)


console.log(getTitles())


console.log(findBooks("Flew"))
console.log(findBooks("Mockingjay"))