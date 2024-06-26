const express = require("express");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../MiddleWare/fetchuser");
const Notes = require("../Models/Notes");

const bcrypt = require("bcryptjs");

var JWT = require("jsonwebtoken");
var JWT_SCERET = "jsonwebtoken";

const router = express.Router();

// Route:1 get all notes using GET '/api/note/fetchallnotes' Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  //returning a promise hence need to await the above
  res.json(notes);
});

// Route:2 add a notes using POST '/api/note/addnote' Login required
router.post(
  "/addnote",
  [
    body("title", "Enter the Title").isLength({ min: 3 }),
    body("description", "Enter the description").isLength({ min: 10 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req.body);
      if (!errors) {
        return res.status(500).json({ error: errors.array() });
      }
      const { title, description, tag } = req.body;
      const notes = new Notes({ title, description, tag, user: req.user.id });
      const savedNote = await notes.save();

      //returning a promise hence need to await the above
      res.json({ savedNote });

      const note = new Notes();
    } catch (err) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Route:3 Update a notes using PUT '/api/note/updatenote/:id' Login required

router.put("/updatenote/:id", fetchuser, async (req, res) => {
  try {
    const { title, description, tag } = req.body;
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.toString() !== req.params.id) {
      return res.status(404).send("Not Found");
    }

    note = await note.findByIdAndUpdate(
      req.body.id,
      { $set: newNote },
      { new: true }
    );
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Route:4 delete na existing Note using DELETE '/api/note/deletenote/:id'Login required

router.delete("/deletenote", fetchuser, async () => {
  try {
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.toString() !== req.params.id) {
      return res.status(404).send("Not Found");
    }
    note = await note.findByIdAndUpdate(req.params.id);
    res.json({ Sucess: "Note has been deleted", note: note });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
