import swaggerUI from 'swagger-ui-express';
import express from 'express';
import authRoutes from './auth.routes';
import profileRoutes from './profile.routes';
import companyRoutes from './company.routes';
import jobRoutes from './job.routes';
import swaggerDoc from '@src/docs';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/company', companyRoutes);
router.use('/jobs', jobRoutes);

// API documentation.
if(process.env.NODE_ENV !== 'production') {
    router.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
}

export default router;
