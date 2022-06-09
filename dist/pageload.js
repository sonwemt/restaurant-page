"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["pageload"],{

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InitialLoad)
/* harmony export */ });
class InitialLoad {
    fillPage (wrapper) {
        const header = document.createElement('div');
        header.classList.add('header');
        const headerText = document.createTextNode('Business Pizza');
        header.appendChild(headerText);
        wrapper.appendChild(header);

        const tabs = document.createElement('ul');
        tabs.classList.add('tabs')
        let elements = 3;
        for(let i = 1; i <= elements; i++) {
            const tab = document.createElement('li');
            tab.classList.add('tab');
            tab.id = i;
            const text = document.createTextNode(`Tab ${i}`);
            tab.appendChild(text);
            tabs.appendChild(tab);
        }
        wrapper.appendChild(tabs);
        //Create wrapper for tab content
        const innerContent = document.createElement('div');
        innerContent.classList.add('innerContent');
        wrapper.appendChild(innerContent);
    }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pageload.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2Vsb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEluaXRpYWxMb2FkIHtcbiAgICBmaWxsUGFnZSAod3JhcHBlcikge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgICAgICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0J1c2luZXNzIFBpenphJyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB0YWJzLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKVxuICAgICAgICBsZXQgZWxlbWVudHMgPSAzO1xuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDw9IGVsZW1lbnRzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgICAgICAgICB0YWIuaWQgPSBpO1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGBUYWIgJHtpfWApO1xuICAgICAgICAgICAgdGFiLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICAgICAgdGFicy5hcHBlbmRDaGlsZCh0YWIpO1xuICAgICAgICB9XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGFicyk7XG4gICAgICAgIC8vQ3JlYXRlIHdyYXBwZXIgZm9yIHRhYiBjb250ZW50XG4gICAgICAgIGNvbnN0IGlubmVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnaW5uZXJDb250ZW50Jyk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5uZXJDb250ZW50KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9