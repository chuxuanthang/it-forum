/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/notifications.js":
/*!***************************************!*\
  !*** ./resources/js/notifications.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.NOTIFICATION_TYPES = {\n  follow: \"App\\\\Notifications\\\\UserFollowed\",\n  newPost: 'App\\\\Notifications\\\\NewPost'\n};\nwindow.allBox = \"<li class=\\\"inbox-item inbox-se-link\\\">\\n    <a class=\\\"d-block\\\" href=\\\"#\\\">\\n        see all inbox items\\n    </a>\\n</li>\";\nwindow.noneBox = \"<li class=\\\"inbox-item inbox-se-link\\\">\\n    <a class=\\\"d-block\\\" href=\\\"#\\\">\\n        None of the box\\n    </a>\\n</li>\";\n\nwindow.addNotifications = function (newNotifications, target) {\n  notifications = _.concat(notifications, newNotifications);\n  notifications.reverse();\n  showNotifications(notifications, target);\n};\n\nfunction showNotifications(notifications, target) {\n  notifyLength = notifications.length;\n\n  if (notifyLength) {\n    notifications = notifications.slice(0, 5);\n    var htmlElements = notifications.map(function (notification, key) {\n      return makeNotification(notification);\n    });\n    $('#notifCount').html(getSpanCount(notifyLength));\n    $(target).html(htmlElements.join('') + allBox); // $(target).addClass('has-notifications')\n  } else {\n    $(target).html(noneBox);\n    $('#notifCount').html('');\n  }\n} // Tạo ra chuỗi Notifi\n\n\nwindow.makeNotification = function (notification) {\n  return getHtml(notification);\n}; // get the notification route based on it'sotifi\n\n\nwindow.routeNotification = function (notification) {\n  var to = '/post/' + notification.target_id;\n\n  if (notification.type === NOTIFICATION_TYPES.follow) {\n    to = '/user/' + notification.target_id;\n  }\n\n  return to + '?read=' + notification.id;\n};\n\nwindow.getSpanCount = function (count) {\n  return \"\\n        <span class=\\\"indicator-badge js-unread-count _important\\\">\\n            \".concat(count, \"\\n        </span>\\n    \");\n};\n\nwindow.getHtml = function (notification) {\n  var to = routeNotification(notification);\n  return \"\\n    <li class=\\\"inbox-item unread-item\\\">\\n        <a href=\\\"\".concat(to, \"\\\" class=\\\"js-gps-track grid gs8 gsx\\\">\\n            <div class=\\\"favicon favicon-stackoverflow site-icon grid--cell\\\"></div>\\n            <div class=\\\"item-content grid--cell fl1\\\">\\n                <div class=\\\"item-header\\\">\\n                    <span class=\\\"item-type\\\">\").concat(notification.titleI18n, \"</span>\\n                    <span class=\\\"item-creation\\\">\\n                        <span class=\\\"relativetime\\\">\").concat(notification.time_from_now, \"</span>\\n                    </span>\\n                </div>\\n                <div class=\\\"item-location\\\">\\n                    \").concat(notification.contentI18n, \"\\n                </div>\\n            </div>\\n        </a>\\n    </li>\\n    \");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbm90aWZpY2F0aW9ucy5qcz84ZGJhIl0sIm5hbWVzIjpbIndpbmRvdyIsIk5PVElGSUNBVElPTl9UWVBFUyIsImZvbGxvdyIsIm5ld1Bvc3QiLCJhbGxCb3giLCJub25lQm94IiwiYWRkTm90aWZpY2F0aW9ucyIsIm5ld05vdGlmaWNhdGlvbnMiLCJ0YXJnZXQiLCJub3RpZmljYXRpb25zIiwiXyIsImNvbmNhdCIsInJldmVyc2UiLCJzaG93Tm90aWZpY2F0aW9ucyIsIm5vdGlmeUxlbmd0aCIsImxlbmd0aCIsInNsaWNlIiwiaHRtbEVsZW1lbnRzIiwibWFwIiwibm90aWZpY2F0aW9uIiwia2V5IiwibWFrZU5vdGlmaWNhdGlvbiIsIiQiLCJodG1sIiwiZ2V0U3BhbkNvdW50Iiwiam9pbiIsImdldEh0bWwiLCJyb3V0ZU5vdGlmaWNhdGlvbiIsInRvIiwidGFyZ2V0X2lkIiwidHlwZSIsImlkIiwiY291bnQiLCJ0aXRsZUkxOG4iLCJ0aW1lX2Zyb21fbm93IiwiY29udGVudEkxOG4iXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLGtCQUFQLEdBQTRCO0FBQ3hCQyxRQUFNLEVBQUUsa0NBRGdCO0FBRXhCQyxTQUFPLEVBQUU7QUFGZSxDQUE1QjtBQUtBSCxNQUFNLENBQUNJLE1BQVA7QUFPQUosTUFBTSxDQUFDSyxPQUFQOztBQU9BTCxNQUFNLENBQUNNLGdCQUFQLEdBQTBCLFVBQVVDLGdCQUFWLEVBQTRCQyxNQUE1QixFQUFvQztBQUMxREMsZUFBYSxHQUFHQyxDQUFDLENBQUNDLE1BQUYsQ0FBU0YsYUFBVCxFQUF3QkYsZ0JBQXhCLENBQWhCO0FBQ0FFLGVBQWEsQ0FBQ0csT0FBZDtBQUNBQyxtQkFBaUIsQ0FBQ0osYUFBRCxFQUFnQkQsTUFBaEIsQ0FBakI7QUFDSCxDQUpEOztBQU1BLFNBQVNLLGlCQUFULENBQTJCSixhQUEzQixFQUEwQ0QsTUFBMUMsRUFBa0Q7QUFDOUNNLGNBQVksR0FBR0wsYUFBYSxDQUFDTSxNQUE3Qjs7QUFDQSxNQUFHRCxZQUFILEVBQWlCO0FBQ2JMLGlCQUFhLEdBQUdBLGFBQWEsQ0FBQ08sS0FBZCxDQUFvQixDQUFwQixFQUF1QixDQUF2QixDQUFoQjtBQUNBLFFBQUlDLFlBQVksR0FBR1IsYUFBYSxDQUFDUyxHQUFkLENBQWtCLFVBQVVDLFlBQVYsRUFBd0JDLEdBQXhCLEVBQTZCO0FBQzlELGFBQU9DLGdCQUFnQixDQUFDRixZQUFELENBQXZCO0FBQ0gsS0FGa0IsQ0FBbkI7QUFHQUcsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkMsSUFBakIsQ0FBc0JDLFlBQVksQ0FBQ1YsWUFBRCxDQUFsQztBQUNBUSxLQUFDLENBQUNkLE1BQUQsQ0FBRCxDQUFVZSxJQUFWLENBQWVOLFlBQVksQ0FBQ1EsSUFBYixDQUFrQixFQUFsQixJQUF3QnJCLE1BQXZDLEVBTmEsQ0FPYjtBQUNILEdBUkQsTUFRTztBQUNIa0IsS0FBQyxDQUFDZCxNQUFELENBQUQsQ0FBVWUsSUFBVixDQUFlbEIsT0FBZjtBQUNBaUIsS0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkMsSUFBakIsQ0FBc0IsRUFBdEI7QUFDSDtBQUNKLEMsQ0FFRDs7O0FBQ0F2QixNQUFNLENBQUNxQixnQkFBUCxHQUEwQixVQUFVRixZQUFWLEVBQXdCO0FBQzlDLFNBQU9PLE9BQU8sQ0FBQ1AsWUFBRCxDQUFkO0FBQ0gsQ0FGRCxDLENBSUE7OztBQUNBbkIsTUFBTSxDQUFDMkIsaUJBQVAsR0FBMkIsVUFBVVIsWUFBVixFQUF3QjtBQUMvQyxNQUFJUyxFQUFFLEdBQUcsV0FBV1QsWUFBWSxDQUFDVSxTQUFqQzs7QUFFQSxNQUFHVixZQUFZLENBQUNXLElBQWIsS0FBc0I3QixrQkFBa0IsQ0FBQ0MsTUFBNUMsRUFBb0Q7QUFDaEQwQixNQUFFLEdBQUcsV0FBV1QsWUFBWSxDQUFDVSxTQUE3QjtBQUNIOztBQUVELFNBQU9ELEVBQUUsR0FBRyxRQUFMLEdBQWdCVCxZQUFZLENBQUNZLEVBQXBDO0FBQ0gsQ0FSRDs7QUFVQS9CLE1BQU0sQ0FBQ3dCLFlBQVAsR0FBc0IsVUFBVVEsS0FBVixFQUFpQjtBQUNuQyxzR0FFVUEsS0FGVjtBQUtILENBTkQ7O0FBUUFoQyxNQUFNLENBQUMwQixPQUFQLEdBQWlCLFVBQVVQLFlBQVYsRUFBd0I7QUFDckMsTUFBSVMsRUFBRSxHQUFHRCxpQkFBaUIsQ0FBQ1IsWUFBRCxDQUExQjtBQUVBLGtGQUVlUyxFQUZmLGdTQU0wQ1QsWUFBWSxDQUFDYyxTQU52RCwrSEFRaURkLFlBQVksQ0FBQ2UsYUFSOUQsOElBWWtCZixZQUFZLENBQUNnQixXQVovQjtBQWtCSCxDQXJCRCIsImZpbGUiOiIuL3Jlc291cmNlcy9qcy9ub3RpZmljYXRpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93Lk5PVElGSUNBVElPTl9UWVBFUyA9IHtcbiAgICBmb2xsb3c6ICdBcHBcXFxcTm90aWZpY2F0aW9uc1xcXFxVc2VyRm9sbG93ZWQnLFxuICAgIG5ld1Bvc3Q6ICdBcHBcXFxcTm90aWZpY2F0aW9uc1xcXFxOZXdQb3N0J1xufTtcblxud2luZG93LmFsbEJveCA9IFxuYDxsaSBjbGFzcz1cImluYm94LWl0ZW0gaW5ib3gtc2UtbGlua1wiPlxuICAgIDxhIGNsYXNzPVwiZC1ibG9ja1wiIGhyZWY9XCIjXCI+XG4gICAgICAgIHNlZSBhbGwgaW5ib3ggaXRlbXNcbiAgICA8L2E+XG48L2xpPmA7XG5cbndpbmRvdy5ub25lQm94ID0gXG5gPGxpIGNsYXNzPVwiaW5ib3gtaXRlbSBpbmJveC1zZS1saW5rXCI+XG4gICAgPGEgY2xhc3M9XCJkLWJsb2NrXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgTm9uZSBvZiB0aGUgYm94XG4gICAgPC9hPlxuPC9saT5gO1xuXG53aW5kb3cuYWRkTm90aWZpY2F0aW9ucyA9IGZ1bmN0aW9uIChuZXdOb3RpZmljYXRpb25zLCB0YXJnZXQpIHtcbiAgICBub3RpZmljYXRpb25zID0gXy5jb25jYXQobm90aWZpY2F0aW9ucywgbmV3Tm90aWZpY2F0aW9ucyk7XG4gICAgbm90aWZpY2F0aW9ucy5yZXZlcnNlKClcbiAgICBzaG93Tm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zLCB0YXJnZXQpO1xufVxuXG5mdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9ucyhub3RpZmljYXRpb25zLCB0YXJnZXQpIHtcbiAgICBub3RpZnlMZW5ndGggPSBub3RpZmljYXRpb25zLmxlbmd0aDtcbiAgICBpZihub3RpZnlMZW5ndGgpIHtcbiAgICAgICAgbm90aWZpY2F0aW9ucyA9IG5vdGlmaWNhdGlvbnMuc2xpY2UoMCwgNSk7XG4gICAgICAgIHZhciBodG1sRWxlbWVudHMgPSBub3RpZmljYXRpb25zLm1hcChmdW5jdGlvbiAobm90aWZpY2F0aW9uLCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBtYWtlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcjbm90aWZDb3VudCcpLmh0bWwoZ2V0U3BhbkNvdW50KG5vdGlmeUxlbmd0aCkpO1xuICAgICAgICAkKHRhcmdldCkuaHRtbChodG1sRWxlbWVudHMuam9pbignJykgKyBhbGxCb3gpO1xuICAgICAgICAvLyAkKHRhcmdldCkuYWRkQ2xhc3MoJ2hhcy1ub3RpZmljYXRpb25zJylcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKHRhcmdldCkuaHRtbChub25lQm94KTtcbiAgICAgICAgJCgnI25vdGlmQ291bnQnKS5odG1sKCcnKTtcbiAgICB9XG59XG5cbi8vIFThuqFvIHJhIGNodeG7l2kgTm90aWZpXG53aW5kb3cubWFrZU5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICByZXR1cm4gZ2V0SHRtbChub3RpZmljYXRpb24pO1xufVxuXG4vLyBnZXQgdGhlIG5vdGlmaWNhdGlvbiByb3V0ZSBiYXNlZCBvbiBpdCdzb3RpZmlcbndpbmRvdy5yb3V0ZU5vdGlmaWNhdGlvbiA9IGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICB2YXIgdG8gPSAnL3Bvc3QvJyArIG5vdGlmaWNhdGlvbi50YXJnZXRfaWQ7XG5cbiAgICBpZihub3RpZmljYXRpb24udHlwZSA9PT0gTk9USUZJQ0FUSU9OX1RZUEVTLmZvbGxvdykge1xuICAgICAgICB0byA9ICcvdXNlci8nICsgbm90aWZpY2F0aW9uLnRhcmdldF9pZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdG8gKyAnP3JlYWQ9JyArIG5vdGlmaWNhdGlvbi5pZDtcbn1cblxud2luZG93LmdldFNwYW5Db3VudCA9IGZ1bmN0aW9uIChjb3VudCkge1xuICAgIHJldHVybiBgXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW5kaWNhdG9yLWJhZGdlIGpzLXVucmVhZC1jb3VudCBfaW1wb3J0YW50XCI+XG4gICAgICAgICAgICAke2NvdW50fVxuICAgICAgICA8L3NwYW4+XG4gICAgYDtcbn1cblxud2luZG93LmdldEh0bWwgPSBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG4gICAgdmFyIHRvID0gcm91dGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcblxuICAgIHJldHVybiBgXG4gICAgPGxpIGNsYXNzPVwiaW5ib3gtaXRlbSB1bnJlYWQtaXRlbVwiPlxuICAgICAgICA8YSBocmVmPVwiJHt0b31cIiBjbGFzcz1cImpzLWdwcy10cmFjayBncmlkIGdzOCBnc3hcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmYXZpY29uIGZhdmljb24tc3RhY2tvdmVyZmxvdyBzaXRlLWljb24gZ3JpZC0tY2VsbFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGVudCBncmlkLS1jZWxsIGZsMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tdHlwZVwiPiR7bm90aWZpY2F0aW9uLnRpdGxlSTE4bn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1jcmVhdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWxhdGl2ZXRpbWVcIj4ke25vdGlmaWNhdGlvbi50aW1lX2Zyb21fbm93fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWxvY2F0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICR7bm90aWZpY2F0aW9uLmNvbnRlbnRJMThufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICA8L2xpPlxuICAgIGA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/notifications.js\n");

/***/ }),

/***/ 4:
/*!*********************************************!*\
  !*** multi ./resources/js/notifications.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/it-forum/resources/js/notifications.js */"./resources/js/notifications.js");


/***/ })

/******/ });