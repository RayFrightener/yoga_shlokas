const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new error('Please add your MongoDB URI to the .env.local file');
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

