const express = require("express");
const router = express.Router();

const {
  getBooks,
  postBooks,
  putBooks,
  deleteBooks,
} = require("../controller/booksCtrl");

router.get("/buku", getBooks);
router.post("/buku", postBooks);
router.put("/buku/:id", putBooks);
router.delete("/buku/:id", deleteBooks);

module.exports = router;
