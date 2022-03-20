const express = require('express');
const app = express();
const PORT = process.env.PORT || 2022

app.use(express.json());
app.use(express.static('public'));
console.log("Git push worked ");

app.listen(PORT, () => {
    console.log("App running on port number", PORT);

});