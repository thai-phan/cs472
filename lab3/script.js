import {add_item, get_items, delete_item_by_id, update_item_title_by_id, get_item_title_by_id} from "./prob4.js";

console.log(get_items())

let book1 = {
    title: "The Road Ahead",
    author: "Bill Gates",
    ID: 1235
}
let book2 = {
    title: "One Flew Over the Cuckoo's Nest",
    author: "Ken Kesey",
    ID: 5273
}
let book3 = {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    ID: 1004
}
let book4 = {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    ID: 1005
}

let isBook1 = add_item(book1)
let isBook2 = add_item(book2)
let isBook3 = add_item(book3)
let isBook4 = add_item(book4)

console.log(isBook1)
console.log(isBook2)
console.log(isBook3)
console.log(isBook4)

console.log(update_item_title_by_id(1235, "The Road Ahead Updated"))

console.log(delete_item_by_id(1004))

console.log(get_item_title_by_id(1005))

console.log(get_items())
