import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

// --- declare function ---

/**
 * Creates user summaries based on their IDs.
 *
 * This function fetches user data using the provided IDs and returns an array of user summaries.
 *
 * @param {number[]} ids - An array of user IDs for which summaries need to be created.
 * @returns {Promise<Array<{ name: string, city: string, companyName: string }>>} A promise that resolves to an array of user summaries.
 * @throws {Error} If there is an issue fetching user data or processing the summaries.
 *
 */

const createSummaries = async (ids = []) => {
    const promises = ids.map((id) => fetchUserById(id)); // array of promises
    const data = await Promise.all(promises); // returning data

    const userInfo = data.map((user) => ({
        name: user.name,
        city: user.address.city,
        companyName: user.company.name,
    }));

    return userInfo;
};

// --- --- tests --- ---

describe('createSummaries: returns an array of user summaries', () => {
    it('creates a summary for 6', async () => {
        const actual = await createSummaries([6]);
        expect(actual).toEqual([
            {
                name: 'Mrs. Dennis Schulist',
                city: 'South Christy',
                companyName: 'Considine-Lockman',
            },
        ]);
    });
    it('creates a summary for 5, 1, 10', async () => {
        const actual = await createSummaries([5, 1, 10]);
        expect(actual).toEqual([
            {
                name: 'Chelsey Dietrich',
                city: 'Roscoeview',
                companyName: 'Keebler LLC',
            },
            {
                name: 'Leanne Graham',
                city: 'Gwenborough',
                companyName: 'Romaguera-Crona',
            },
            {
                name: 'Clementina DuBuque',
                city: 'Lebsackbury',
                companyName: 'Hoeger LLC',
            },
        ]);
    });
    it('creates a summary for 7, 5', async () => {
        const actual = await createSummaries([7, 5]);
        expect(actual).toEqual([
            {
                name: 'Kurtis Weissnat',
                city: 'Howemouth',
                companyName: 'Johns Group',
            },
            {
                name: 'Chelsey Dietrich',
                city: 'Roscoeview',
                companyName: 'Keebler LLC',
            },
        ]);
    });
    it('creates a summary for no one', async () => {
        const actual = await createSummaries([]);
        expect(actual).toEqual([]);
    });
});

console.log('= = = =  the call stack is empty  = = = =');
