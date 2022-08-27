let users = [
    { firstName: "Susan", lastName: "Steward" },
    { firstName: "Daniel", lastName: "Longbottom" },
    { firstName: "Jacob", lastName: "Black" }
];

const customers = [
    { id: 1, name: 'Abu Hanif', age: 25, price: 25000 },
    { id: 1, name: 'Abu Hanif', age: 26, price: 25000 },
    { id: 1, name: 'Abu Hanif', age: 32, price: 25000 },
    { id: 1, name: 'Abu Hanif', age: 35, price: 25000 },
]
const userFullName = users.map(user => user.firstName);
console.log(...userFullName);

users.forEach(user => console.log(user.firstName + " " + user.lastName));
const ageAvobe30 = customers.find(x => x.age > 30);
console.log(ageAvobe30);