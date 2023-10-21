export default {
  '/jobs': {
    post: {
      summary: 'Create Job',
      tags: ['Jobs'],
      description: 'Create a new job posting',
      // operationId: '',
      parameters: [],
      requestBody: {
        // expected request body
        required: true,
        content: {
          // content-type
          'application/json': {
            schema: {
              $ref: '#/components/schemas/JobInput', // todo input data model
            },
          },
        },
      },
      responses: {
        '201': {
          description: 'Job was created successfully',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Response',
              },
            },
          },
        },
        401: { description: 'Unauthorized access' },
        404: { description: 'Dependency was not found' },
        500: { description: 'Server error' },
      },
    },
    get: {
      summary: 'Get job list',
      tags: ['Jobs'],
      description: 'Get all jobs',
      // operationId: 'getTodos',
      parameters: [],
      responses: {
        '200': {
          description: 'Returns a list of available jobs',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/JobInput',
                },
              },
            },
          },
        },
        '400': {
          description: 'Returns a list of available jobs',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#/components/schemas/JobInput',
              },
            },
          },
        },
      },
    },
  },
  '/jobs/{slug}': {
    get: {
      summary: 'Get a job by its slug',
      tags: ['Jobs'],
      description: 'Create a new sub-job',
      // operationId: '',
      parameters: [
        {
          in: 'path',
          name: 'slug',
          schema: {
            type: 'string',
          },
          required: true,
          description: 'Job slug',
        },
      ],
      responses: {
        '200': {
          description: 'Job was created successfully',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Response',
              },
            },
          },
        },
        401: { description: 'Unauthorized access' },
        404: { description: 'Dependency was not found' },
        500: { description: 'Server error' },
      },
    },
    put: {
      summary: 'Update an existing job',
      tags: ['Jobs'],
      description: 'Create a new sub-job',
      // operationId: '',
      parameters: [
        {
          in: 'path',
          name: 'slug',
          schema: {
            type: 'string',
          },
          required: true,
          description: "The target job's slug",
        },
      ],
      requestBody: {
        // expected request body
        required: true,
        content: {
          // content-type
          'application/json': {
            schema: {
              $ref: '#/components/schemas/JobInput', // todo input data model
            },
          },
        },
      },
      responses: {
        '200': {
          description: 'Job was created successfully',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Response',
              },
            },
          },
        },
        401: { description: 'Unauthorized access' },
        404: { description: 'Dependency was not found' },
        500: { description: 'Server error' },
      },
    },
  },
};
