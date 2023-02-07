import { createClient } from 'redis';
import { readFile } from 'fs/promises';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const json = JSON.parse(
    await readFile(
        new URL('./file.json', import.meta.url)
    )
);

/*
const client = createClient({
    url: 'redis://default:123pass@localhost:5000'
});

client.on('error', err => console.log('Redis Client Error', err));
await client.connect();
await client.set('nuevaClave', JSON.stringify(json));
const value = await client.get('HOLA');

await client.disconnect();
*/

const app = express()
const port = 3000

let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/books', (req, res) => {
    const book = req.body;
    book.id = Math.floor(Math.random() * 100000);
    books.push(book);
    res.send('Book is added to the database');
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);

    // Searching books for the id
    for (let book of books) {
        if (book.id === id) {
            res.json(book);
            return;
        }
    }

    // Sending 404 when not found something is a good practice
    res.status(404).send('Book not found');
});

app.delete('/books/:id', (req, res) => {
    // Reading id from the URL
    const id = parseInt(req.params.id);

    // Remove item from the books array
    books = books.filter(i => {
        if (i.id !== id) {
            return true;
        }
        return false;
    });

    res.send('Book is deleted');
});

app.put('/books/:id', (req, res) => {
    // Reading id from the URL
    const id = parseInt(req.params.id);
    const newBook = req.body;

    // Remove item from the books array
    for (let i = 0; i < books.length; i++) {
        let book = books[i]
        if (book.id === id) {
            books[i] = newBook;
        }
    }

    res.send('Book is edited');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));