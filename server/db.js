import mongoose from 'mongoose'
import http from 'http'

export default function(callback) {
  mongoose.connect('mongodb://localhost/myapp')
	callback()
}
