# Portfolio

## Overview

This is a personal portfolio project built with React, Node.js, and Firebase. It showcases skills, projects, and contact information, and is designed for easy customization and deployment.

---

## Directory Structure

```text
Portfolio/
├── apphosting.yaml         # Firebase/Cloud Run backend config
├── firebase.json           # Firebase hosting config
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation (this file)
├── Server.js               # Express server for contact form (email)
├── build/                  # Production build output
│   ├── asset-manifest.json # Asset mapping for build
│   ├── ...                 # Static build files (HTML, JS, CSS, images, etc.)
│   ├── data/               # Build-time copies of dynamic text
│   └── static/             # Bundled static assets (css, js, media)
├── public/                 # Public static assets
│   ├── index.html          # Main HTML template
│   ├── data/               # Text files for dynamic banner content
│   └── ...                 # Images, manifest, favicon, etc.
├── src/                    # Source code
│   ├── App.js              # Main React app component
│   ├── App.test.js         # App test (Jest/RTL)
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles
│   ├── logo.svg            # Sample logo
│   ├── reportWebVitals.js  # Web Vitals reporting
│   ├── setupTests.js       # Jest setup
│   ├── assets/             # Fonts and images
│   ├── components/         # React components
│   │   ├── Banner.js       # Banner/intro section
│   │   ├── Contact.js      # Contact form section
│   │   ├── NavBar.js       # Navigation bar
│   │   ├── ProjectCard.js  # Project card component
│   │   ├── Projects.js     # Projects section
│   │   ├── Skills.js       # Skills section
│   │   └── StatsBanner.js  # Stats display
│   ├── CSS/                # Component-specific CSS
│   └── data/               # (Legacy) text files for banner
└── ...
```

---

## Key Files and Folders

- **apphosting.yaml**: Configures backend deployment for Firebase/Cloud Run.
- **firebase.json**: Firebase hosting settings and rewrites.
- **Server.js**: Express server for handling contact form submissions via nodemailer (uses environment variables for credentials).
- **build/**: Output of `npm run build`, ready for deployment.
- **public/**: Static files served directly, including `index.html` and dynamic text for the banner.
- **src/**: All React source code, assets, and styles.
  - **components/**: Modular React components for each section of the portfolio.
  - **assets/**: Fonts and images used in the UI.
  - **CSS/**: CSS files for each component.
  - **data/**: (Legacy) text files, not used in production.

---

## Main Features

- **Responsive Design**: Adapts to all screen sizes using Bootstrap.
- **Dynamic Banner**: Banner text and description are loaded from `public/data/toRotate.txt` and `public/data/description.txt`.
- **Skills & Projects**: Easily editable in `src/components/Skills.js` and `src/components/Projects.js`.
- **Contact Form**: Sends email using Express backend (`Server.js`) and nodemailer. Requires `.env` file with `EMAIL_USER` and `EMAIL_PASS`.
- **Firebase Hosting**: Ready for deployment to Firebase or any static hosting provider.

---

## Scripts

- `npm start` — Start development server
- `npm run build` — Build for production
- `npm test` — Run tests
- `npm run deploy` — Build and deploy to Firebase

---

## Customization

- **Update Skills/Projects**: Edit `src/components/Skills.js` and `src/components/Projects.js`.
- **Banner Text**: Edit `public/data/toRotate.txt` and `public/data/description.txt`.
- **Images/Logos**: Replace files in `public/` or `src/assets/img/`.
- **Contact Email**: Set up `.env` with your email credentials for nodemailer.

---

## Deployment

1. Build the project:

   ```powershell
   npm run build
   ```

2. Deploy the `build/` folder to Firebase, Netlify, Vercel, or your preferred static host.

---

## Example .env for Email (not committed to repo)

```env
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
```

---

## License

MIT License

---

## Credits

- Built with [React](https://reactjs.org/), [Bootstrap](https://getbootstrap.com/), [Nodemailer](https://nodemailer.com/), and [Firebase](https://firebase.google.com/).

---

*This README was auto-generated to reflect the complete project structure and configuration as of June 6, 2025.*


