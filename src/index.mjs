import express from 'express';

const app = express();

const port = process.env.port || 3000;

const users = [{ id: 1, username: "moemen", displayname: "Moemen" },
{ id: 2, username: "uzika", displayname: "Uzika" },
{ id: 3, username: "birbis", displayname: "Birbis" },

];

app.get("/", (req, res) => {
    res.status(201).send({ msg: "welocome to home page" });

});

app.get("/api/users", (req, res) => {
    console.log(req.query);
    const {
        query: { filter, value },
    } = req;

    if (!filter || !value)
        return res.send(users);

    return res.send(
        users.filter((user) => String(user[filter] ?? "").includes(value))
    );
});

app.get("/api/products", (req, res) => {
    res.send({ id: 123, name: "batatis", price: 2 });
});

app.get("/api/users/:id", (req, res) => { // video 3 dans playlist express;
    console.log(req.params);
    let id = parseInt(req.params.id);
    console.log(id);
    console.log(typeof id);
    if (isNaN(id)) { return res.status(400).send({ msg: "bad request / invalid id" }); }

    const fuser = users.find((user) => user.id === id);
    if (!fuser)
        return res.sendStatus(404);
    return res.send(fuser);



});




app.listen(port, () => {
    console.log(`running on port ${port}`);
});



