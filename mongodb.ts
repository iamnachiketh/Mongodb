/*

CLI Connection String: mongosh "mongodb+srv://cluster0.yjvvcdm.mongodb.net/" --apiVersion 1 --username nachiketha --password nachiketha


To display dbs we have to use the command:  show dbs

To use a particular db we have to use the command: use <db_name>

To display collections in the db we have to use the command: show collections

To display documents in a collection we have to use the command: db.<collection_name>.find()

db.users.find()
[
  {
    _id: ObjectId("66a35f30b00b040e813a3a3c"),
    username: 'john_wick',
    email: 'wick@gmail.com',
    authentication: {
      password: '3558936e25a8796c60c3f99709ffc82e169465ed066e21406f0a9b7890a155f3',
      salt: 'iLrFm8DSGHJ3uYTCWCHGUTeYsXAokKvBzbgVV4cEMtpMEJJQD/t+Kx/TpBqUlcaH2jjJF3DIbVpbtPYclHMZZOF5MUNJJu2TGekstmZo3ONpzhSVwcF1vTdaYtTne1QsSKLCLpA8dm5GmVmo8o0iaCEFiwgt4Y8hoi801IzIQRA='
    },
    __v: 0
  },
  {
    _id: ObjectId("676ea07b99b548bc03310672"),
    username: 'alex',
    email: 'alex@gmail.com',
    authentication: {
      password: 'ghtfvvb8766%trfcrtcrdvy',
      salt: 'iLrFm8DSGHJ3uYTCWCHGUTeYsXAokKvBzbgVV4cEMtpMEJJQD/t+Kx/TpBqUlcaH2jjJF3…'
    }
  }
]


To insert a document in a collection we have to use the command: db.<collection_name>.insertOne({<document>})

db.users.insertOne({username:"alex",email:"alex@gmail.com",authentication:{password:"ghtfvvb8766%trfcrtcrdvy",salt:"iLrFm8DSGHJ3uYTCWCHGUTeYsXAokKvBzbgVV4cEMtpMEJJQD/t+Kx/TpBqUlcaH2jjJF3…"}})
{
  acknowledged: true,
  insertedId: ObjectId("676ea07b99b548bc03310672")
}

You can sort the documents in a collection using the command: db.<collection_name>.find().sort({<field_name>:<1/-1>}) where 1 is for ascending order and -1 is for descending order

db.users.find().sort({username:1})
[
  {
    _id: ObjectId("676ea07b99b548bc03310672"),
    username: 'alex',
    email: ' alex@gmail.com',
    authentication: { 
    password: ' ghtfvvb8766%trfcrtcrdvy', 
    salt: ' iLrFm8DSGHJ3uYTCWCHGUTeYsXAokKvBzbgVV4cEMtpMEJJQD/t+Kx/TpBqUlcaH2jjJF3…'
    }

*/