import User from './../user';

describe('User Model', () => {
  it('has all the required attributes', () => {
    const expectedKeys = [
      'email',
      'passwords',
      'firstname',
      'lastname',
      'isEmailVerified',
    ];
    const modelAttributes = Object.keys(User.schema.paths);
    expect(
      expectedKeys.every((expectedKey) => modelAttributes.includes(expectedKey))
    ).toEqual(true);
  });

  it('should throw an error if the email field is empty', async () => {
    try {
      await new User({
        firstname: 'Test First Name',
        lastname: 'Test Last Name',
        email: '',
        password: 'password',
      }).save();
    } catch (err: any | unknown) {
      expect(err.errors.email.kind).toEqual('required');
    }
  });

  it('should throw an error if the name email is duplicated', async () => {
    try {
      // Create new mock User
      const newMockUser = {
        fullname: 'Test User',
        email: 'testuser@mail.com',
        password: 'password',
      };

      // Save new mock User
      await new User(newMockUser).save();

      // Save duplicate mock User
      await new User(newMockUser).save();
    } catch (err: any | unknown) {
      expect(err.code).toEqual(11000);
    }
  });

  it('should throw an error if the password field is empty', async () => {
    try {
      await new User({
        fullname: 'Test User',
        email: 'testuser@mail.com',
        password: '',
      }).save();
    } catch (err: any | unknown) {
      expect(err.errors.password.kind).toEqual('required');
    }
  });
});
