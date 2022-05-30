'use strict';
const server = require('../src/server');
const superTest = require('supertest');
const { describe } = require('yargs');
const request = superTest(server.app);

describe('API Testing', () => {
  test();
});
