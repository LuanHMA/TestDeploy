import { Schema, model } from "mongoose";

const TodoShema = new Schema({
  description: {
    type: String,
    required: true,
  },

  done: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const TodoModel = model("lists", TodoShema);
