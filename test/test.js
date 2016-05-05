'use strict';

var inreach = require("../index");

describe("inreach.js", function() {

	it("should download and extract course, speed and name of vessel", function(done) {

		inreach.get("saillife", function(pos, more) {
			more.name.should.equal("Mads Dahlke");
			console.log(pos, more);
			return done();
		});
	});
});