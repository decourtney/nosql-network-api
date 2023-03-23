const { User, Thought } = require("../models");

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },

  getSingleThought(req, res) {
    Thought.findById(req.params.thoughtId)
      .then((thoughts) => {
        !thoughts
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thoughts);
        res.json(thoughts);
      })
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {},
  updateThought(req, res) {},
  deleteThought(req, res) {},
  addReaction(req, res) {},
  removeReaction(req, res) {},
};
