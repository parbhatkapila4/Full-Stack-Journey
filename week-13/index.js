"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log("I am Nested Function");
});
//# sourceMappingURL=index.js.map