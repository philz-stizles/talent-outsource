export default {
  '/skills': {
    post: {
      summary: 'Create Skill',
      tags: ['Skills'],
      description: 'Create a new skill posting',
      // operationId: '',
      parameters: [],
      requestBody: {
        // expected request body
        required: true,
        content: {
          // content-type
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SkillInput', // todo input data model
            },
          },
        },
      },
      responses: {
        '201': {
          description: 'Skill was created successfully',
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
      summary: 'Get skill list',
      tags: ['Skills'],
      description: 'Get all skills',
      // operationId: 'getTodos',
      parameters: [],
      responses: {
        '200': {
          description: 'Returns a list of available skills',
          content: {
            'application/json': {
              schema: {
                type: 'array',
                items: {
                  $ref: '#/components/schemas/SkillInput',
                },
              },
            },
          },
        },
        '400': {
          description: 'Returns a list of available skills',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                $ref: '#/components/schemas/SkillInput',
              },
            },
          },
        },
      },
    },
  },
  '/skills/{slug}': {
    get: {
      summary: 'Get a skill by its slug',
      tags: ['Skills'],
      description: 'Create a new sub-skill',
      // operationId: '',
      parameters: [
        {
          in: 'path',
          name: 'slug',
          schema: {
            type: 'string',
          },
          required: true,
          description: 'Skill slug',
        },
      ],
      responses: {
        '200': {
          description: 'Skill was created successfully',
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
      summary: 'Update an existing skill',
      tags: ['Skills'],
      description: 'Create a new sub-skill',
      // operationId: '',
      parameters: [
        {
          in: 'path',
          name: 'slug',
          schema: {
            type: 'string',
          },
          required: true,
          description: "The target skill's slug",
        },
      ],
      requestBody: {
        // expected request body
        required: true,
        content: {
          // content-type
          'application/json': {
            schema: {
              $ref: '#/components/schemas/SkillInput', // todo input data model
            },
          },
        },
      },
      responses: {
        '200': {
          description: 'Skill was created successfully',
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
