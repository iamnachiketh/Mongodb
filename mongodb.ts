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



    show dbs
admin   80.00 KiB
config  60.00 KiB
local   72.00 KiB
show collections
db["users"].insertOne({fname:"alex",lname:"stevenson",age:22,email:"alex@gmail.com"})
{
  acknowledged: true,
  insertedId: ObjectId('6772381eb65d712feda685f3')
}
db["users"].find()
{
  _id: ObjectId('6772381eb65d712feda685f3'),
  fname: 'alex',
  lname: 'stevenson',
  age: 22,
  email: 'alex@gmail.com'
}
db["users"].insertOne({fname:"nachi",age:21,email:"nachi@gmail.com",isActive:true})
{
  acknowledged: true,
  insertedId: ObjectId('677238cfb65d712feda685f4')
}
db["users"].insertMany([{"fname": "Aarav", "age": 25, "email": "aarav25@gmail.com", "isActive": false},
  {"fname": "Diya", "age": 22, "email": "diya22@gmail.com", "isActive": true},
  {"fname": "Rohan", "age": 28, "email": "rohan28@gmail.com", "isActive": true},
  {"fname": "Meera", "age": 21, "email": "meera21@gmail.com", "isActive": false},
  {"fname": "Arjun", "age": 23, "email": "arjun23@gmail.com", "isActive": true},
  {"fname": "Sneha", "age": 27, "email": "sneha27@gmail.com", "isActive": true},
  {"fname": "Kabir", "age": 30, "email": "kabir30@gmail.com", "isActive": false},
  {"fname": "Sara", "age": 20, "email": "sara20@gmail.com", "isActive": true},
  {"fname": "Vikram", "age": 29, "email": "vikram29@gmail.com", "isActive": true},
  {"fname": "Isha", "age": 24, "email": "isha24@gmail.com", "isActive": false},
  {"fname": "Ayaan", "age": 19, "email": "ayaan19@gmail.com", "isActive": true},
  {"fname": "Naina", "age": 26, "email": "naina26@gmail.com", "isActive": true},
  {"fname": "Riya", "age": 22, "email": "riya22@gmail.com", "isActive": false},
  {"fname": "Aakash", "age": 31, "email": "aakash31@gmail.com", "isActive": true},
  {"fname": "Kavya", "age": 18, "email": "kavya18@gmail.com", "isActive": true},
  {"fname": "Harsh", "age": 28, "email": "harsh28@gmail.com", "isActive": false},
  {"fname": "Priya", "age": 20, "email": "priya20@gmail.com", "isActive": true},
  {"fname": "Aditi", "age": 25, "email": "aditi25@gmail.com", "isActive": false},
  {"fname": "Raj", "age": 29, "email": "raj29@gmail.com", "isActive": true},
  {"fname": "Neha", "age": 23, "email": "neha23@gmail.com", "isActive": false},
  {"fname": "Vivek", "age": 30, "email": "vivek30@gmail.com", "isActive": true},
  {"fname": "Tanya", "age": 24, "email": "tanya24@gmail.com", "isActive": true},
  {"fname": "Raghav", "age": 27, "email": "raghav27@gmail.com", "isActive": false},
  {"fname": "Sonal", "age": 19, "email": "sonal19@gmail.com", "isActive": true},
  {"fname": "Aman", "age": 28, "email": "aman28@gmail.com", "isActive": true},
  {"fname": "Divya", "age": 22, "email": "divya22@gmail.com", "isActive": false},
  {"fname": "Sameer", "age": 25, "email": "sameer25@gmail.com", "isActive": true},
  {"fname": "Ishaan", "age": 21, "email": "ishaan21@gmail.com", "isActive": true},
  {"fname": "Pooja", "age": 26, "email": "pooja26@gmail.com", "isActive": false},
  {"fname": "Nikhil", "age": 23, "email": "nikhil23@gmail.com", "isActive": true}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67723b95b65d712feda685f5'),
    '1': ObjectId('67723b95b65d712feda685f6'),
    '2': ObjectId('67723b95b65d712feda685f7'),
    '3': ObjectId('67723b95b65d712feda685f8'),
    '4': ObjectId('67723b95b65d712feda685f9'),
    '5': ObjectId('67723b95b65d712feda685fa'),
    '6': ObjectId('67723b95b65d712feda685fb'),
    '7': ObjectId('67723b95b65d712feda685fc'),
    '8': ObjectId('67723b95b65d712feda685fd'),
    '9': ObjectId('67723b95b65d712feda685fe'),
    '10': ObjectId('67723b95b65d712feda685ff'),
    '11': ObjectId('67723b95b65d712feda68600'),
    '12': ObjectId('67723b95b65d712feda68601'),
    '13': ObjectId('67723b95b65d712feda68602'),
    '14': ObjectId('67723b95b65d712feda68603'),
    '15': ObjectId('67723b95b65d712feda68604'),
    '16': ObjectId('67723b95b65d712feda68605'),
    '17': ObjectId('67723b95b65d712feda68606'),
    '18': ObjectId('67723b95b65d712feda68607'),
    '19': ObjectId('67723b95b65d712feda68608'),
    '20': ObjectId('67723b95b65d712feda68609'),
    '21': ObjectId('67723b95b65d712feda6860a'),
    '22': ObjectId('67723b95b65d712feda6860b'),
    '23': ObjectId('67723b95b65d712feda6860c'),
    '24': ObjectId('67723b95b65d712feda6860d'),
    '25': ObjectId('67723b95b65d712feda6860e'),
    '26': ObjectId('67723b95b65d712feda6860f'),
    '27': ObjectId('67723b95b65d712feda68610'),
    '28': ObjectId('67723b95b65d712feda68611'),
    '29': ObjectId('67723b95b65d712feda68612')
  }
}



db["users"].find().sort({fname:1}).limit(10)
{
  _id: ObjectId('67723b95b65d712feda68602'),
  fname: 'Aakash',
  age: 31,
  email: 'aakash31@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda685f5'),
  fname: 'Aarav',
  age: 25,
  email: 'aarav25@gmail.com',
  isActive: false
}
{
  _id: ObjectId('67723b95b65d712feda68606'),
  fname: 'Aditi',
  age: 25,
  email: 'aditi25@gmail.com',
  isActive: false
}
{
  _id: ObjectId('67723b95b65d712feda6860d'),
  fname: 'Aman',
  age: 28,
  email: 'aman28@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda685f9'),
  fname: 'Arjun',
  age: 23,
  email: 'arjun23@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda685ff'),
  fname: 'Ayaan',
  age: 19,
  email: 'ayaan19@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda6860e'),
  fname: 'Divya',
  age: 22,
  email: 'divya22@gmail.com',
  isActive: false
}
{
  _id: ObjectId('67723b95b65d712feda685f6'),
  fname: 'Diya',
  age: 22,
  email: 'diya22@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda68604'),
  fname: 'Harsh',
  age: 28,
  email: 'harsh28@gmail.com',
  isActive: false
}



 greater than or equal to 20

db["users"].find({age:{$gte:20}})
{
  _id: ObjectId('6772381eb65d712feda685f3'),
  fname: 'alex',
  lname: 'stevenson',
  age: 22,
  email: 'alex@gmail.com'
}
{
  _id: ObjectId('677238cfb65d712feda685f4'),
  fname: 'nachi',
  age: 21,
  email: 'nachi@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda685f5'),
  fname: 'Aarav',
  age: 25,
  email: 'aarav25@gmail.com',
  isActive: false
}
{
  _id: ObjectId('67723b95b65d712feda685f6'),
  fname: 'Diya',
  age: 22,
  email: 'diya22@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda685f7'),
  fname: 'Rohan',
  age: 28,
  email: 'rohan28@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda685f8'),
  fname: 'Meera',
  age: 21,
  email: 'meera21@gmail.com',
  isActive: false
}
{
  _id: ObjectId('67723b95b65d712feda685f9'),
  fname: 'Arjun',
  age: 23,
  email: 'arjun23@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda685fa'),
  fname: 'Sneha',
  age: 27,
  email: 'sneha27@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda685fb'),
  fname: 'Kabir',
  age: 30,
  email: 'kabir30@gmail.com',
  isActive: false
}
{
  _id: ObjectId('67723b95b65d712feda685fc'),
  fname: 'Sara',
  age: 20,
  email: 'sara20@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda685fd'),
  fname: 'Vikram',
  age: 29,
  email: 'vikram29@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda685fe'),
  fname: 'Isha',
  age: 24,
  email: 'isha24@gmail.com',
  isActive: false
}
{
  _id: ObjectId('67723b95b65d712feda68600'),
  fname: 'Naina',
  age: 26,
  email: 'naina26@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda68601'),
  fname: 'Riya',
  age: 22,
  email: 'riya22@gmail.com',
  isActive: false
}
{
  _id: ObjectId('67723b95b65d712feda68602'),
  fname: 'Aakash',
  age: 31,
  email: 'aakash31@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda68604'),
  fname: 'Harsh',
  age: 28,
  email: 'harsh28@gmail.com',
  isActive: false
}
{
  _id: ObjectId('67723b95b65d712feda68605'),
  fname: 'Priya',
  age: 20,
  email: 'priya20@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda68606'),
  fname: 'Aditi',
  age: 25,
  email: 'aditi25@gmail.com',
  isActive: false
}
{
  _id: ObjectId('67723b95b65d712feda68607'),
  fname: 'Raj',
  age: 29,
  email: 'raj29@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda68608'),
  fname: 'Neha',
  age: 23,
  email: 'neha23@gmail.com',
  isActive: false
}
Type "it" for more
it
{
  _id: ObjectId('67723b95b65d712feda68609'),
  fname: 'Vivek',
  age: 30,
  email: 'vivek30@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda6860a'),
  fname: 'Tanya',
  age: 24,
  email: 'tanya24@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda6860b'),
  fname: 'Raghav',
  age: 27,
  email: 'raghav27@gmail.com',
  isActive: false
}
{
  _id: ObjectId('67723b95b65d712feda6860d'),
  fname: 'Aman',
  age: 28,
  email: 'aman28@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda6860e'),
  fname: 'Divya',
  age: 22,
  email: 'divya22@gmail.com',
  isActive: false
}
{
  _id: ObjectId('67723b95b65d712feda6860f'),
  fname: 'Sameer',
  age: 25,
  email: 'sameer25@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda68610'),
  fname: 'Ishaan',
  age: 21,
  email: 'ishaan21@gmail.com',
  isActive: true
}
{
  _id: ObjectId('67723b95b65d712feda68611'),
  fname: 'Pooja',
  age: 26,
  email: 'pooja26@gmail.com',
  isActive: false
}



this will only show the fname and age of the users whose age is greater than or equal to 20

use _id:0 to exclude the _id field

every complex query starts with $ and the field name

db["users"].find({age:{$gte:20}},{fname:1,age:1})
{
  _id: ObjectId('6772381eb65d712feda685f3'),
  fname: 'alex',
  age: 22
}
{
  _id: ObjectId('677238cfb65d712feda685f4'),
  fname: 'nachi',
  age: 21
}
{
  _id: ObjectId('67723b95b65d712feda685f5'),
  fname: 'Aarav',
  age: 25
}
{
  _id: ObjectId('67723b95b65d712feda685f6'),
  fname: 'Diya',
  age: 22
}
{
  _id: ObjectId('67723b95b65d712feda685f7'),
  fname: 'Rohan',
  age: 28
}
{
  _id: ObjectId('67723b95b65d712feda685f8'),
  fname: 'Meera',
  age: 21
}
{
  _id: ObjectId('67723b95b65d712feda685f9'),
  fname: 'Arjun',
  age: 23
}
{
  _id: ObjectId('67723b95b65d712feda685fa'),
  fname: 'Sneha',
  age: 27
}
{
  _id: ObjectId('67723b95b65d712feda685fb'),
  fname: 'Kabir',
  age: 30
}
{
  _id: ObjectId('67723b95b65d712feda685fc'),
  fname: 'Sara',
  age: 20
}
{
  _id: ObjectId('67723b95b65d712feda685fd'),
  fname: 'Vikram',
  age: 29
}
{
  _id: ObjectId('67723b95b65d712feda685fe'),
  fname: 'Isha',
  age: 24
}
{
  _id: ObjectId('67723b95b65d712feda68600'),
  fname: 'Naina',
  age: 26
}
{
  _id: ObjectId('67723b95b65d712feda68601'),
  fname: 'Riya',
  age: 22
}
{
  _id: ObjectId('67723b95b65d712feda68602'),
  fname: 'Aakash',
  age: 31
}
{
  _id: ObjectId('67723b95b65d712feda68604'),
  fname: 'Harsh',
  age: 28
}
{
  _id: ObjectId('67723b95b65d712feda68605'),
  fname: 'Priya',
  age: 20
}
{
  _id: ObjectId('67723b95b65d712feda68606'),
  fname: 'Aditi',
  age: 25
}
{
  _id: ObjectId('67723b95b65d712feda68607'),
  fname: 'Raj',
  age: 29
}


find the users whose age is 20

use ne for not equal to and eq for equal to

db.users.find({age:{$eq:20}}).sort({age:1,fname:-1})
{
  _id: ObjectId('67723b95b65d712feda685fc'),
  fname: 'Sara',
  age: 20,
  email: 'sara20@gmail.com',
  isActive: true
}


*/