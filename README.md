# schlab School Management System

A school-management demo built with React and Vite. Use it to track student, class, teacher, and exam records in your browser.

## Features

- Dashboard showing totals for students, classes, teachers, and exams
- Forms to add student, class, teacher, and exam records
- Tables to review and delete records
- Browser `localStorage` persistence across page refreshes

## Tech stack

- React 19
- Vite 8
- React Icons
- ESLint

## Getting Started

### Prerequisites

- Node.js `^20.19.0` or `>=22.12.0` (required by Vite 8)
- npm (included with Node.js)

### Install dependencies and start the development server

```bash
npm ci
npm run dev
```

Open the local URL printed in the terminal.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the app for production in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## How to Use

1. On the login screen, enter an email ending in `@gmail.com` and a password longer than four characters.
2. Use the navigation to open the dashboard and the record forms.
3. Add student, class, teacher, or exam records.
4. Open the detail tables to review or delete records.

## Data and Security

This project is a front-end demo; it has no server, database, or real authentication. The login screen only checks the email format and password length. It stores the entered email and password in browser `localStorage` as plain text. **Do not use a real, sensitive, or reused password.**

School records are also stored in `localStorage` in the current browser. They are not shared or backed up, and clearing browser data removes them.

## Project Structure

```text
src/
  components/     App screens and shared UI
  context/        Shared React state
  App.jsx         Application layout and state
  main.jsx        Application entry point
public/           Static assets
```

## License

No license has been specified for this project. All rights are reserved unless the repository owner states otherwise.
