import mongoose, { Schema, model, Document, Model } from 'mongoose';

interface IBlog extends Document {
  title: string;
  image: string;
  body: string;
  tags: string[];
  category: string;
  author: string;
}

const BlogSchema: Schema<IBlog> = new Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    body: { type: String, required: true },
    tags: { type: [String], default: [] },
    category: { type: String, required: true },
    author: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const Blog: Model<IBlog> = model<IBlog>('Blog', BlogSchema);
export default Blog;
