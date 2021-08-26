import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('build'));

app.use('*', (req, res) => {
	res.sendFile('/index.html');
});

app.listen(port, () => {
	console.log('Server is running at port ' + port);
});
