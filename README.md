# react-workspace
This repo is used for react implementation workspace which aims to practice the react knowledge

## Folder Structure
```
react-workspace/
├── my-react/
│   ├── environment/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── features/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── stores/
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── README.md
│   └── tailwind.config.js
└── README.md
```

## Folder Descriptions
- **environment/**: Contaions all stage environment configuration.
- **node_modules/**: Contains all the dependencies installed via npm.
- **public/**: Stores static assets that are publicly accessible.
- **src/**: The main source code directory for the React application.

  - **assets/**: Stores static assets used within the application (images, fonts, etc.).
  - **components/**: Reusable React components.
  - **features/**: Feature-specific components and logic.
  - **hooks/**: Custom React hooks.
  - **layouts/**: Components that define the overall structure of pages.
  - **pages/**: Components that represent entire pages or views.
  - **routes/**: Routing configuration and components.
  - **services/**: Services for API calls, data fetching, etc.
  - **stores/**: State management stores (e.g., Redux, MobX, or React Context).

## Root Files
- **App.css**: Main CSS file for the App component.
- **App.js**: The root React component that serves as the application's main container.
- **App.test.js**: Test file for the App component.
- **index.css**: Global CSS styles applied to the entire application.
- **index.js**: The entry point of the React application.
- **logo.svg**: SVG logo file used in the app.
- **reportWebVitals.js**: Performance measurement utility for collecting and reporting web vitals.
- **setupTests.js**: Configuration file for setting up testing environment.

## Configuration Files
- **.gitignore**: Specifies which files and directories should be ignored by Git.
- **package-lock.json**: Automatically generated file that locks the versions of installed packages.
- **package.json**: Defines the project dependencies and scripts.
- **postcss.config.js**: Tailwind configuration file
- **tailwind.config.js**: Tailwind configuration file
