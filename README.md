# inreach.js
Reading position updates from DeLorme InReach users public feeds

### Installation

``` npm install inreach.js ```

### Usage

```javascript
var inreach = require("inreach");

inreach.get("username", function(pos, more) {
  console.log(pos, more);
});
```
