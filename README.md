# React-Boilerplate

## Description 

This project is a boilerplate that integrates React, Babel, Express, Node.js, Jest, and Enzyme, all conveniently packaged together with Webpack. Leveraging FreeCodeCamp's resources, I developed this boilerplate to streamline the setup process for React applications.

## WHY?

A React boilerplate is an invaluable tool for quickly starting new projects. By utilizing this boilerplate, I can seamlessly initiate new React applications without the need to manually install all the necessary dependencies each time. This efficiency is particularly beneficial as I strive to deepen my familiarity with React.

## Problems Encountered

- Working with Jest and testing.
- Updating dependencies to make them compatible with each other.
- Setting up package.json "script" correctly.

## New Skills

- Using Webpack and creating my own bundle.
- Testing the application with Jest.
- Setting up my own server with Express and using Promises.

## Resources

### FreeCodeCamp
- https://www.freecodecamp.org/news/how-to-build-your-own-react-boilerplate-2f8cbbeb9b3f




## Setup 
To create a new project based on this template, follow these steps:

Create a new repository from the template:

- Click on the "Use this template" button at the top of the repository page.
- Follow the instructions to create a new repository based on this template.

Clone the newly created repository:
```
git clone <newly-created-repository-url>
cd <new-repository-name>
```

Clean the project (optional but recommended):
```
npm run clean
```

Install dependencies:
```
npm install 
```

Build the project:
```
npm run build 
```

Start the server:
```
npm start
```
The application can be viewed on `http://localhost:3000/`

- Make sure to import all your webpages into `app.js` and store them in `./src/client`

## Future Improvements

- Creating CSS bundling with webpack.
- Create a debug command in package.json.
- Using nodemon to auto start the server after file changes.