import dom from '../dom.js';

const createPostDom = (post) => {
    const container = document.createElement('div');
    container.id = 'container';

    const h1 = document.createElement('h1');
    h1.innerText = post.title;

    const codeText = document.createElement('code');
    codeText.innerText = `posted by user: ${post.userId}`;

    const p = document.createElement('p');
    p.innerText = post.body;

    container.append(h1, codeText, p);
    return container;
    // dom.root.append(container);
};

export default createPostDom;
