// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("test");

// Get the indexs of the documents
db.getCollection("users").getIndexes();
/*
Output:
[
    {
      "v": 2,
      "key": {
        "_id": 1
      },
      "name": "_id_"
    }
  ]

*/

// Creating new indexes

db.getCollection("users").createIndex({index:1})


// Options for creating the indexes
// 1. { Background: true } this will make sure other operations are run in the background
// 2. { Unique: true } this will make sure the index is unique
// 3. { name: "<index name>" } this is the specific index name

db.getCollection("users").createIndex({name:1},{background:true, Unique:true,name:"uniqueKey"});

db.getCollection("users").getIndexes();