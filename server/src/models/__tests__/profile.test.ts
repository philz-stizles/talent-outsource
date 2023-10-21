import Profile from '@src/models/profile';

describe('Profile Model', () => {
  it('has all the required attributes', () => {
    const requiredAttributes = ['user', 'yearsOfExperience'];

    const modelAttributes = Object.keys(Profile.schema.paths);

    const hasRequiredAttributes = requiredAttributes.every(
      (requiredAttribute) => modelAttributes.includes(requiredAttribute)
    );

    expect(hasRequiredAttributes).toEqual(true);
  });
});
