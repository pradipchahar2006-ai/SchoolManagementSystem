# EduCore School Management System

A lightweight React + Vite application for managing school data using browser `localStorage`.

## Overview

EduCore lets a user log in and manage school records for:

- Students
- Classes
- Teachers
- Exams

The app includes a dashboard view, entry forms, and a detail view with delete actions. Data is persisted in `localStorage`, so it remains available after refresh.

## Key Features

- Login page with basic validation
- Dashboard summary of students, classes, teachers, and exams
- Add new student, class, teacher, and exam records
- View and delete existing records
- Client-side persistence through `localStorage`

## Tech Stack

- React 19
- Vite
- ESLint
- React Icons

## Getting Started

### Requirements

- Node.js 18+ or compatible LTS version
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open the URL shown in the terminal to view the app.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Usage

1. Open the app in the browser.
2. Enter a valid email ending with `@gmail.com` and a password longer than 4 characters.
3. Use the sidebar to add records for students, classes, teachers, or exams.
4. Switch to the "Show Detail" page to review and remove records.
5. Data is stored inside the browser, so refresh preserves your records.

## Local Data Storage

The app uses these `localStorage` keys:

- `login` — stores the saved email and password
- `students` — list of student records
- `classes` — list of class records
- `teachers` — list of teacher records
- `exams` — list of exam records

## File Structure

- `src/App.jsx` — application root and context provider
- `src/components/Enter.jsx` — add records and dashboard view
- `src/components/Show.jsx` — display and delete records
- `src/components/Login.jsx` — login form and validation
- `src/components/Navbar.jsx` — page navigation menu
- `src/context/AppContext.jsx` — shared state using React context

## Notes

- Record IDs must be unique for each entity type.
- Student, class, teacher, and exam entries are added only if the ID is valid and not already used.
- The app is a client-side demo and does not include a backend.

## Future Improvements

- Add edit/update support for records
- Add search and filter options
- Use a backend API or database for real persistence
- Improve login security and authentication flow

---

Built with React and Vite for rapid school management prototyping.
