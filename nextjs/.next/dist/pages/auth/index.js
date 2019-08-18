"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _User = require("../../components/User");

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\tuvshinot\\React\\nextjs\\pages\\auth\\index.js?entry";


var authIndexPage = function authIndexPage(props) {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "The Auth Index Page - ", props.appName), _react2.default.createElement(_User2.default, { name: "Max", age: 28, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

authIndexPage.getInitialProps = function (context) {
  var promise = new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
      resolve({ appName: "Super App (Auth)" });
    }, 1000);
  });
  return promise;
};

exports.default = authIndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhdXRoXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlVzZXIiLCJhdXRoSW5kZXhQYWdlIiwicHJvcHMiLCJhcHBOYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwicHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUVQLEFBQU8sQUFBVTs7Ozs7Ozs7O0FBRWpCLElBQU0sZ0JBQWdCLFNBQWhCLEFBQWdCLGNBQUEsQUFBQyxPQUFEO3lCQUNwQixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQUEyQixnQ0FEN0IsQUFDRSxBQUFpQyxBQUNqQywwQkFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVyxPQUFNLEtBQWpCLEFBQXNCO2dCQUF0QjtrQkFIa0IsQUFDcEIsQUFFRTtBQUFBOztBQUhKOztBQU9BLGNBQUEsQUFBYyxrQkFBa0IsbUJBQVcsQUFDekM7TUFBTSxnQ0FBc0IsVUFBQSxBQUFDLFNBQUQsQUFBVSxRQUFXLEFBQy9DO2VBQVcsWUFBTSxBQUNmO2NBQVEsRUFBRSxTQUFWLEFBQVEsQUFBVyxBQUNwQjtBQUZELE9BQUEsQUFFRyxBQUNKO0FBSkQsQUFBZ0IsQUFLaEIsR0FMZ0I7U0FLaEIsQUFBTyxBQUNSO0FBUEQsQUFTQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJFOi90dXZzaGlub3QvUmVhY3QvbmV4dGpzIn0=