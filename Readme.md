
# UserService

A Node.js Backend service, contains 2 API's

    * Register Service - new user can register by consuming this service
    * Login Service - existing user can login by consuming this service

## How to consume the API

    * Register Service
        * POST http://localhost:3000/user/register
        * Request Body
            {
                "username": "string",
                "firstname": "string",
                "lastname": "string",
                "email": "string",
                "password": "string",
            }
        * Response json
            {
                "message": "A verification mail has been sent to your registered mail."
            }

    * Login Service
        * POST http://localhost:3000/user/login
        * Request Body
            {
                "username": "string",
                "password": "string",
            }
        * Response json
            {
                "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJp",
                "user": {
                    "id": "34c12b02-49a2-4dba-bf74-6d421ea75a8f",
                    "username": "string",
                    "email": "string",
                    "firstname": "string",
                    "lastname": "string"
                }
            }

## Technologies used (version info inside parenthesis)

    * Node.js (v10.13.0) - development platform
    * MongoDB (4.0.2) - Database
    * ExpressJS - web server
    * Joi - validation library
    * Mocha, Chai - unit testing framework
    (node modules version available in package.json)
    
## How to start the service

    * MongoDB to be available at the given host:port
        * default: mongodb://localhost:52061/userdb
    * application port
        * default: 3000
    * npm start
        * once application started
        * services can be verified as below
            * by using any Rest client i.e Postman/ARC/CURL
    * npm run starthot
        * Hot Reloads the application, i.e no need to restart the server while development. 
    
## How to execute unit tests

    * npm test

## Validations

    * username - length 3 to 30, alphanumeric
    * password - length 3 to 30, alpha/numeric
    * firstname - length 2 to 30, alpha
    * lastname - length 2 to 30, alpha
    * email - usual email validation

## How to configure

    * config.js - contains the configuratble items to customize for the target environment
