import mongoose from 'mongoose'
import http from 'http'

export default function(callback) {
  // Set DATABASE_URL environment variable on production
  const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost/myapp'
  mongoose.connect(DATABASE_URL)
	callback()
}
