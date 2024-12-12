const webpack = require("webpack-stream")

const scripts = () => {
	return app.gulp
		.src(app.path.src.scripts, { sourcemaps: app.isDev })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "JS",
					message: "Error: <%= error.message %>",
				}),
			),
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpack({
					mode: "none",
					output: {
						filename: "app.js", // не сжимаемый файл
					},
				}),
			),
		)
		.pipe(app.plugins.if(app.isBuild, app.gulp.dest(app.path.build.scripts)))
		.pipe(
			webpack({
				mode: app.isBuild ? "production" : "development",
				output: {
					filename: "app.min.js", // сжимаемый файл
				},
			}),
		)
		.pipe(app.gulp.dest(app.path.build.scripts))
		.pipe(app.plugins.sync.stream())
}

module.exports = { scripts }
