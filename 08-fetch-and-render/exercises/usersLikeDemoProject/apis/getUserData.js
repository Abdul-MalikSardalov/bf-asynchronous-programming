const getUserData = async (id = 1, todo = '') => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}/${todo}`;
    const response = await fetch(url);
    try {
        if (!response.ok) {
            throw new Error(`Server error with ${response.status} status`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export default getUserData;
