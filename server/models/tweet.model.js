import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    like: {
      type: Array,
      default:[]
    },
  },
  {
    timestamps: true,
  }
);

export const Tweet = mongoose.model("Tweet", tweetSchema);
