const { MongoClient } = require("mongodb");
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


module.exports = {
    getAllPlayers
 }

