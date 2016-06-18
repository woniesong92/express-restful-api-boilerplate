import { Router } from 'express'

export default function() {
  const router = Router()

	// Add Middleware here
  router.use((req, res, next) => {
    // console.log("Something is happening...")
    next()
  })

	return router
}
