function getProfileData(username) {
  return fetch(`https://api.github.com/users/${username}`).then((raw) => {
    if (!raw.ok) throw new Error("User not found.");
    return raw.json();
  });
}

function getUserRepos(username) {
  return fetch(
    `https://api.github.com/users/${username}/repos?sort=updated`
  ).then((raw) => {
    if (!raw.ok) throw new Error("Failed to fetch repos...");
    return raw.json();
  });
}

function devorateProfileData(details) {
  console.log(details);

  let data = `
    <img src="${details.avatar_url}" alt="User Avatar" class="avatar">
            <div class="info">
                <h2 class="name">${details.name ? details.name : ""}</h2>
                <p class="bio">${details.bio || "No bio available"}</p>
                <ul>
                    <li>📦 <span class="repos">${
                      details.public_repos ?? 0
                    }</span> Repos</li>
                    <li>👥 <span class="followers">${
                      details.followers ?? 0
                    }</span> Followers</li>
                    <li>🧑‍ Following <span>${
                      details.following ?? 0
                    }</span></li>
                     <li>📍 ${details.location || "Location not available"}</li>
            <li>🏢 ${details.company || "Company not available"}</li>
            <li>🔗 <a href="${details.blog || "#"}" target="_blank">${
    details.blog || "No blog available"
  }</a></li>
                </ul>
                <a href="https://github.com/${
                  details.login
                }" target="_blank" class="profile-link">View Profile</a>
            </div>`;

  card.innerHTML = data;
}
let inputBox = document.getElementById("username");
let card = document.querySelector(".user-card");
let skeleton = document.querySelector(".skeleton");
console.log(card);

document.getElementById("submitBtn").addEventListener("click", (e) => {
  e.preventDefault();
  let input = inputBox.value.trim();
  if (!input) {
    return;
  }
  card.classList.add('hidden');
  skeleton.classList.remove('hidden');

  getProfileData(input).then((data) => {
    console.log(data);
    setTimeout(() => {
        devorateProfileData(data);
        skeleton.classList.add('hidden');
    }, 1200)
    card.classList.remove('hidden');
  })
  .catch(err => {
    skeleton.classList.add('hidden');
    card.classList.remove('hidden');
    card.innerHTML = `<p style="color: red;">${err.message}</p>`;
  })

  inputBox.value = "";
});
