import mongoose from 'mongoose'

const Comment = new mongoose.Schema({
  text: String
})

export default mongoose.model('Comment', Comment)
