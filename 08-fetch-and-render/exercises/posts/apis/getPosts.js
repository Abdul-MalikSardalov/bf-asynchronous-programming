const getPost = async (id = '', category = '') => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const res = await fetch(`${url}/${id}/${category}`);
        if (!res.ok) {
            throw new Error(
                `Failed to fetch a pokemon with status: ${res.status}`,
            );
        }
        const postsData = await res.json();
        return postsData;
    } catch (error) {
        console.error('An error occurred:', error.message);
        return null;
    }
};

export default getPost;
