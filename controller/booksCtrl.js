const books = [
  {
    id: 1,
    isbn: 12345678,
    judul: "cantik itu luka",
    sinopsis: "lorem ipsum",
    penulis: "eka kurniawan",
    genre: "romantis",
  },
  {
    id: 2,
    isbn: 12345678,
    judul: "cantik itu luka",
    sinopsis: "lorem ipsum",
    penulis: "eka kurniawan",
    genre: "romantis",
  },
  {
    id: 3,
    isbn: 12345678,
    judul: "cantik itu luka",
    sinopsis: "lorem ipsum",
    penulis: "eka kurniawan",
    genre: "romantis",
  },
  {
    id: 4,
    isbn: 12345678,
    judul: "cantik itu luka",
    sinopsis: "lorem ipsum",
    penulis: "eka kurniawan",
    genre: "romantis",
  },
];

exports.getBooks = (req, res) => {
  return res.status(200).json({
    success: true,
    books,
  });
};

exports.postBooks = (req, res) => {
  const judul = req.body.judul;
  const pengarang = req.body.pengarang;
  let data = books[books.length - 1].id + 1;

  const params = {
    id: data,
    judul,
    pengarang,
  };

  books.push(params);

  return res.status(201).json({
    success: true,
    params,
  });
};

exports.putBooks = (req, res) => {
  const judul = req.body.judul;
  const pengarang = req.body.pengarang;

  const params = {
    judul,
    pengarang,
  };

  const id = req.params.nim;

  const fetchedBooks = books.find((i) => i.id === id);

  const updated = {
    ...fetchedBooks,
    ...params,
  };

  return res.status(200).json({
    success: true,
    updated,
  });
};

exports.deleteBooks = (req, res) => {
  const no = +req.params.id;

  const deleted = books.filter((Books) => Books.id === no);

  return res.status(200).json({
    success: true,
    message: `Deleted ${deleted[0].judul} from data success!`,
    deleted,
  });
};
