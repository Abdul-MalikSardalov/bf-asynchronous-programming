import data from '../data.js';

const getUser = async (id = 1) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    try {
        if (!res.ok) {
            throw new Error(
                `Failed to fetch a user with status: ${res.status}`,
            );
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
};

export default getUser;
