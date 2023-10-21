import Otp from '@src/models/otp';

describe('Otp Model', () => {
  it('has all the required attributes', () => {
    const requiredAttributes = ['userId', 'code', 'expiresAt'];
    const modelAttributes = Object.keys(Otp.schema.paths);

    expect(
      requiredAttributes.every(expectedKey =>
        modelAttributes.includes(expectedKey)
      )
    ).toEqual(true);
  });
});
