# Group Note - Collaborative Note-Taking App

Group Note is a collaborative note-taking application that allows teams and groups to work together in real-time on shared notes. With Group Note, capturing ideas and collaborating seamlessly becomes a breeze.

[Watch the App in Action](https://www.youtube.com/watch?v=IKYB2NRoTNc)

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Server](#server)
- [Client](#client)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

Group Note provides a user-friendly interface that allows multiple users to edit the same note simultaneously. It features automatic synchronization of changes and intelligent conflict resolution mechanisms to maintain data integrity. The application is built using modern technologies for efficient and real-time collaboration.

## Technologies Used

The following technologies were used to build Group Note:

- **Server-side:**
  - Node.js with Express for handling server-side logic and APIs.
  - Socket.io for real-time communication between clients and the server.
  - MongoDB for data storage and retrieval.

- **Client-side:**
  - React.js for building the front-end user interface.
  - Quill.js for the collaborative text editor with real-time updates.
  - Socket.io-client for handling real-time communication with the server.

## Features

- **Real-time Collaborative Editing:** Multiple users can edit the same note simultaneously, with changes automatically synchronized for all collaborators.

- **Note Saving:** Group Note ensures that notes are saved in real-time, preventing data loss and enabling easy access from anywhere.

- **Conflict Resolution:** Intelligent conflict resolution mechanisms handle simultaneous edits, maintaining data integrity.

- **Easy-to-Use Interface:** The user-friendly design allows effortless note creation, editing, and organization.

## Installation

To set up Group Note locally, follow these steps:

1. Clone the repository:

git clone https://github.com/brkuhgk/GroupNotes


2. Install dependencies for both the client and server:

cd GroupNotes
npm install
cd client
npm install


## Usage

1. Start the server:

npm run server


2. Start the client:

npm run client


3. Access the application in your web browser:

http://localhost:3000/


## Server

The server-side of Group Note is built with Node.js and Express. It handles real-time communication using Socket.io and stores note data in a MongoDB database. You can find the server code in the `server/` directory.

## Client

The client-side of Group Note is built with React.js and utilizes the Quill.js library for the collaborative text editor. It communicates with the server using Socket.io-client. You can find the client code in the `client/` directory.



