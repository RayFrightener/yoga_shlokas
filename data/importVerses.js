const fs = require('fs').promises;
const path = require('path');
const { MongoClient } = require('mongodb');

// Path to the JSON file
const jsonFilePath = path.join(__dirname, 'ch_3,4,12English.json');

// MongoDB connection URI
const uri = ''; // Replace with your MongoDB connection string

// Database and collection names
const dbName = 'bhagavadgita_shlokas';
const collectionName = 'versesEnglish';

async function importVerses() {
  try {
    // Read the JSON file
    const data = await fs.readFile(jsonFilePath, 'utf-8');
    
    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Create a new MongoClient with TLS options
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tls: true,
      tlsAllowInvalidCertificates: true // Use this only for testing purposes
    });

    // Connect to the MongoDB server
    await client.connect();

    // Select the database and collection
    const db = client.db(dbName);
    const myColl = db.collection(collectionName);

    // Insert the data into the collection
    await myColl.insertMany(Object.values(jsonData.verses));

    // Close the connection
    await client.close();
  } catch (err) {
    console.error('Error:', err);
  }
}

importVerses();