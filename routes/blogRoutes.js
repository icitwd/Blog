const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const BlogController = require("../controllers/BlogController");

router.route("/").get(BlogController.getAll);
router
  .route("/")
  .post(
    body("title").notEmpty().withMessage("Title cannot be empty."),
    BlogController.add
  );

router.route("/:id").patch(BlogController.update);
router.route("/:id").delete(BlogController.delete);

module.exports = router;
