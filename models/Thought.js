const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return v.length >= 1 && v.length <= 280;
        },
        message: "Thought must be between 1 and 280 characters",
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (v) => new Date(v).toLocaleString(),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    virtuals: {
      reactionCount: {
        get() {
          return this.reactions.length;
        },
      },
    },
  }
);

const Thought = model("thought", thoughtSchema);
module.exports = Thought;
