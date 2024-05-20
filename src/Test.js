/*const x = [3, 7, 1, 9, 8];
const sorted = x.sort((a, b) => a - b);
sorted;

const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J,K Rowling",
};

const books = [];

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

const booksAfterDelete =booksAfterAdd.filter((book) => book.id !== 6 )
booksAfterDelete;
*/
/*
fetch("https://jsonplaceholder.typicode.com/todos")
.then(res => res.json()
        .then(data => console.log(data)))
*/

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getTodos();
