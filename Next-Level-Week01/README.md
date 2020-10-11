<h1 align="center">
  <img src=".github/logo.png" alt="Logo"><br /><br />
  <img src=".github/people.png" alt="Logo Image" height="200">
</h1>

<h3 align="center">
  Ecoleta - The easiest way to throw away your trash
</h3>

<p align="center">
  <a href="https://www.linkedin.com/in/lucasfdcampos/"><img alt="Made by" src="https://img.shields.io/badge/made%20by-Lucas%20Campos-%2334CB79"></a>
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/lucasfdcampos/rocketseat-next-level-week?color=%2334CB79">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/lucasfdcampos/rocketseat-next-level-week?color=%2334CB79">
  <a href="https://github.com/lucasfdcampos/ecoleta/commits/master"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/lucasfdcampos/rocketseat-next-level-week?color=%2334CB79"></a>
  <a href="https://github.com/lucasfdcampos/ecoleta/issues"><img alt="Repository issues" src="https://img.shields.io/github/issues/lucasfdcampos/rocketseat-next-level-week?color=%2334CB79"></a>
</p>

<p align="center">
  <a href="#recycle-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started
</p>

<p align="center">
  <a href="https://insomnia.rest/run/?label=Ecoleta&uri=https%3A%2F%2Fraw.githubusercontent.com%2Flucasfdcampos%2Frocketseat-next-level-week%2Fmaster%2FNext-Level-Week01%2FInsomnia.json" target="_blank">
  
  <img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia">
  </a>
</p>

<img alt="Layout" src=".github/mockup.png">

## :recycle: About the project

This project was developed on the Next Level Week #01 event by [Rocketseat](https://rocketseat.com.br/) &nbsp;🚀

The purpose of this app is to provide the possibility of garbage collection with the aim of helping the environment and the global ecosystem. Adding collection points and specific materials that can be collected.

## 🚀 Technologies

Technologies used (up to this version)

- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Express](https://expressjs.com/pt-br/)
- [Knex](http://knexjs.org/)
- [SQLite](https://www.sqlite.org/)
- [React Leaflet](https://react-leaflet.js.org/)
- [React Router DOM](https://reacttraining.com/react-router/)
- [React Navigation](https://reactnavigation.org/)
- [React Icons](https://react-icons.netlify.com/#/)

## 💻 Getting started

Import the `Insomnia.json` on Insomnia App or click on [Run in Insomnia](#insomniaButton) button

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/)
- [Expo](https://expo.io/)

**Clone the project and access the folder**

_Obs: this is a monorepo about all projects of Next Level Week_

```bash
$ git clone https://github.com/lucasfdcampos/rocketseat-next-level-week.git && cd Next-Level-Week01
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

# Use the script to run the migrations
$ yarn knex:migrate

# Use the script to run the seeds
$ yarn knex:seed

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

# Be sure the file 'clients/mobile/src/services/api.ts' have the IP (your PC) to your API

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