# React TypeScript Country App

This project is a React TypeScript application that integrates with the REST Countries API to display country data. It includes functionalities for searching, filtering, and viewing detailed information about countries, as well as switching between light and dark modes. The application is responsive, features animations using Framer Motion, and maintains theme persistence using local storage.

## Deployment Link
The live version of the project - 

## Features
- **Job Cards:** Each job listing is displayed as a card containing the following information:
  - Display all countries from the API on the homepage
  - Search for a country using an input field
  - Filter countries by region
  - View detailed information about a country on a separate page
  - Navigate through border countries on the detail page
  - Responsive design for different device screen sizes
  - Hover and focus states for all interactive elements
  - Toggle between light and dark mode
  - Theme persistence using local storage
  - Modular and testable code following best practices
  - Cool animations using Framer Motion
  - Proper error handling

## Technology Stack
- ReactJs
- TypeScript
- Context API
- React Router DOM
- Framer Motion 


## Usage
  
- **Theme Toggle:** The application uses the ThemeContext to manage theme switching and persistence. The current theme is stored in local storage to maintain the user's preference across sessions.
  
- **Fetching Data:** The api folder contains functions for fetching country data from the REST Countries API. These functions handle errors and ensure data consistency.

- **Animation:** Animations are implemented using Framer Motion. Components that use animations are imported from framer-motion and defined in their respective files.

- **Code Optimization:** The code has been optimized for performance and readability by using efficient algorithms and data structures, minimizing redundant code, and adhering to best practices.
  
- **Code Modularity:** The codebase has been structured into modular components to promote reusability, maintainability, and scalability. Each component encapsulates a specific functionality, making the codebase easy to understand and maintain.

- **Responsive UI:** The platform is responsive and adapts to different screen sizes, ensuring a consistent user experience across devices. The UI elements are optimized for mobile, tablet, and desktop screens, providing a seamless browsing experience.
  
- **Theme Toggle:** The application uses the ThemeContext to manage theme switching and persistence. The current theme is stored in local storage to maintain the user's preference across sessions.

## Installation and Running
In the project directory, you can 

1. Clone the repository
2. cd [Project Name]
3. npm install
4. npm run dev





