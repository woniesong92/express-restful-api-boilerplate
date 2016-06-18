import { Router } from 'express'
import posts from './posts'
import comments from './comments'

export default function() {
  const router = Router()

  // Add all the endpoints here
  router.use('/posts/', posts())
  router.use('/posts/:post_id/comments', comments())

  router.get('/', (req, res) => {
    res.json({
      version : '1.0'
    })
  })

  return router
}
