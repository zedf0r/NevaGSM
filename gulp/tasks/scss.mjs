import gulpSass from "gulp-sass";
import rename from "gulp-rename";
import cleanCSS from "gulp-clean-css";
import webpCSS from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";
import sassCompiler from "sass"; // Импортируем sass компилятор

const sass = gulpSass(sassCompiler);

const scss = () => {
	return app.gulp
		.src(app.path.src.scss, { sourcemaps: app.isDev })
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "SCSS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(app.plugins.replace(/@img\//g, "../img/"))
		.pipe(
			sass({
				outputStyle: "expanded",
			})
		)
		.pipe(app.plugins.if(app.isBuild, groupCssMediaQueries()))
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpCSS({
					webpClass: ".webp",
					noWebpClass: ".no-webp",
				})
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoprefixer({
					grid: true,
					overrideBrowserslist: ["last 3 versions"],
					cascade: true,
				})
			)
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.if(app.isBuild, cleanCSS()))
		.pipe(
			rename({
				extname: ".min.css",
			})
		)
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(app.plugins.sync.stream());
};

export { scss };
