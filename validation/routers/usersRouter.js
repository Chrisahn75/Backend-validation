const express = require("express");
const router = express.Router();
const Joi = require("Joi");

const schema = Joi.object({
    username: Joi.string().min(4).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'fr']} }).required(),
    age: Joi.number().max(2).required(),
    city: Joi.string().required(),
})

const users = [
  username = "Michel",
  email = "michellechauve@gmail.com",
  age = 38,
  city= "Dunkerque",
];

router.get("/users/:username", (req, res) => {
  res.send("username: " + req.params.username);
});

const validationResult = schema.validate(product);

if (validationResult.error) {
  return res.status(400).json({
    message: validationResult.error,
  });
}


module.exports = router;