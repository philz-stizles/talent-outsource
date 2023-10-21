import path from 'path';
import fs from 'fs';
import bcrypt from 'bcryptjs';
import User, { IUser } from '@src/models/user';
import config from '@src/config';
import { RoleType } from '@src/models/role';

console.log(__dirname);

const seedPermissions = () => {
  try {
    const permissions = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'data', 'permissions.json'), 'utf-8')
    );
  } catch (error) {
    console.log('SEED PERMISSIONS: ', error);
    throw error;
  }
};

const seedRoles = async () => {
  try {
    const roles = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'data', 'roles.json'), 'utf-8')
    );
  } catch (error) {
    console.log('SEED ROLES: ', error);
    throw error;
  }
};

const seedDefaultUsers = async () => {
  try {
    const adminUser: Partial<IUser> = {
      email: config.admin.username,
      firstname: 'Theophilus',
      lastname: 'Ighalo',
      password: await bcrypt.hash(config.admin.password, 8),
      role: RoleType.ADMIN,
    };
    await User.findOneAndUpdate({ email: adminUser.email }, adminUser, {
      upsert: true,
    });
  } catch (error) {
    console.log('SEED DEFAULT USERS: ', error);
    throw error;
  }
};

const seedCompanies = () => {
  try {
    const companies = JSON.parse(
      fs.readFileSync(path.join(__dirname, 'data', 'companies.json'), 'utf-8')
    );
  } catch (error) {
    
  }
};

const seedData = async () => {
  try {
    await seedDefaultUsers();


  } catch (error) {
    console.log('SEEDING ERROR: ', error);
  } finally {
    console.log('Seeding Complete!!');
  }
};

export default seedData;
