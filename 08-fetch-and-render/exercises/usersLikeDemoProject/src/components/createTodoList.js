const createTodoList = (data) => {
    const todosDiv = document.createElement('div');
    todosDiv.id = 'comments';

    const checkDiv = document.createElement('div');
    checkDiv.id = `todo-${data.id}`;
    checkDiv.className = 'todo';

    const input = document.createElement('input');
    input.type = 'checkbox';

    const text = document.createElement('code');
    text.innerText = data.title;

    checkDiv.append(input, text);
    todosDiv.appendChild(checkDiv);

    if (data.completed === true) {
        input.checked = true;
    }

    return todosDiv;
};

export default createTodoList;
