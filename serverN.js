const express = require("express");//package name must always be written with inverted commas
const app = express();

const port = 8081;

const toDoList = ["keshab", "chaudhary"];
app.use(express.json());//this signifies that the data transfer will happen in form of jason file only it can updated as per requirement

app.get("/todos", (req, res) => {
    res.status(200).send(toDoList);
});

app.post("/todos", (req, res) => {
    let newToDoList = req.body.item;
    toDoList.push(newToDoList);
    res.status(201).send({
        message: "The items has been send successfully!",
    });
});

app.delete("/todos", (req, res) => {
    let itemToDelete = req.body.item;
    toDoList.find((element, index) => {
        if (element === itemToDelete) {
            toDoList.splice(index, 1);
        }
    });

    res.status(202).send({
        message: `${req.body.item} , is the item that has been deleted successfully!`,
    });
});

//works as else statement all the other methods other than which are implemented here
app.all("/todos", (req, res) => {
    res.status(501).send();
})


//will work for all  the other routes other than specified
app.all("*", (req, res) => {
    res.status(404).send();
})

app.listen(port, () => {//this listen function is absically responsible for building up the server
    console.log(`Nodejs server started on port number :${port}`);
});