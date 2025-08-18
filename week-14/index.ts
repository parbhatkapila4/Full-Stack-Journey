interface User {
    name: string,
    age: number
}

function sumofAge(user1: User, user2: User){
    return user1.name + user2.name;
}

const ans = sumofAge({
    name: "parbhat",
    age: 23
}, {
    name: "punyakrit",
    age: 23
})

console.log(ans)