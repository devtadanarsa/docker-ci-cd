const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.render('index')
})

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})