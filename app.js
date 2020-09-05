const express = require('express');

const indexRouter = require('./routes/index');

const app = express(); 

app.use(express.static('public'));

app.use(indexRouter);

app.listen(3000, () => {
	console.log('Sorting Visualizer App running on port', 3000);
});