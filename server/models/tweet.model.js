import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

export const Tweet = mongoose.model("Tweet", tweetSchema);
