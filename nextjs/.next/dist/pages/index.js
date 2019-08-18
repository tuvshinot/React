"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

var _index = require("next\\dist\\lib\\router\\index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "E:\\tuvshinot\\React\\nextjs\\pages\\index.js?entry";


var IndexPage = function (_Component) {
  (0, _inherits3.default)(IndexPage, _Component);

  function IndexPage() {
    (0, _classCallCheck3.default)(this, IndexPage);

    return (0, _possibleConstructorReturn3.default)(this, (IndexPage.__proto__ || (0, _getPrototypeOf2.default)(IndexPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(IndexPage, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, "The Main Page of ", this.props.appName), _react2.default.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, "Go to", " ", _react2.default.createElement(_link2.default, { href: "/auth", __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, "Auth"))), _react2.default.createElement("button", { onClick: function onClick() {
          return _index2.default.push("/auth");
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Go to Auth"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(context) {
      var promise = new _promise2.default(function (resolve, reject) {
        setTimeout(function () {
          resolve({ appName: "Super App" });
        }, 1000);
      });
      return promise;
    }
  }]);

  return IndexPage;
}(_react.Component);

exports.default = IndexPage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxpbmsiLCJSb3V0ZXIiLCJJbmRleFBhZ2UiLCJwcm9wcyIsImFwcE5hbWUiLCJwdXNoIiwiY29udGV4dCIsInByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7SSxBQUVEOzs7Ozs7Ozs7Ozs2QkFVSyxBQUNQOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQXNCLDBCQUFBLEFBQUssTUFEN0IsQUFDRSxBQUFpQyxBQUNqQywwQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FDUSxTQURSLEFBRUUscUJBQUEsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUxOLEFBRUUsQUFFRSxBQUNFLEFBR0osMkJBQUEsY0FBQSxZQUFRLFNBQVMsbUJBQUE7aUJBQU0sZ0JBQUEsQUFBTyxLQUFiLEFBQU0sQUFBWTtBQUFuQztvQkFBQTtzQkFBQTtBQUFBO1NBVEosQUFDRSxBQVFFLEFBR0w7Ozs7b0NBdEJzQixBLFNBQVMsQUFDOUI7VUFBTSxnQ0FBc0IsVUFBQSxBQUFDLFNBQUQsQUFBVSxRQUFXLEFBQy9DO21CQUFXLFlBQU0sQUFDZjtrQkFBUSxFQUFFLFNBQVYsQUFBUSxBQUFXLEFBQ3BCO0FBRkQsV0FBQSxBQUVHLEFBQ0o7QUFKRCxBQUFnQixBQUtoQixPQUxnQjthQUtoQixBQUFPLEFBQ1I7Ozs7O0FBUnFCLEEsQUEwQnhCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L3R1dnNoaW5vdC9SZWFjdC9uZXh0anMifQ==