import User from '@src/models/user';
import { RoleType } from '../role';

describe('User Model', () => {
  it('has all the required attributes', () => {
    const requiredAttributes = [
      'email',
      'password',
      'firstname',
      'lastname',
      'isEmailVerified',
    ];
    const modelAttributes = Object.keys(User.schema.paths);
    expect(
      requiredAttributes.every(expectedKey =>
        modelAttributes.includes(expectedKey)
      )
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

  it('should throw an error if the email is duplicated', async () => {
    try {
      // Create new mock User
      const newMockUser = {
        email: 'testuser@mail.com',
        password: 'password',
        role: RoleType.ADMIN,
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

  it('should throw an error if the role field is empty', async () => {
    try {
      await new User({
        email: 'testuser@mail.com',
        password: '',
      }).save();
    } catch (err: any | unknown) {
      expect(err.errors.role.kind).toEqual('required');
    }
  });
});
