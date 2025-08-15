// who can vote and who cannot via typeScript

interface User {
    name: string,
    age: number,
    address: {
        city: string,
        country: string,
        pincode: number
    }
}


let user: User =  {
    name: "Parbhat",
    age: 8,
    address: {
        city: "Bengaluru",
        country: "India",
        pincode: 530066

    }
}
function isLegal(user: User): boolean{
        if(user.age >= 18){
            return true;
        }else{
            return false
        }
}
const ans = isLegal(user)
if (ans){
    console.log("I am Legal")
}else{
    console.log("I am Under Age");
}