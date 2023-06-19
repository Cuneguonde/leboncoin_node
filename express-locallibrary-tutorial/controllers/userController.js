const Author = require("../models/user");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

  // Display Author create form on GET.
  exports.user_create_get = asyncHandler(async (req, res, next) => {
    res.render("register_form", { title: "Create User" });
  });

