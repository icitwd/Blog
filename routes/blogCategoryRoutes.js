const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const BlogCategoryController = require("../controllers/BlogCategoryController");

router.get("/", BlogCategoryController.getAll);
router
  .route("/")
  .post(
    body("title").notEmpty().withMessage("Title cannot be empty."),
    BlogCategoryController.add
  );

router.route("/:id").patch(BlogCategoryController.update);
router.route("/:id").delete(BlogCategoryController.delete);

module.exports = router;
