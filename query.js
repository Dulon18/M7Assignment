// Query 1: Create a new collection
db.createCollection(employees);

// Query 2: Remove a collection 
 db.collection(posts).drop();

// Query 3: Insert a 
 db.collection(employees).insertOne({ 'name': 'Raja' });

// Query 4: Delete/remove 

db.collection(employees).deleteOne({ 'name': 'Raja' });
