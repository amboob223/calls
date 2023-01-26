const express = require("express"); //used to get request
const app = express(); //we evoke express in a varible called app
const cors = require("cors");//this is to protect against cross refrence error
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());//app.use so we can use from express the jsoi and cors in our reques middleware lets apps communicate wih browsers

//we got to use app.post using express post
app.post("/crypto", async (req, res) => {
    try {
        const { name, price } = req.body // this connects with the stringify on the cloent side we deconstructing the two columsn form the body object on the client sidfess
        const newData = await pool.query(
            "INSERT INTO metaverse (id,name,price) VALUES (nextval('metaverse_id_seq'),$1,$2) RETURNING *",
            [name, price]
        );
        res.json(newData);
        console.log("work")
    } catch (error) {
        console.log(error.message)
    }
})

app.listen("5000", () => {
    console.log("shit")
});