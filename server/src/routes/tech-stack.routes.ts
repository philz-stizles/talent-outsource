import { skillController } from '@src/controllers';
import { validator } from '@src/middlewares';
import { skillValidation } from '@src/validations';
import express from 'express';

const router = express.Router();

router
  .route('/')
  .get(skillController.list)
  .post(validator(skillValidation.create), skillController.create);

router
  .route('/:id')
  .get(skillController.read)
  .put(validator(skillValidation.update), skillController.update)
  .delete(skillController.archive);

export default router;
