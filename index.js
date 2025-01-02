const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = 3000

// seJfc83XwNHDxXWk  online-embassy

const uri = "mongodb+srv://online-embassy:seJfc83XwNHDxXWk@cluster0.3ftktcj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function bootstrap() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
bootstrap().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Hello Visa Embassy!')
})

app.listen(port, () => {
    console.log(`Visa Embassy app listening on port ${port}`)
})