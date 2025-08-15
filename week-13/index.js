"use strict";
// who can vote and who cannot via typeScript
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "Parbhat",
    age: 23,
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
const ans = isLegal(user);
if (ans) {
    console.log("I am Legal");
}
else {
    console.log("I am Under Age");
}
//# sourceMappingURL=index.js.map