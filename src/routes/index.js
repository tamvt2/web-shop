function route(app) {
	app.get('/', (req, res) => {
		res.send('Welcome');
	});
}

module.exports = route;
