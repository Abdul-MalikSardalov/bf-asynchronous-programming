const createUserCard = (userData) => {
    //
    const container = document.createElement('div');
    container.className = 'container';
    container.id = `user-${userData.id}`;

    const userUserName = document.createElement('h1');
    userUserName.innerText = userData.username;

    const userName = document.createElement('p');
    userName.innerText = `Name: ${userData.name}`;
    userName.className = 'userName';

    const userEmail = document.createElement('p');
    userEmail.innerText = `Email: ${userData.email}`;
    userEmail.className = 'userEmail';

    const userWebsite = document.createElement('p');
    userWebsite.innerHTML = `Website: <a href="${userData.website}">${userData.website}</a>`;
    userWebsite.className = 'userWebsite';

    container.append(userUserName, userName, userEmail, userWebsite);

    return container;
};

export default createUserCard;
