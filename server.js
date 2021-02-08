const express = require("express");
const app = express();
const bukuRoutes = require("./routes/buku");

app.use(express.json());

app.use(bukuRoutes);

app.listen(3000);

// const express = require("express");
// const books = require("./db/books.json");
// const app = express();

// app.use(express.json());
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

// app.get("/api/v1/books", (req, res) => {
//   res.status(200).json(books);
// });

// app.get("/api/v1/books/:id", (req, res) => {
//   const book = books.find((i) => i.id == +req.params.id);
//   res.status(200).json(book);
// });

// app.post("/api/v1/books", (req, res) => {
//   console.log(req.body);
//   const { isbn, judul, sinopsis, penulis, genre } = req.body;

//   const id = books[books.length - 1].id + 1;
//   const book = {
//     id,
//     isbn,
//     judul,
//     sinopsis,
//     penulis,
//     genre,
//   };

//   books.push(book);
//   res.status(201).json(books);
// });

// app.listen(3000, () => {
//   console.log("Server ready");
// });
