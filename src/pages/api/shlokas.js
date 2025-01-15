import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    // Connect to the MongoDB client
    const client = await clientPromise;
    // Access the 'bhagavadgita_shlokas' database
    const db = client.db('bhagavadgita_shlokas');
    
    // Fetch the entire document
    const versesDocument = await db.collection('versesEnglish').find({}).toArray();

    // Check if the document is found
    if (!versesDocument) {
      return res.status(404).json({ message: 'Document not found' });
    }

    // Log the document to check its structure
    console.log('Fetched document:', versesDocument);

    // Send the document as a JSON response
    res.status(200).json(versesDocument);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}