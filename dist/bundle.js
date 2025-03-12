/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("let create_p = document.createElement(\"p\");\nlet form = document.getElementById(\"urlForm\");\nform.insertAdjacentElement(\"afterend\", create_p);\n\nlet urlForm = document\n  .getElementById(\"urlForm\")\n  .addEventListener(\"submit\", async function (e) {\n    e.preventDefault();\n    let url = document.getElementById(\"urlInput\").value;\n    console.log(url);\n    const response = await fetch(\"http://localhost:3000/api/shorturl1\", {\n      method: \"post\",\n      headers: { \"content-type\": \"application/json\" },\n      body: JSON.stringify({ url }),\n    });\n    console.log(response);\n    const data = await response.json();\n    if (data) {\n      console.log(111, data);\n    } else {\n      console.log(222, data.error);\n    }\n\n    create_p.innerHTML = `<a href=\"${data.originl_url}\">${data.originl_url}</a>获取：http://localhost:3000/api/shorturl1?short_url=${data.short_url}`;\n  });\n// https://www.youtube.com\n\n\n//# sourceURL=webpack://weilianjie-url/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;