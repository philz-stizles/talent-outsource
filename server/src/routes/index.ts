import swaggerUI from 'swagger-ui-express';
import express from 'express';
import authRoutes from './auth.routes';
import profileRoutes from './profile.routes';
import companyRoutes from './company.routes';
import jobRoutes from './job.routes';
import skillRoutes from './skill.routes';
import swaggerDoc from '@src/docs';
import logger from '@src/config/logger';
import config from '@src/config';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/company', companyRoutes);
router.use('/jobs', jobRoutes);
router.use('/skills', skillRoutes);

// API documentation.
if (config.env !== 'production') {
  const docsEndpoint = '/docs';
  router.use(docsEndpoint, swaggerUI.serve, swaggerUI.setup(swaggerDoc));
  const { baseUrl, baseEndpoint } = config.api;
  logger.info(`API Docs available @${baseUrl}${baseEndpoint}${docsEndpoint}`);
}

export default router;
