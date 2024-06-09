# Hero Flat Application - Frontend

This is the frontend part of the Hero Flat Application, a fully-fledged, full-stack dynamic web app built with Next.js, TypeScript, TailwindCSS, and other modern technologies. The frontend interacts with the backend to provide features like authentication, validation, filtering, and CRUD operations.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js
- npm or yarn
- TypeScript
- NextJS
- Redux
- Tailwindcss
- Axios
- Material UI
- AOS Animation

## Project Structure

```
Hero Flat Application Frontend/
├── components/
│   ├── common/
│   ├── layout/
│   ├── flats/
│   └── user/
├── pages/
│   ├── api/
│   ├── flats/
│   ├── user/
│   ├── _app.tsx
│   ├── index.tsx
│   └── ...
├── public/
├── styles/
│   ├── globals.css
│   └── ...
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/KawsarCoder/Hero-Flat-Frontend
cd hero-flat-frontend
npm install
# or
yarn install
```

### Running the Project

**Development:**

```bash
npm run dev
# or
yarn dev
```

The development server will start on `http://localhost:3000`.

**Production:**

```bash
npm run build
# or
yarn build
```

After building, you can start the production server with:

```bash
npm start
# or
yarn start
```

### Available Scripts

- `dev`: Runs the application in development mode.
- `build`: Builds the application for production.
- `start`: Starts the application in production mode.
- `lint`: Runs ESLint for code quality checks.

## Features

- **Authentication**: Secure user authentication with JWT.
- **Role Management**: Different functionalities for Admin, Super Admin, and User roles.
- **CRUD Operations**: Create, read, update, and delete flats.
- **Filtering**: Filter flats based on various criteria.
- **Responsive Design**: Optimized for different screen sizes using TailwindCSS.
- **Animations**: Smooth animations using AOS Animation.

## Role Features

### Admin

- Manage users (edit, delete, role change, status change).
- Manage all flat requests.
- Add, edit, delete flats.

### User

- View all flats and details.
- Request available flats.
- Update profile.
- Check flat and request status from the dashboard.

## URLs

- **Frontend**: [Hero Flat Frontend](https://hero-flat-frontend.vercel.app/)
- **Backend**: [Hero Flat Backend](https://hero-flat-backend.vercel.app/)

## Video Overview

For a comprehensive overview of the application features, please watch the [full overview video](https://drive.google.com/file/d/1uOCoHrM12E6NOYDOs-EX1GGgLE-2iY9n/view?usp=sharing).
