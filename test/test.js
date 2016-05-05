'use strict';

var inreach = require("../index");

describe("inreach.js", function() {

	it("should download and extract course, speed and name of vessel", function(done) {

		inreach.get("saillife", function(pos, more) {
			more.name.should.equal("Mads Dahlke");
			return done();
		});
	});

	it("should not extract anything", function(done) {

		inreach.get("p938fh3498hp5", function(pos, more) {

			var check = (pos === null && more === null);
			check.should.equal(true);

			return done();
		});
	});
});