import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db('bhagavadgita_shlokas');
    const { chapter } = req.query;
    
    if (!chapter) {
      return res.status(400).json({ message: 'Chapter is required' });
    }

    const verses = await db.collection('verses').find({chapter}).toArray();
    res.status(200).json(verses);
  } catch(e) {
    console.error(e);
    res.status(500).json({message: 'Internal Server Error'});
  }
}