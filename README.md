# inreach.js [![Build Status](https://travis-ci.org/thomasbrueggemann/inreach.js.svg?branch=master)](https://travis-ci.org/thomasbrueggemann/inreach.js) [![npm](https://img.shields.io/badge/npm-1.1.3-blue.svg)](https://www.npmjs.com/package/ais)
Reading position updates from DeLorme inReach users public feeds

### Installation

``` npm install inreach.js ```

### Usage

```javascript
var inreach = require("inreach");

inreach.get("username", function(pos, more) {
    console.log(pos);   // prints either a lat/long array 
                        // [56.57469, 9.05306] or null

    console.log(more);  // prints more information about the vessel
                        // {course: 360, speed: 2, name: "Display Name of InReach device"}
                        // speed in knots, course in degrees
});
```

#### Disclaimer

I am not associated or affiliated with DeLorme. I just wanted to consume the .kml feed :)