# clean_code_node
A backend application with clean architecture in node.js

## Sample application:
An initial use case for books managing.
The app holds a list of books information and their readers. 

## Main features:
- Book registration form
- User registration form

## Stacks:
- Node.js API / Express
- MongoDB database

## Get start:
- `npm install` to install dependencies
- `npm start` for run production
- `npm run dev` for run development
- `.\src\gateways\database\mongoDB\runDatabase.sh` run local database on docker <!-- must to incorporate this command on start -->

## Use Case:

User can: 
- create account
- find single user by id
- find list of users
- delete account
- register book
- search book by title
- search book by author
