import { fetchClients } from '../client-api';
it('fetches results from json server', () => {
  const mockTimeEntriesData = {
    client: 0.1,
    id: 0.1,
    startTimestamp: '2019-09-23T07:00:00.000Z',
    stopTimestamp: '2019-09-23T15:30:00.000Z'
  };

  const mockJsonPromise = Promise.resolve(mockTimeEntriesData);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise
  });

  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

  fetchClients();

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    'http://localhost:3000/clients?_sort=client&_order=desc'
  );

  global.fetch.mockClear();
  delete global.fetch;
});
