const { MongoClient } = require("mongodb");
let ObjectId = require('mongodb').ObjectId;
require('dotenv').config()
const password = process.env.ATLAS_PWD
const url = `mongodb+srv://jerrob:${password}@cluster0.qt9uckn.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url)
const football = "football";

// method to get the data of all the players
const getAllPlayers = async () => {
    let playersList = []
    try {
        await client.connect();
        console.log("Connected correctly to server for get method");
        const db = client.db(football);
        const col = db.collection("players");
        const dbResults = await col.find();
        await dbResults.forEach((player, i) => playersList.push(player))
       return playersList

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

const insertPlayer = async (data) => {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(football);
        // Use the collection "players"
        const col = db.collection("players");
         await col.insertOne(data);
       return `New crew members has successfully been added`

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
const deletePlayer = async (_id) => {
    console.log('id in deletePLAYER', _id)
  
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(football);
        const col = db.collection("players");
        await col.deleteOne({_id: ObjectId(_id)});
        const dbResults = col.find();
       return dbResults

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
getAllPlayers()
module.exports = {
    getAllPlayers,
    insertPlayer,
    deletePlayer
 }
