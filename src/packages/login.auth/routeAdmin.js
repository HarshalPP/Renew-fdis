import express from 'express'
import controller from './controller'
// import { adminAuthentication } from '../../middleware';

const router = express.Router()

router.post('/:id', controller.create)
router.patch('/:id', controller.update)
router.get('/', controller.index)
router.get('/:id', controller.show)
router.delete('/:id', controller.deleteRecord)
router.post('/create',controller.create1)
router.get('/get',controller.index1)
router.get('/get/:id',controller.show1)


export default router
