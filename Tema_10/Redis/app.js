import { createClient } from 'redis';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const client = createClient({
    url: 'redis://default:123pass@localhost:5000'
});

await client.connect();

const app = express();
const port = 3000;


app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/books', async (req, res) => {
    const book = req.body;
    book.id = Math.floor(Math.random() * 100000);
    const books = await getBooks();
    books.push(book);
    await client.set('books', JSON.stringify(books));
    res.send('Book is added to the database');
});

app.get('/books', async (req, res) => {
    res.json(await getBooks());
});

app.get('/books/:id', async (req, res) => {
    const id = parseInt(req.params.id);

    const books = await getBooks();
    // Sear ching books for the id
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

    if (newBook.id !== id) {
        res.send('El id tiene que ser el mismo');
        return;
    }
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

async function getBooks() {
    let value = await client.get('books');
    if (value === undefined || value === null) {
        return [];
    }
    return JSON.parse(value);
}

