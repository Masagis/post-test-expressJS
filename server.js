// with Controller and routes
const express = require("express");
const app = express();
const booksRoutes = require("./routes/books");

app.use(express.json());

app.use(booksRoutes);

app.listen(3000, () => {
    console.log("Server ready");
});

// with-out Controller and routes, user CRUD biasa
// const express = require("express");
// const books = require("./db/books.json");
// const app = express();

// app.use(express.json());
// app.use(
//     express.urlencoded({
//         extended: true,
//     })
// );

// app.get("/api/v1/books", (req, res) => {
//     res.status(200).json(books);
// });

// app.get("/api/v1/books/:id", (req, res) => {
//     const book = books.find((i) => i.id == +req.params.id);
//     res.status(200).json(book);
// });

// app.post("/api/v1/books", (req, res) => {
//     console.log(req.body);
//     const {
//         isbn,
//         judul,
//         sinopsis,
//         penulis,
//         genre
//     } = req.body;

//     const id = books[books.length - 1].id + 1;
//     const book = {
//         id,
//         isbn,
//         judul,
//         sinopsis,
//         penulis,
//         genre,
//     };

//     books.push(book);
//     res.status(201).json(books);
// });

// app.put("/api/v1/books/:id", (req, res) => {
//     const buku = books.find((i) => i.id === +req.params.id);

//     const params = {
//         isbn: req.body.isbn,
//         judul: req.body.judul,
//         sinopsis: req.body.sinopsis,
//         penulis: req.body.penulis,
//         genre: req.body.genre,
//     }
//     book = {
//         ...buku,
//         ...params
//     }

//     book = books.map(i => i.id === buku.id ? buku : i)
//     res.status(200).json(buku);
// });

// app.delete("/api/v1/books/:id", (req, res) => {
//     // return false;
//     buku = books.filter((i) => i.id !== +req.params.id);
//     res.status(200).json({
//         message: `Buku dengan id ${req.params.id} berhasil di hapus!`
//     })
// });

// app.listen(3000, () => {
//     console.log("Server ready");
// });