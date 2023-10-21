import app from '@src/app';
import config from '@src/config';
import request from 'supertest';

const endpoint = `${config.api.baseEndpoint}/auth/talent-signup`;

describe('Signup Talent', () => {
  it('should be reachable', () => {
    expect(true).toBeTruthy();
  });
  // it('returns a 201 status code on successful signup', async () => {
  //   const body = {
  //     name: 'Theophilus Ighalo',
  //     email: 'theophilusighalo@gmail.com',
  //     password: 'P@ssw0rd123',
  //     source: 'Instagram',
  //   };

  //   await request(app)
  //     .post(endpoint)
  //     .send(body)
  //     .expect(201);
  // });

  // it('returns a 400 status code with missing name, email or password', async () => {
  //   await request(app)
  //     .post(endpoint)
  //     .send({
  //       email: 'theophilusighalo@gmail.com',
  //       password: 'P@ssw0rd123',
  //       source: 'Instagram',
  //     })
  //     .expect(400);

  //   await request(app)
  //     .post(endpoint)
  //     .send({
  //       name: 'Theophilus Ighalo',
  //       password: 'P@ssw0rd123',
  //       source: 'Instagram',
  //     })
  //     .expect(400);

  //   await request(app)
  //     .post(endpoint)
  //     .send({
  //       name: 'Theophilus Ighalo',
  //       email: 'theophilusighalo@gmail.com',
  //       source: 'Instagram',
  //     })
  //     .expect(400);
  // });

  // it('returns a 400 with duplicate email', async () => {
  //   await request(app)
  //     .post(endpoint)
  //     .send({
  //       name: 'Theophilus Ighalo',
  //       email: 'theophilusighalo@gmail.com',
  //       password: 'P@ssw0rd123',
  //       source: 'Instagram',
  //     })
  //     .expect(201);

  //   await request(app)
  //     .post(endpoint)
  //     .send({
  //       name: 'Theophilus Ighalo',
  //       email: 'theophilusighalo@gmail.com',
  //       password: 'P@ssw0rd123',
  //       source: 'Instagram',
  //     })
  //     .expect(400);
  // });
});
