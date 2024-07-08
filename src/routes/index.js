function route(app) {
	app.use('/', userRouter);
}

module.exports = route;
