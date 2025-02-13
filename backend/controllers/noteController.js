const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Note = require("../models/noteModel");

// @desc GET NOTES
// @route GET /api/notes
// @access Private
const { error } = require("console");
const noteModel = require("../models/noteModel");

const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find();
  res.status(200).json(notes);
});

// @desc SET NOTE
// @route POST /api/notes
// @access Private
const setNote = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field!");
  }

  const note = await Note.create({
    text: req.body.text,
  });
  res.status(200).json(note);
});

// @desc UPDATE NOTE
// @route PUT /api/notes/:id
// @access Private
const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    res.status(400);
    throw new Error("Note Not Found");
  }

  const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedNote);
});

// @desc DELETE NOTE
// @route DELETE /api/notes/:id
// @access Private
const deleteNote = asyncHandler(async (req, res) => {
  // const note = await Note.findById(req.params.id);
  const note = await Note.findByIdAndDelete(req.params.id);

  if (!note) {
    res.status(400);
    throw new Error("Note Not Found");
  }

  // await note.remove();

  res
    .status(200)
    .json({ id: req.params.id, message: "Note Deleted Successfully" });
});

module.exports = {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
};
