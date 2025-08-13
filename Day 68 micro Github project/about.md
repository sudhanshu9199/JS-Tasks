# GitHub User Finder — Project Overview

## 📋 What is this?

This is a simple web app to **search for any GitHub user** and view their public profile details.  
It uses the [GitHub REST API](https://docs.github.com/en/rest) to fetch user data and displays it in a clean card format.

---

## 🚀 How to Use

1. **Enter a GitHub username** in the input box.
2. **Click "Search"**.
3. The app will show a loading skeleton, then display the user's profile info.
4. If the user is not found, an error message will appear.

---

## 🛠️ Main Features

- Fetches and displays:
  - Avatar
  - Name
  - Bio
  - Public repo count
  - Followers & following
  - Location, company, blog link
  - Direct link to GitHub profile
- Shows a loading skeleton while fetching data
- Handles errors (user not found, network issues)
- Responsive and easy to use

---

## 🧩 Code Structure & Functions

### 1. `getProfileData(username)`

- **Purpose:** Fetches user profile data from GitHub API.
- **Returns:** A Promise that resolves to user JSON data.
- **Usage:**  
  ```js
  getProfileData('octocat').then(data => { ... });

### 2. `getUserRepos(username)`
- **Purpose:** Fetches user's public repositories (not shown in UI yet, but ready for extension).
- **Returns:** A Promise with array of repo objects.

### 3. `devorateProfileData(details)`
- **Purpose:** Renders the user profile card in the DOM.
- **Parameters:** details — user data object from API.
- **Usage:**
Called after successful fetch to display user info.

### 4. Event Handling
- **Search Button (`#submitBtn`):**
- Prevents default form submit.
- Gets username from input.
- Shows skeleton loader.
- Calls `getProfileData()`.
- On success: calls `devorateProfileData()`, hides skeleton, shows card.
- On error: shows error message.

---

## 🖥️ UI Flow
1. User enters username → clicks Search.
2. Skeleton loader appears.
3. Fetch request sent to GitHub API.
4. On success: profile card rendered.
5. On error: error message shown.

---

## 📦 Files
- `index.html` — Main HTML structure
- `style.css` — Styles (not shown here)
- `script.js` — All logic and event handling
- `about.md` — Project documentation

---

## 💡 Extending the Project
- Display user's repositories (use `getUserRepos`)
- Add dark mode
- Show more profile details (email, Twitter, etc.)
- Improve error handling and UX

## 👨‍💻 Developed By
Sudhanshu Ghosh

## 🔗 API Reference
GitHub Users API||