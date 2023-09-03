import Job from '@src/models/job';

describe('Job Model', () => {
  it('has all the required attributes', () => {
    const requiredAttributes = ['title', 'description'];

    const modelAttributes = Object.keys(Job.schema.paths);

    const hasRequiredAttributes = requiredAttributes.every(requiredAttribute =>
      modelAttributes.includes(requiredAttribute)
    );

    expect(hasRequiredAttributes).toEqual(true);
  });
});
