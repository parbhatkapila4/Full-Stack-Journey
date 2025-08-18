"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SumofAge = (user1, user2) => {
    return user1.age + user2.age;
};
const ans = SumofAge({
    name: "parbhat",
    age: 23
}, {
    name: "anoop",
    age: 23
});
console.log(ans);
//# sourceMappingURL=index.js.map