import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

/**
 * Retrieves geographical coordinates (latitude and longitude) for an array of user IDs.
 *
 * @async
 * @param {number[]} ids - An array of user IDs.
 * @returns {Promise<{lat: string, lng: string}[]>} An array of objects containing latitude and longitude.
 * @throws {Error} If there is an error while fetching user data.
 *
 */

const findGeoCoordinates = async (ids = []) => {
  const promises = ids.map((id) => fetchUserById(id)); // array of promises
  const data = await Promise.all(promises); // making promises => data

  const geo = data.map((user) => ({
    lat: user.address.geo.lat,
    lng: user.address.geo.lng,
  }));

  return geo;
};

// --- --- tests --- ---

describe('findGeoCoordinates: returns an array of user coordinates', () => {
  it('finds coordinates for 6', async () => {
    const actual = await findGeoCoordinates([6]);
    expect(actual).toEqual([{ lat: '-71.4197', lng: '71.7478' }]);
  });
  it('finds coordinates for 8, 6, 4', async () => {
    const actual = await findGeoCoordinates([8, 6, 4]);
    expect(actual).toEqual([
      { lat: '-14.3990', lng: '-120.7677' },
      { lat: '-71.4197', lng: '71.7478' },
      { lat: '29.4572', lng: '-164.2990' },
    ]);
  });
  it('finds coordinates for 4, 7, 5, 6', async () => {
    const actual = await findGeoCoordinates([4, 7, 5, 6]);
    expect(actual).toEqual([
      { lat: '29.4572', lng: '-164.2990' },
      { lat: '24.8918', lng: '21.8984' },
      { lat: '-31.8129', lng: '62.5342' },
      { lat: '-71.4197', lng: '71.7478' },
    ]);
  });
  it('finds coordinates for no one', async () => {
    const actual = await findGeoCoordinates([]);
    expect(actual).toEqual([]);
  });
});

console.log('= = = =  the call stack is empty  = = = =');
