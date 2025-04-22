# GitHub User Finder

A modern, responsive React app to search for GitHub users and view beautiful, detailed profiles—built for speed, clarity, and a delightful user experience.

## ✨ Features

- **Live Search:** Instantly search GitHub users by username with a debounced, API-efficient search bar.
- **User List:** Browse search results in a clean, responsive grid.
- **Detailed Profiles:** Click any user to view a full, colorful profile including:
  - Avatar, username, and real name
  - Bio, location, email, company, website, Twitter
  - Public repos, followers, following
  - Hireable status, account creation & update dates, user type, and GitHub staff badge
  - All details enhanced with vibrant icons
- **Fullscreen Split Layout:** Search and user list on the left, profile details on the right—fully responsive for desktop and mobile.
- **Modern UI:** Beautiful gradients, colored icons, and a smooth, intuitive experience.
- **Error Handling:** Graceful handling of API errors and empty states.

## 📸 Screenshots

<!-- Add your screenshots in a 'screenshots' folder and update the links below -->
![Search and User List](./screenshots/search-list.png)
![User Details](./screenshots/user-details.png)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/GitHub-User-Finder.git
cd GitHub-User-Finder/client

# Install dependencies
npm install
# or
yarn install
```

### Running the App

```bash
npm start
# or
yarn start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🗂️ Folder Structure

```
client/
  src/
    components/
      SearchBar.jsx
      UserList.jsx
      UserDetails.jsx
    App.jsx
    App.css
    index.js
    index.css
```

## ⚙️ Customization & Deployment
- Update styles in `App.css` for your own color palette.
- Easily deploy to Netlify, Vercel, or any static hosting provider.

## 📦 Dependencies
- React
- react-icons
- (Optional) Tailwind CSS for utility classes (if you use them)

## 🙏 Credits
- [GitHub REST API](https://docs.github.com/en/rest)
- [react-icons](https://react-icons.github.io/react-icons/)

## 📝 License

MIT License. Use, modify, and share freely!
