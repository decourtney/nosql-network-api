# Tech Messages

[![License: MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)
  
## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#testing)
* [Questions](#questions)
* [Licensing](#licensing)

## Description

This is a project that uses MongoDB, Mongoose ODM, and Express.js to build a simple database-backed web application. The purpose of the project is to provide an introduction to using MongoDB and Mongoose in a Node.js environment. The application allows users to create and delete users, thoughts, and reactions, and to associate thoughts and reactions with specific users. The backend server is built using Express.js, while the database is managed using Mongoose ODM. This project is intended as a starting point for developers who are new to MongoDB and Mongoose, and it provides a basic framework for building more complex web applications in the future.

Deployed Project: **not deployed**

Walkthrough Video: [https://youtu.be/ktY9KZpH5u8](https://youtu.be/ktY9KZpH5u8)

Utilizing:
   
<img src="./assets/mongoDB_logo.png" target="_blank" alt="MongoDB Logo" style="max-width: 384px; display: block;" /><br>

## Installation

To run the NoSQL Network API you'll first need [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/)

Then install the following packages

- `express v4.17.1`
- `mongoose v6.9.2`

I'm using [Insomnia](https://insomnia.rest/) to test the API endpoints.

## Usage

Seeding the database is available but optional
- `npm run seed`

To start the local server
- `npm run start`


Now use your chosen tool to test the endpoints:
### API Routes

**`/api/users`**

* `GET` all users

* `GET` a single user by its `_id` and populated thought and friend data

* `POST` a new user:

```json
// example data
{
  "username": "lernantino",
  "email": "lernantino@gmail.com"
}
```

* `PUT` to update a user by its `_id`

* `DELETE` to remove user by its `_id`

---

**`/api/users/:userId/friends/:friendId`**

* `POST` to add a new friend to a user's friend list

* `DELETE` to remove a friend from a user's friend list

---

**`/api/thoughts`**

* `GET` to get all thoughts

* `GET` to get a single thought by its `_id`

* `POST` to create a new thought (don't forget to push the created thought's `_id` to the associated user's `thoughts` array field)

```json
// example data
{
  "thoughtText": "Here's a cool thought...",
  "username": "lernantino",
  "userId": "5edff358a0fcb779aa7b118b"
}
```

* `PUT` to update a thought by its `_id`

* `DELETE` to remove a thought by its `_id`

---

**`/api/thoughts/:thoughtId/reactions`**

* `POST` to create a reaction stored in a single thought's `reactions` array field

* `DELETE` to pull and remove a reaction by the reaction's `reactionId` value
 

## Contribution

Follow the "fork-and-pull" Git workflow.

  1. **Fork** the repo on GitHub
  2. **Clone** the project to your own machine
  3. **Commit** changes to your own branch
  4. **Push** your work back up to your fork
  5. Submit a **Pull request** so that we can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!

## Testing
  
N/A

## Questions

Feel free to contact me with any questions or comments:  
<donovan.courtney@gmail.com>  
<https://github.com/decourtney>

## Licensing

Code and Docs released under [MIT License](https://choosealicense.com/licenses/mit/).
