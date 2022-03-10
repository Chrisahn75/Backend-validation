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
  {
    username: "Michel",
    email: "michel@gmail.com",
    age: 38,
    city: "Dunkerque",
  },
];

router.get("/", (_req, res) => {
  res.json(users);
});

router.get("/users/:username", (req, res) => {
  const username = users.find((user) => {
    return (
      req.params.username.toLocaleLowerCase() === user.username.toLocaleLowerCase()
    );
  });

  if (!username) {
    return res.json({
      message: "User don't exist",
    });
  }
  res.json(username);
});

router.get("/users/id/:id", (req, res) => {
  const id = users[req.params.id - 1];

  if (!id) {
    return res.json({
      message: "ID not found",
    });
  }
  res.json(id);
});
router.post("/users", (req, res) => {
  const user = req.body;

  const validationResult = schema.validate(user);

  if (validationResult.error) {
    return res.status(400).json({
      message: validationResult.error,
    });
  }

  users.push(user);

  res.json({
    message: "User added",
    users,
  });
});

module.exports = router;