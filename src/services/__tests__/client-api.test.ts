// const fetchClients = require('../client-api');
//import axios from 'axios';

const fetchClients = jest.fn(() => Promise.resolve());

it('fetches results from json server', () => {
  const p = Promise.resolve('some value');

  expect(p).resolves.toBe('some value');
});

//fetchClients.fetchClients().then(response => {expect(response).toEqual();
