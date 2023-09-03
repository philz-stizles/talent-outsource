import Token from '@src/models/token';

describe('Token Model', () => {
  it('has all the required attributes', () => {
    const requiredAttributes = ['userId', 'token'];

    const modelAttributes = Object.keys(Token.schema.paths);

    const hasRequiredAttributes = requiredAttributes.every(
      (requiredAttribute) => modelAttributes.includes(requiredAttribute)
    );

    expect(hasRequiredAttributes).toEqual(true);
  });
});