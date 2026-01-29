# Kanban Task Manager

A modern, full-featured Kanban task management application built with React, TypeScript, and Tailwind CSS. This project demonstrates advanced React Router patterns, authentication, theme management, and responsive design.

## Features

- 🎯 **Board Management**: Create and manage multiple Kanban boards
- 🔐 **Authentication**: Protected routes with login/logout functionality
- 🎨 **Theme Support**: Light and dark mode with persistent theme preferences
- 📱 **Responsive Design**: Mobile-first design that works on all devices
- 🚀 **Modern Stack**: Built with React 19, TypeScript, and Vite
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- 🔒 **Protected Routes**: Route protection with React Router
- 📊 **Dashboard View**: Overview of all available boards

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Pre-commit linting

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── BoardView.tsx
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── ProtectedRoutes.tsx
│   └── Sidebar.tsx
├── context/          # React context providers
│   ├── AuthProvider.tsx
│   └── ThemeContext.tsx
├── data/            # Static data files
│   └── boards.json
├── hooks/           # Custom React hooks
│   ├── useAuth.ts
│   └── useTheme.ts
├── pages/           # Page components
│   ├── Admin.tsx
│   ├── Board.tsx
│   ├── Dashboard.tsx
│   ├── Login.tsx
│   └── NotFound.tsx
├── routes.tsx       # Route configuration
├── types.ts         # TypeScript type definitions
├── App.tsx          # Main app component
└── main.tsx         # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd kanban-task-manager
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Start the development server:

```bash
yarn dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn format` - Format code with Prettier
- `yarn format:check` - Check code formatting

## Features in Detail

### Authentication

- Simple authentication system with login/logout
- Protected routes that require authentication
- Redirect to login page for unauthenticated users

### Theme Management

- Light and dark mode support
- Theme preference persisted across sessions
- Smooth theme transitions

### Routing

- Nested route structure
- Protected route wrapper
- 404 page for unknown routes
- Dynamic board routes (`/board/:boardId`)

## Development

This project uses:

- **Conventional Commits** - For commit message formatting
- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Husky** - Git hooks for pre-commit checks
- **lint-staged** - Run linters on staged files

## License

This project is private and for educational purposes.

## Contributing

This is a learning project focused on React Router and modern React patterns. Feel free to explore the codebase and learn from it!
