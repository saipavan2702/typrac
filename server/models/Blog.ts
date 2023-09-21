import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: String,
    deck: [String],
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
