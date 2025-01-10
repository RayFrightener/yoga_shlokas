const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

// Path to the JSON file
const jsonFilePath = path.join('/home', 'ray', 'repos', 'yoga_shlokas', 'data', 'ch_3,4,12English.json');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB connection string

// Database and collection names
const dbName = 'bhagavadgita_shlokas';
const collectionName = 'versesEnglish';

// Read the JSON file
fs.readFile(jsonFilePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Parse the JSON data
  const jsonData = JSON.parse(data);

  // Create a new MongoClient
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  // Connect to the MongoDB server
  client.connect(err => {
    if (err) {
      console.error('Error connecting to MongoDB:', err);
      return;
    }

    console.log('Connected to MongoDB');

    // Select the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert the parsed data into the collection
    collection.insertMany(Object.values(jsonData.verses), (err, result) => {
      if (err) {
        console.error('Error inserting documents:', err);
        return;
      }
      console.log('Documents inserted:', result.insertedCount);

      // Close the connection
      client.close();
    });
  });
});