const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please add your Mongo URI to .env.local');
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true, 
    deprecationErrors: true,
  }
});

let clientPromise;

if (process.env.NODE_ENV === 'development') {
  //In development mode, use global variable to preserve the client across module reloads
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, its best to not use a global variable 
  clientPromise = client.connect();
}

module.exports = clientPromise;