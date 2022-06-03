import { MongoClient } from "mongodb";

const handler = async (req, res) => {

  if (req.method === "POST") {
    const client = await MongoClient.connect(
      `mongodb+srv://bipan123:Bip12345@postappdata.ktotcyb.mongodb.net/appdata?retryWrites=true&w=majority`
    );
    const db = client.db();
    const posts = db.collection("posts");
    await posts.insertOne(req.body);

    client.close();

    res.status(201).send({ Message: "Post added successfully" });
  }
};

export default handler;