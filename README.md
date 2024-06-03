# Social Network API (NoSQL)

## Description 

The aim of this project is to create an API for a social networking platform. The main focus of this project is the back end functionality where users will be able to perform CRUD operations, mainly generating thoughts, reacting to their friends' thoughts and creating a list of friends. I will be making use of Express.js and Node.js to build and establish API routes. Mongoose will be used in conjunction with MongoDB to store social networking data and define the schema/models. Using MongoDB and Mongoose will be useful when scaling and handling the large number of data that is associated with social networking applications. Postman will be used to sent HTTP requests to each API endpoint and test that the appropriate responses are generated.

**The social network API will allow users to:** 

    * Create, read, update or delete users
    * Create, read, update or delete thoughts
    * Create or remove reactions to a thought 
    * Create or remove friends of a user

## Table of Contents 

* [Criteria](#criteria)
* [Usage](#usage)
* [Built With](#built-with)
* [Images](#images)
* [License](#license)
* [Links](#links)

## Criteria

    ```md
    GIVEN a social network API
    WHEN I enter the command to invoke the application
    THEN my server is started and the Mongoose models are synced to the MongoDB database
    WHEN I open API GET routes in Insomnia for users and thoughts
    THEN the data for each of these routes is displayed in a formatted JSON
    WHEN I test API POST, PUT, and DELETE routes in Insomnia
    THEN I am able to successfully create, update, and delete users and thoughts in my database
    WHEN I test API POST and DELETE routes in Insomnia
    THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
    ```

## Usage 

* Run npm run seed and then npm run start into the terminal to populate the seed data and start running the server. 
* Once the server starts running, begin testing the http request (http://localhost:3001) with each corresponding route for the API endpoint in Postman. 
* Routes include: GET, POST, PUT, DELETE.  

## Built With 

* Node.js
* Express.js
* MongoDB (NoSQL Database)
* Mongoose (ODM)
* Postman 

## Images 

**Screenshot showing output when getting all users** 




**Screenshot showing output when getting all thoughts**



## License 

Licensed under the MIT license.

## Links 

Link to walkthrough - 
