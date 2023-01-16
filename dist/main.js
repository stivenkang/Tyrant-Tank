/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("//Example\n\n// import example from './scripts/example'\n\nconst canvas = document.getElementById(\"canvas\");\nlet ctx = canvas.getContext(\"2d\");\n\n// const width = canvas.width = 1280;\n// const height = canvas.height = 720;\n\n// let score = 0\n// let gameFrame = 0\n// ctx.font = '50px Georgia';\n\n// // Mouse Interactivity\n// const mouse = {\n//     x: canvas.width/2,\n//     y: canvas.height/2,\n//     click: false\n// }\n\nlet gameLoop = setInterval(function () {\n  //update game logic\n  // render game on canvas\n}, 1000 / 60);\nlet tankX = 100; // initial x position\nlet tankY = 100; // initial y position\nlet tankSpeed = 5;\nlet enemyX = 200;\nlet enemyY = 200;\ndocument.addEventListener(\"keydown\", function (event) {\n  if (event.code === \"ArrowLeft\") {\n    tankX -= tankSpeed;\n  } else if (event.code === \"ArrowRight\") {\n    tankX += tankSpeed;\n  } else if (event.code === \"ArrowUp\") {} else if (event.code === \"ArrowDown\") {}\n});\nfunction render() {\n  ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);\n  ctx.fillRect(tankX, tankY, 50, 30);\n  // tank size set to 50px wide, 30px tall\n  ctx.fillRect(enemyX, enemyY, 50, 30);\n}\n\n// function gameLoop() {\n//     // update game logic, render game on canvas, handle user input, move tanks, detect collisions, etc\n\n//     requestAnimationFrame(gameLoop);\n// }\n// gameLoop()\n\n// document.addEventListener('DOMContentLoaded', () => {\n//     const root = document.querySelector('#root')\n//     //console.log('Example')\n\n//     new Example(root);\n// })\n\n// Health Bar\n\n// let health = 100;\n// const healthBarWidth = 200;\n// const healthBarHeight = 30;\n// const x = width / 2 - healthBarWidth / 2;\n// const y = height / 2 - healthBarHeight / 2;\n\n// const healthBar = new HealthBar(x, y, healthBarWidth, healthBarHeight, health, \"green\");\n\n// canvas.onclick = function() {\n//     health -= 10;\n//     healthBar.updateHealth(health);\n// }\n\n// const frame = function() {\n//     context.clearRect(0, 0, width, height);\n//     healthBar.show(context);\n//     requestAnimationFrame(frame);\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWVMb29wIiwic2V0SW50ZXJ2YWwiLCJ0YW5rWCIsInRhbmtZIiwidGFua1NwZWVkIiwiZW5lbXlYIiwiZW5lbXlZIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29kZSIsInJlbmRlciIsImNsZWFyUmVjdCIsImNsaWVudFdpZHRoIiwiaGVpZ2h0IiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cmFudC10YW5rLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9FeGFtcGxlXG5cbi8vIGltcG9ydCBleGFtcGxlIGZyb20gJy4vc2NyaXB0cy9leGFtcGxlJ1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbmxldCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuXG4vLyBjb25zdCB3aWR0aCA9IGNhbnZhcy53aWR0aCA9IDEyODA7XG4vLyBjb25zdCBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0ID0gNzIwO1xuXG4vLyBsZXQgc2NvcmUgPSAwXG4vLyBsZXQgZ2FtZUZyYW1lID0gMFxuLy8gY3R4LmZvbnQgPSAnNTBweCBHZW9yZ2lhJztcblxuLy8gLy8gTW91c2UgSW50ZXJhY3Rpdml0eVxuLy8gY29uc3QgbW91c2UgPSB7XG4vLyAgICAgeDogY2FudmFzLndpZHRoLzIsXG4vLyAgICAgeTogY2FudmFzLmhlaWdodC8yLFxuLy8gICAgIGNsaWNrOiBmYWxzZVxuLy8gfVxuXG5cbmxldCBnYW1lTG9vcCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIC8vdXBkYXRlIGdhbWUgbG9naWNcbiAgICAvLyByZW5kZXIgZ2FtZSBvbiBjYW52YXNcblxufSwgMTAwMC82MClcblxubGV0IHRhbmtYID0gMTAwOyAvLyBpbml0aWFsIHggcG9zaXRpb25cbmxldCB0YW5rWSA9IDEwMDsgLy8gaW5pdGlhbCB5IHBvc2l0aW9uXG5sZXQgdGFua1NwZWVkID0gNTtcblxubGV0IGVuZW15WCA9IDIwMDtcbmxldCBlbmVteVkgPSAyMDA7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmNvZGUgPT09IFwiQXJyb3dMZWZ0XCIpIHtcbiAgICAgICAgdGFua1ggLT0gdGFua1NwZWVkO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgICAgdGFua1ggKz0gdGFua1NwZWVkO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gXCJBcnJvd1VwXCIpIHtcbiAgICAgICAgXG4gICAgfSBlbHNlIGlmIChldmVudC5jb2RlID09PSBcIkFycm93RG93blwiKSB7XG5cbiAgICB9XG59KTtcblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLmNsaWVudFdpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBjdHguZmlsbFJlY3QodGFua1gsIHRhbmtZLCA1MCwgMzApO1xuICAgIC8vIHRhbmsgc2l6ZSBzZXQgdG8gNTBweCB3aWRlLCAzMHB4IHRhbGxcbiAgICBjdHguZmlsbFJlY3QoZW5lbXlYLCBlbmVteVksIDUwLCAzMCk7XG59XG5cblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIGdhbWVMb29wKCkge1xuLy8gICAgIC8vIHVwZGF0ZSBnYW1lIGxvZ2ljLCByZW5kZXIgZ2FtZSBvbiBjYW52YXMsIGhhbmRsZSB1c2VyIGlucHV0LCBtb3ZlIHRhbmtzLCBkZXRlY3QgY29sbGlzaW9ucywgZXRjXG5cbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuLy8gfVxuLy8gZ2FtZUxvb3AoKVxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuLy8gICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpXG4vLyAgICAgLy9jb25zb2xlLmxvZygnRXhhbXBsZScpXG5cbi8vICAgICBuZXcgRXhhbXBsZShyb290KTtcbi8vIH0pXG5cblxuXG4vLyBIZWFsdGggQmFyXG5cbi8vIGxldCBoZWFsdGggPSAxMDA7XG4vLyBjb25zdCBoZWFsdGhCYXJXaWR0aCA9IDIwMDtcbi8vIGNvbnN0IGhlYWx0aEJhckhlaWdodCA9IDMwO1xuLy8gY29uc3QgeCA9IHdpZHRoIC8gMiAtIGhlYWx0aEJhcldpZHRoIC8gMjtcbi8vIGNvbnN0IHkgPSBoZWlnaHQgLyAyIC0gaGVhbHRoQmFySGVpZ2h0IC8gMjtcblxuLy8gY29uc3QgaGVhbHRoQmFyID0gbmV3IEhlYWx0aEJhcih4LCB5LCBoZWFsdGhCYXJXaWR0aCwgaGVhbHRoQmFySGVpZ2h0LCBoZWFsdGgsIFwiZ3JlZW5cIik7XG5cbi8vIGNhbnZhcy5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgaGVhbHRoIC09IDEwO1xuLy8gICAgIGhlYWx0aEJhci51cGRhdGVIZWFsdGgoaGVhbHRoKTtcbi8vIH1cblxuLy8gY29uc3QgZnJhbWUgPSBmdW5jdGlvbigpIHtcbi8vICAgICBjb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbi8vICAgICBoZWFsdGhCYXIuc2hvdyhjb250ZXh0KTtcbi8vICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnJhbWUpO1xuLy8gfVxuIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUNoRCxJQUFJQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQzs7QUFFakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQUlDLFFBQVEsR0FBR0MsV0FBVyxDQUFDLFlBQVc7RUFDbEM7RUFDQTtBQUFBLENBRUgsRUFBRSxJQUFJLEdBQUMsRUFBRSxDQUFDO0FBRVgsSUFBSUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLElBQUlDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNqQixJQUFJQyxTQUFTLEdBQUcsQ0FBQztBQUVqQixJQUFJQyxNQUFNLEdBQUcsR0FBRztBQUNoQixJQUFJQyxNQUFNLEdBQUcsR0FBRztBQUVoQlYsUUFBUSxDQUFDVyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsVUFBU0MsS0FBSyxFQUFFO0VBQ2pELElBQUlBLEtBQUssQ0FBQ0MsSUFBSSxLQUFLLFdBQVcsRUFBRTtJQUM1QlAsS0FBSyxJQUFJRSxTQUFTO0VBQ3RCLENBQUMsTUFBTSxJQUFJSSxLQUFLLENBQUNDLElBQUksS0FBSyxZQUFZLEVBQUU7SUFDcENQLEtBQUssSUFBSUUsU0FBUztFQUN0QixDQUFDLE1BQU0sSUFBSUksS0FBSyxDQUFDQyxJQUFJLEtBQUssU0FBUyxFQUFFLENBRXJDLENBQUMsTUFBTSxJQUFJRCxLQUFLLENBQUNDLElBQUksS0FBSyxXQUFXLEVBQUUsQ0FFdkM7QUFDSixDQUFDLENBQUM7QUFFRixTQUFTQyxNQUFNLEdBQUc7RUFDZFosR0FBRyxDQUFDYSxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRWhCLE1BQU0sQ0FBQ2lCLFdBQVcsRUFBRWpCLE1BQU0sQ0FBQ2tCLE1BQU0sQ0FBQztFQUN0RGYsR0FBRyxDQUFDZ0IsUUFBUSxDQUFDWixLQUFLLEVBQUVDLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0VBQ2xDO0VBQ0FMLEdBQUcsQ0FBQ2dCLFFBQVEsQ0FBQ1QsTUFBTSxFQUFFQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUN4Qzs7QUFRQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXJhbnQtdGFuay8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;