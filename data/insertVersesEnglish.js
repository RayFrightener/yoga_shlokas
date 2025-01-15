const fs = require('fs');

// Select the database to use.
use('bhagavadgita_shlokas');

const rawData = fs.readFileSync('/home/magician/repos/yoga_shlokas/data/ch_3,4,12English.json', 'utf-8');
const data = JSON.parse(rawData);

// Prepare the data for insertion
const documents = [];
for (const chapter in data.verses) {
  const chapterData = {};
  chapterData[chapter] = data.verses[chapter];
  documents.push(chapterData);
}
// Delete existing data in the collection
db.getCollection('versesEnglish').deleteMany({});

// Insert the data into MongoDB
db.getCollection('versesEnglish').insertMany(documents);

// Verify insertion
const insertedDocuments = db.getCollection('versesEnglish').find().toArray();
console.log(insertedDocuments);