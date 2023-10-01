// Query 1: Create a new collection
db.createCollection(collectionName);

// Query 2: Remove a collection from the database
 db.collection(collectionName).drop();

// Query 3: Insert a 
 db.collection(collectionName).insertOne(document);

// Query 4: Delete/remove 

db.collection(collectionName).deleteOne(query);
