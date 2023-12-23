const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.status(200).send('Hello World, Mr.Jacky');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
