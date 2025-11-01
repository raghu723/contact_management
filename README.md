# Contact Management — Line Ending Notes

Quick overview
- A simple React-based contact management app to add, edit, delete, and search contacts.
- Purpose: demo app for learning React, state management, and basic CRUD UI.

Features
- Add new contacts (name, email, phone, notes).
- Edit and delete existing contacts.
- Search and filter contacts.
- Persist contacts locally (localStorage) or via API if configured.
- Responsive UI suitable for desktop and mobile.

Prerequisites
- Node.js (>= 14) and npm or yarn installed.

Getting started (development)
1. Install dependencies:
   - npm: npm install
   - yarn: yarn
2. Run the dev server:
   - npm: npm start
   - yarn: yarn start
3. Open http://localhost:3000 in your browser (default CRA port).

Build for production
- npm run build
- yarn build
Output is in the build/ directory ready to be served.

Environment / configuration
- If the project uses a .env, copy .env.example to .env and set variables (API_URL, etc.).

Testing & linting (if available)
- npm test
- npm run lint

Project structure (typical)
- public/ — static files and index.html
- src/ — React source code
  - Components/ — UI components
  - css/ — styles
  - index.js — app entry

Troubleshooting
- If you see Git line-ending warnings (LF ↔ CRLF), consider adding a .gitattributes with:
  ```
  * text=auto eol=lf
  ```
  Then normalize:
  ```
  git add .gitattributes
  git rm --cached -r .
  git add .
  git commit -m "Normalize line endings"
  ```
- Ensure Node and package manager versions match prerequisites.

Contact / next steps
- Add info about any backend/API, data model, or additional scripts here as needed.
