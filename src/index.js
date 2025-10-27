// const { MongoClient } = require('mongodb');
// or as an es module:
import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'NotesApplication';
const dbUser='user';
const dbPassword='password';
async function main() {
  
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName,dbUser,dbPassword);
  const collection = db.collection('documents');



  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());