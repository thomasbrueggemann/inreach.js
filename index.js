var request = require("request");
var tj = require("togeojson");
var jsdom = require("jsdom").jsdom;

module.exports = {

	// GET
	get: function(username, callback) {

		// fetch the kml
		request("https://share.delorme.com/feed/Share/" + username, function(err, response, body) {

			if (err || response.statusCode !== 200) return callback(null);

			var kml = jsdom(body);
			var converted = tj.kml(kml, {
				styles: false
			});

			var prop = converted.features[0].properties;

			var crs = null;
			if (prop.Course.indexOf(".") > 0) {
				crs = parseInt(prop.Course.split(".")[0]);
			}

			var spd = null;
			if (prop.Velocity.indexOf(".") > 0) {
				spd = parseInt(prop.Velocity.split(".")[0]) * 0.539957;
			}

			return callback([
				parseFloat(prop.Latitude),
				parseFloat(prop.Longitude)
			], {
				"course": crs,
				"speed": spd,
				"name": prop["Map Display Name"] || null
			});
		});
	}
};