# Notifications App

Notifications App is a simple web application that will allow you to act upon few mocked notifications.

## Main technologies used

- TypeScript,
- React.js,
- Tailwind CSS,
- Zustand - used as the solution for the global state management in place of Redux, which seemed to be a little "overkill", taking into consideration the simplicity of the app. Zustand and Immer deliver the same with much easier setup,
- ShadCN/UI - customizable (using Tailwind CSS) components - let's not re-invent the wheel,
- React Router,
- JSON Server - it will allow us simulate initial data fetching from the external API.

## Installation

1. Clone repository:

   git clone https://github.com/mateuszkwasniak/notifications-app-mk.git

2. Open terminal and navigate to the project's folder.

3. Run JSON Server (required for the initial load of notifications data from the json file):

   npx json-server -w data/notifications.json -p 3333

4. Open new terminal and navigate to the project's folder.

5. Install dependencies:

   npm install

6. Build the application:

   npm run build

7. Start the application:

   npm run start
