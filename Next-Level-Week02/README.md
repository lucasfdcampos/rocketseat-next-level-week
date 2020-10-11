<h1 align="center">
  <img src=".github/logo.svg" alt="Logo" height="45"><br /><br />
  <img src="web/src/assets/images/landing.svg" alt="Logo Image" height="200">
</h1>

<h3 align="center">
  Proffy - Get in touch with any teacher and learn what you want.
</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/lucasfdcampos/"><img alt="Made by" src="https://img.shields.io/badge/made%20by-Lucas%20Campos-%239871F5"></a>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/lucasfdcampos/rocketseat-next-level-week?color=%239871F5">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/lucasfdcampos/rocketseat-next-level-week?color=%239871F5">
  <a href="https://github.com/lucasfdcampos/ecoleta/commits/master"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lucasfdcampos/rocketseat-next-level-week?color=%239871F5"></a>
  <a href="https://github.com/lucasfdcampos/ecoleta/issues"><img alt="Repository issues" src="https://img.shields.io/github/issues/lucasfdcampos/rocketseat-next-level-week?color=%239871F5"></a>
</p>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started
</p>

<p id="insomniaButton" align="center">
  <a href="https://insomnia.rest/run/?label=Proffy&uri=https%3A%2F%2Fraw.githubusercontent.com%2Flucasfdcampos%2Frocketseat-next-level-week%2Fmaster%2FNext-Level-Week02%2FInsomnia.json" target="_blank">
    <img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
  </a>
</p>


<img alt="Layout" src=".github/mockup.png">

## 📚 About the project

This application is designed to help connect students and teachers. Therefore, this application offers teachers the possibility to register classes, being able to add information such as the discipline, cost and timetable and students the possibility to search for registered classes. The project was conceived thinking about the 6th of August, where, in Brazil, the National Day of Education Professionals is celebrated.

This project was developed on the Next Level Week #02 event by [Rocketseat](https://rocketseat.com.br/). The NLW is an online experience with lots of pratical content,
challenges, insights and hacks where the content is available for a week.

## 🚀 Technologies

Technologies used (up to this version)

- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Express](https://expressjs.com/pt-br/)
- [TypeORM](https://typeorm.io/#/)
- [Axios](https://github.com/axios/axios)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)
- [Knex](http://knexjs.org/)
- [SQLite](https://www.sqlite.org/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/)
- [Expo](https://expo.io/)

**Clone the project and access the folder**

_Obs: this is a monorepo about all projects of Next Level Week. Go to the correct directory._

```bash
$ git clone https://github.com/lucasfdcampos/rocketseat-next-level-week.git && cd Next-Level-Week02
```

**Install dependencies**

```bash
$ yarn
```

**Follow the steps below**

### Backend

```bash
# Install the dependencies
$ yarn

# Run the api service to start the server API
$ yarn dev

```

### Web

_Obs.: Before to continue; be sure to have the API running_

```bash
# Install the dependencies
$ yarn

# Check the file 'web/src/services/api.ts' have the IP (your PC) to your API

# Start the client
$ yarn start
```

### Mobile

_Obs.: Before to continue; be sure to have the API running_

```bash
# Install the dependencies
$ yarn

# Be sure the file 'mobile/src/services/api.ts' have the IP (your PC) to your API

# Start the expo service and scan the QR code with Expo Client
$ yarn start
```

---
<a href="https://github.com/lucasfdcampos">
    <img src="https://img.shields.io/badge/-Lucas%20Campos-000000?style=for-the-badge&logo=GitHub&logoColor=#000000" />
</a>
&nbsp
<a href="https://linkedin.com/in/lucasfdcampos"><img src="https://img.shields.io/badge/linkedin-0077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white">
</a>