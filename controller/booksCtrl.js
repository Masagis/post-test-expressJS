const books = require('../db/books.json')

exports.getBooks = (req, res) => {
  return res.status(200).json({
    success: true,
    books,
  });
};

exports.getBooksById = (req, res) => {
  const book = books.find(i => i.id === +req.params.id)
  return res.status(200).json({
    success: true,
    book,
  });
};

exports.postBooks = (req, res) => {
  const data = books[books.length - 1].id + 1;
  const {
    isbn,
    judul,
    sinopsis,
    penulis,
    genre
  } = req.body

  const params = {
    id: data,
    isbn,
    judul,
    sinopsis,
    penulis,
    genre,
  };

  books.push(params);

  return res.status(201).json({
    success: true,
    params,
  });
};

exports.putBooks = (req, res) => {
  const buku = books.find((i) => i.id === +req.params.id);
  const {
    isbn,
    judul,
    sinopsis,
    penulis,
    genre
  } = req.body

  const params = {
    isbn,
    judul,
    sinopsis,
    penulis,
    genre,
  }
  updated = {
    ...buku,
    ...params
  }

  updated = books.map(i => i.id === buku.id ? buku : i)

  return res.status(200).json({
    success: true,
    updated,
  });
};

exports.deleteBooks = (req, res) => {
  const deleted = books.filter((i) => i.id !== +req.params.id);

  return res.status(200).json({
    success: true,
    message: `Buku dengan id ${deleted[0].judul} berhasil di hapus!  `,
    deleted,
  });
};