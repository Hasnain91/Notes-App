const asyncHandler = require("express-async-handler");

// @desc GET NOTES
// @route GET /api/notes
// @access Private
const { error } = require("console");

const getNotes = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Notes Here..." });
});

// @desc SET NOTE
// @route POST /api/notes
// @access Private
const setNote = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field!");
  }
  res.status(200).json({ message: "Set Note Here..." });
});

// @desc UPDATE NOTE
// @route PUT /api/notes/:id
// @access Private
const updateNote = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Note ${req.params.id} Here...` });
});

// @desc DELETE NOTE
// @route DELETE /api/notes/:id
// @access Private
const deleteNote = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Note ${req.params.id} Here...` });
});

module.exports = {
  getNotes,
  setNote,
  updateNote,
  deleteNote,
};
