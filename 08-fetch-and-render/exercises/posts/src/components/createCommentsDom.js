const createCommentsDom = (comment = {}) => {
    const commentsContainer = document.createElement('div');
    commentsContainer.id = comment.id;
    commentsContainer.className = 'comment';

    const h2 = document.createElement('h2');
    h2.innerText = comment.name;

    const code = document.createElement('code');
    code.innerText = `comment by: ${comment.email}`;

    const p = document.createElement('p');
    p.innerText = comment.body;

    commentsContainer.append(h2, code, p);

    return commentsContainer;
};
export default createCommentsDom;
