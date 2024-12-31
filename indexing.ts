/*
1) Improves the query performance like find, aggregate, delete method

2) Without collection the whole collection is scanned which is low efficient

3) Here we scan only some portion of the collection 

4) Mongodb uses B-tree idex data structure

5) _id is the default index of the collection

6) you can not change the but you can getIndexes using db.<collection_name>.getIndexes() 

*/