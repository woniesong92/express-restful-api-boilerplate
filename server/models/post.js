import mongoose from 'mongoose'

const Post = new mongoose.Schema({
  title: String,
  text: String
})

export default mongoose.model('Post', Post)
