import { Router } from 'express'
import Post from '../models/post'

export default () => {
  const router = Router()

  router.route('/')
    .post((req, res) => {
      let post = new Post()
      post.title = req.body.title
      post.text = req.body.text
      post.save(err => {
        (err ? res.send(err) : res.json({ message: 'Post created!' }))
      })
    })

    .get((req, res) => {
      Post.find((err, posts) => {
        (err ? res.send(err) : res.json(posts))
      })
    })

  router.route('/:post_id')
    // get the post with that id (accessed at GET http://localhost:8080/api/posts/:post_id)
    .get((req, res) => {
      Post.findById(req.params.post_id, (err, post) => {
        (err ? res.send(err) : res.json(post))
      })
    })

    .put((req, res) => {
      Post.findByIdAndUpdate(req.params.post_id, req.body, (err, post) => {
        (err ? res.send(err) : res.json({ message: 'Post updated!' }))
      })
    })

    .delete((req, res) => {
      Post.findByIdAndRemove(req.params.post_id, (err, post) => {
        (err ? res.send(err) : res.json({ message: 'Post deleted!' }))
      })
    })
  return router
}
