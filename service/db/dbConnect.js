import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://admin:admin@socketcluster.8z6scfi.mongodb.net/"
);

let documentCollection;
let userCollection;

try {
  await client.connect();

  const db = client.db("webSocket");
  documentCollection = db.collection("dataSocket");
  userCollection = db.collection("users");

  console.log("Successfully connected to the database");
} catch (error) {
  console.log(error);
}

export { documentCollection, userCollection };
