import express from 'express';
import controller from './controller';
import validator from '../validator'

const router = express.Router();

router.post('/', validator.sendgrid.create, controller.create); // Update the route to call the correct controller function
router.post('/:id',validator.sendgrid.create,controller.createbyid)

export default router
