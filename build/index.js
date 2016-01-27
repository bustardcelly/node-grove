'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _greeting = require('./greeting');

var _greeting2 = _interopRequireDefault(_greeting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_path2.default.join(process.cwd(), 'hello'));
(0, _greeting2.default)('Ted');
//# sourceMappingURL=index.js.map