Simple app that creates a million documents in a mongo database. Used to experiment with indexes in mongoDB.

To run the app, you need to have node.js and mongoDB installed.  Run `npm install` to bring in the dependancies, start the mongod server in another terminal, and run `node app.js`.

If you're not familiar with this code, the following explains what each of the lines does:
1. I'm running node version 5.8.0, which requires 'use strict' for es6 support
3. app dependancies
4. app dependancies (part of node core)
6. The mongo client connects to the default port (27017) to a database that comes with the installation of MongoDB (test) and passes a callback function where db = test
7.  Tests that there's no errors
8. Reports to the terminal that you're connected to the Mongod server
10. Initializes an empty array as the variable called docs, which will be used to temporarily store the documents before they are inserted into the database collection
12. Drops all the existing documents in the db.example collection so you start with a fresh collection in case you want to get a fresh set of documents
14. to 16: 3 embedded loops that creates the fields for each document.
17. Moves a document (which looks like a javascript object) into the docs array with 3 fields that have 3 separate values
20. Prints out to the console every 1,000 documents that are created, basically gives use a timer that everything is working as it should.
24. Inserts all of the documents from the docs array into the database
25. Confirms that the process is completed.
At this point, you should be able to go into the mongo shell, run `use test`, `db.example.find().count()` and 1000000 should be returned.
