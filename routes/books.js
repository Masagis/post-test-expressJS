const express = require("express");
const router = express.Router();

const {
  getBooks,
  getBooksById,
  postBooks,
  putBooks,
  deleteBooks,
} = require("../controller/booksCtrl");

router.get("/api/v1/books", getBooks);
router.get('/api/v1/books/:id', getBooksById);
router.post("/api/v1/books", postBooks);
router.put("/api/v1/books/:id", putBooks);
router.delete("/api/v1/books/:id", deleteBooks);

module.exports = router;