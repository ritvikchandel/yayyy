const users = ['Ritvik🥺', 'Smriti💋'];

const memberDiv = document.querySelector('.memberDiv');
const addIcon = document.querySelector('.addIcon');

const userIcons = () => {
    users.reverse();
    users.map((curElem) => {
        // Change the usernames to match the file names (ritvik.html and smriti.html)
        const userLink = curElem === 'Ritvik🥺' ? 'ritvik.html' : 'smriti.html';
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><a href="${userLink}"><span>${curElem}</span></a></button>
        `);
    });
};

addIcon.addEventListener('click', () => {
    let userName = prompt('Please enter your name');

    if (userName != null && !users.includes(userName)) {
        users.push(userName);
        console.log(users);
        // Change the username to match the file name (e.g., 'ritvik.html' or 'smriti.html')
        const userLink = userName === 'Ritvik🥺' ? 'ritvik.html' : 'smriti.html';
        memberDiv.insertAdjacentHTML('afterbegin', `
        <button class="btn"><a href="${userLink}"><span>${userName}</span></a></button>
        `);
    } else {
        alert('Username already exists');
    }
});

userIcons();
