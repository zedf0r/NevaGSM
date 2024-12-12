const fileInclude = require('gulp-file-include');
const webpHtmlNoSvg = require("gulp-webp-html-nosvg");
const versionNumber = require('gulp-version-number');

const html = () => {
	return app.gulp
		.src(app.path.src.html)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "HTML",
					message: "Error: <%= error.message %>",
				}),
			),
		)
		.pipe(fileInclude())
		.pipe(app.plugins.replace(/@img\//g, "img/"))
		.pipe(app.plugins.if(app.isBuild, webpHtmlNoSvg()))
		.pipe(
			app.plugins.if(
				app.isBuild,
				versionNumber({
					value: "%DT%",
					append: {
						key: "_v",
						cover: 0,
						to: ["css", "js"],
					},
					output: {
						file: "gulp/version.json",
					},
				}),
			),
		)
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.sync.stream())
}

module.exports = { html }
