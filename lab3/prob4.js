// data.js
let data = [
    {title: "The Road Ahead", author: "Bill Gates", ID: 1235},
    {title: "Walter Isaacson", author: "Steve Jobs", ID: 4268},
    {title: "The Road Ahead", author: "Bill Gates", ID: 4268},
    {title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257}
];

export function get_items() {
    return data;
}

export function add_item(new_item) {
    // add item (if id does not exist)
    // return true if item is added successfully, false otherwise
    if (!data.map(book => book.title).includes(new_item.title)) {
        data.push(new_item)
        return true;
    } else {
        return false;
    }
}

export function update_item_title_by_id(id, new_title) {
    // update the title (if id exist)
    // return true if item is update successfully, false otherwise
    let book = data.find(book => book.ID === id);
    if (book) {
        book.title = new_title;
        return true;
    } else {
        return false;
    }
}

export function delete_item_by_id(id) {
    // delete the item (if id exist)
    // return true if item is deleted successfully, false otherwise
    let book = data.find(book => book.ID === id);
    if (book) {
        let index = data.indexOf(book)
        data.splice(index, 1)
        return true;
    } else {
        return false;
    }
}

export function get_item_title_by_id(id) {
    // return the item title by id (if id exist)
    let book = data.find(book => book.ID === id);
    if (book) {
        return book.title;
    } else {
        return false;
    }
}