async function getUserData(username) {
    const raw = await fetch(`https://api.github.com/users/${username}`);
    return await raw.json();
}

let submitBtn = document.getElementById('submitBtn');
let inputBox = document.getElementById('inputBox');
let dataDisplay = document.querySelector('.data-display');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let input = inputBox.value.trim();
    console.log(input);
    // getUserData(input).then((data) => {
        
    //     if (data.message === "Not Found") {
    //             dataDisplay.innerHTML = `<p>User not found 🚫</p>`;
    //             return;
    //         }

    //     dataDisplay.innerHTML = `<img src="${data.avatar_url}" alt="${data.login}" width="100">
    //             <h2>${data.name || data.login}</h2>
    //             <p>Followers: ${data.followers}</p>
    //             <p>Following: ${data.following}</p>
    //             <p>Public Repos: ${data.public_repos}</p>`
    // })
    // .catch(err => {
    //     dataDisplay.innerHTML = `<p>Error: ${err.message}</p>`;
    // })

    getUserData(input).then(data => {
        console.log('data:',data);
        
        dataDisplay.innerHTML = `Follows: ${data.following}\n Name: ${data.name}`;
    })
    inputBox.value = '';
})