// import sharedSchemas from './schemas/shared.schemas';
import authSchemas from './auth/auth.schema';
import jobSchemas from './job/job.schema';
// import subCategorySchemas from './schemas/sub-category.schemas';
// import couponSchemas from './schemas/coupon.schemas';
// import productSchemas from './schemas/product.schemas';

export default {
  schemas: {
    // ...sharedSchemas,
    ...authSchemas,
    ...jobSchemas,
    // ...subCategorySchemas,
    // ...couponSchemas,
    // ...productSchemas,
  },
  securitySchemes: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
  responses: {
    UnauthorizedError: {
      description: 'Access token is missing or invalid',
    },
  },
};
