// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.MONGODB_URI;

// if (!uri) {
//   throw new error('Please add your MongoDB URI to the .env.local file');
// }

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// let clientPromise; 

// if (process.env.NODE_END === 'development') {
//   // in development mode, use global variable to preserve the client across module reloads
//   if (!global._mongoClientPromise) {
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   // in production mode, its best not to use a global variable 
//   clientPromise = client.connect();
// }

// module.exports = clientPromise;
