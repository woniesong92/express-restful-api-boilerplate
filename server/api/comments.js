import { Router } from 'express'
import Comment from '../models/comment'

export default () => {
  const router = Router({ mergeParams: true })

  router.route('/')
    .post((req, res) => {
      let comment = new Comment()
      comment.text = req.body.text
      comment.save(err => {
        (err ? res.send(err) : res.json({ message: 'Comment created!' }))
      })
    })

    .get((req, res) => {
      Comment.find((err, comments) => {
        (err ? res.send(err) : res.json(comments))
      })
    })

  router.route('/:comment_id')
    // get the comment with that id (accessed at GET http://localhost:8080/api/comments/:comment_id)
    .get((req, res) => {
      Comment.findById(req.params.comment_id, (err, comment) => {
        (err ? res.send(err) : res.json(comment))
      })
    })

    .put((req, res) => {
      Comment.findByIdAndUpdate(req.params.comment_id, req.body, (err, comment) => {
        (err ? res.send(err) : res.json({ message: 'Comment updated!' }))
      })
    })

    .delete((req, res) => {
      Comment.findByIdAndRemove(req.params.comment_id, (err, comment) => {
        (err ? res.send(err) : res.json({ message: 'Comment deleted!' }))
      })
    })

  return router
}
