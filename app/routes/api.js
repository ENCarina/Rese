import Router from 'express'
import ResearchController from '../controllers/researchController.js'
import ResearcherController from '../controllers/researcherController.js'

const router = Router()

router.get('/researches', ResearchController.index)
router.post('/researches', ResearchController.store)
router.put('/researches', ResearchController.update)
router.delete('/researches', ResearchController.destroy)

router.get('/researchers', ResearcherController.index)
router.post('/researchers', ResearcherController.store)
router.put('/researchers', ResearcherController.update)
router.delete('/researchers', ResearcherController.destroy)

export default router
