import { configFTP } from "../config/ftp.mjs";
import vinylFTP from "vinyl-ftp";
import util from "gulp-util";

const ftp = () => {
	configFTP.log = util.log;
	const ftpConnect = vinylFTP.create(configFTP);
	return app.gulp
		.src(`${app.path.buildFolder}/**/*.*`)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "FTP",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`));
};

export { ftp };
