type Employee = {
    name: string;
    startDate: string;
}

type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employee & Manager; 

let e: Employee = {
    name: "Parbhat",
    startDate: "25Sep2025"
}
let m: Manager = {
    name: "Parbhat",
    department: "developing"
}

let t: TeamLead = {
     name: "Parbhat",
     startDate: "25Sep2025",
         department: "developing"

}