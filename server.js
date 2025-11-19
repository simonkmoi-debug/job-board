js
const express = require('express');
const app = express();
const path = require('path');

const jobRoutes = require('./routes/jobs');
require('dotenv').config();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', jobRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
