"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "Parbhat",
    age: 8,
    address: {
        city: "Bengaluru",
        country: "India",
        pincode: 530066
    }
};
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLegal(user));
//# sourceMappingURL=index.js.map