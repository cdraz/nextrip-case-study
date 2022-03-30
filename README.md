![License](https://img.shields.io/github/license/cdraz/nexttrip-case-study.svg?style=for-the-badge) ![Repo Size](https://img.shields.io/github/languages/code-size/cdraz/nexttrip-case-study.svg?style=for-the-badge) ![TOP_LANGUAGE](https://img.shields.io/github/languages/top/cdraz/nexttrip-case-study.svg?style=for-the-badge) ![FORKS](https://img.shields.io/github/forks/cdraz/nexttrip-case-study.svg?style=for-the-badge&social) ![Stars](https://img.shields.io/github/stars/cdraz/nexttrip-case-study.svg?style=for-the-badge)
    
# NexTrip Case Study

## Description

This application allows users to access data from the Metro Transit NexTrip API, providing information on bus routes in the Twin Cities.

## Built With

<a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://jestjs.io/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg" height="40px" width="40px" /></a><a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

## List of Assumptions

Here are the assumptions I made when developing this application:
- Delivery: Minimum viable product functionality (no other features/functionality expected beyond those listed below):
    - Select a bus route from a list of routes provided by NexTrip
    - Select a direction for the selected bus route provided by NexTrip
    - Display the stops for the selected route and direction provided by NexTrip
    - Browser must reasonably respond to back and forward buttons
    - Must be delivered by 11 AM CDT on 3/30/22
- Methodology: develop one complete feature at a time, testing as features are completed when possible
- Technology:
    - Technologies to be used: Node, React, Redux, Redux-Saga, Jest
    - No backend will be built, all data will be coming from HTTP requests to the NexTrip API
        - All GET HTTP requests will return JSON
        - No storage of data outside of browser memory

## Getting Started

Node.js is required to run this application. See https://nodejs.org/en/download/ for more information.

### Prerequisites

Node.js

### Installation

Fork and clone this repository. Once cloned and downloaded locally, run "npm install --dev" to install dependencies.

## Usage: How to Run and Test

To build and run:
Run "npm start" in the terminal while in the root of this project, then navigate to localhost:3000/ to view.

To test:
Run "npm test" in the terminal while in the root of this project.

Application usage:
From the main view, use the select field to choose a route, a direction, and a stop along that route for the selected direction.

## Contacts

<a href="https://www.linkedin.com/in/christopher-razidlo/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>