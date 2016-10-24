## rotrot

Rotate string back and forth

### Installation

```
npm install rotrot
```

### Usage

```js
var rot = require('rotrot');

var string = 'Hey-hey';

// add 30 to all char codes
var rotated = rot(string, 30);

// rotate back char codes to get initial string
var initialString = rot(rotated, -30);
```

### License

MIT
