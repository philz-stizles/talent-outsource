import companyController from '@src/services/modules/companies';
import express from 'express';

const router = express.Router();

router
  .route('/companies')
  .post(companyController.createCompany)
  .get(companyController.getCompanies);

router
  .route('/companies/:id')
  .get(companyController.getCompany)
  .put(companyController.updateCompany)
  .delete(companyController.deleteCompany);

export default router;
