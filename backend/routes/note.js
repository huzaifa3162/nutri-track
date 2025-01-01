const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator"); // Use body for validation

// ROUTE 1: Get All the notes using :GET "/api/note/getuser"

// ROUTE 1: Get All the notes using :GET "/api/note/getuser"
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

// ROUTE 2 : Add the notes using :POST "/api/note/addnotes"
router.post(
  "/addnote",
  fetchuser,
  [
    body("title")
      .isLength({ min: 3 })
      .withMessage("Title must be at least 3 characters long"),
    body("describtion")
      .isLength({ min: 5 })
      .withMessage("Description must be at least 5 characters long"),
  ],
  async (req, res) => {
    try {
      const { title, describtion, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Notes({
        title,
        describtion,
        tag,
        user: req.user.id,
      });

      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error occur");
    }
  }
);

// ROUTE 3 : Update the notes using :put "/api/note/updatenotes"
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, describtion, tag } = req.body;

  try {
    // Create a newNote object
    const newNote = {};
    if (title) newNote.title = title;
    if (describtion) newNote.describtion = describtion;
    if (tag) newNote.tag = tag;

    // Find the note to be updated
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    // Check if the note belongs to the logged-in user
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Authorized");
    }

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});

// ROUTE 4 : Delete the notes using :Delete "/api/note/deletenotes"
router.delete("/deletenote/:id", fetchuser, async (req, res) => {

  try {
    // Find the note to be updated
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }

    // Check if the note belongs to the logged-in user and delete it
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Authorized");
    }

    note = await Notes.findByIdAndDelete(req.params.id)
    res.json({ "Success" : "Note deleted Successfully ", note : note });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occurred");
  }
});
module.exports = router;

