interface User {
    firstName: string;
    lastName: string;
    age: number;
}

function filterUser(users: User[]){
    let ans = []
    for (let i = 0; i < users.length; i++){
        if (users[i].age > 18){
            ans.push(users[i])
        }
    }
}