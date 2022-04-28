const express = require('express');
const Poll = require('../models/Poll');
var fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');

const router = express.Router();


//create a poll

router.post("/poll", fetchuser, [
  body('question').exists(),
  body('option1').exists(),
  body('option2').exists(),
  body('option3'),
  body('option4'),

], async(req, res) => {
  try {

      const { question, option1, option2, option3, option4 } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const poll = new Poll({
                question, option1, option2, option3, option4, user: req.user.id
            })
            const savedPoll = await poll.save()

            res.json(savedPoll);

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }

});

module.exports = router;
