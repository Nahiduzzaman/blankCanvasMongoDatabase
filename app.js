'use strict';

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/test', function (err,db){
    assert.equal(null, err);
    console.log('Successfully connected to MongoDB.');

    var docs = [];

    db.collection('example').drop();

    for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
            for (var k = 0; k < 100; k++) {
                docs.push({ a: i, b: j, c: k });
            }
        }
        if(i%10 == 0){
            console.log(i);
        }
    }
    db.collection('example').insertMany(docs);
    console.log(`Created ${x.length} docs in db test collection example`);
});
