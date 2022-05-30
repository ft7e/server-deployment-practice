'use strict';
const server = require('../src/server');
const superTest = require('supertest');
const request = superTest(server.app);

describe('API Testing', () => {
  test('Home page testing ', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('this route is working');
  });
  test('Data route testing', async () => {
    const response = await request.get('/data');
    expect(response.status).toEqual(200);
    expect(typeof response.body).toEqual('object');
  });
  test('Handle 404', async () => {
    const response = await request.get('/mustBeError');
    expect(response.status).toEqual(404);
  });
  test('Handle Internal Error', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(500);
  });
});
