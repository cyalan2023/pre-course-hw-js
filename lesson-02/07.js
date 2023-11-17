let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
let clonePassportMarried = {...passportMarried,married: true, address: {...passportMarried.address} };
clonePassportMarried.address = {...clonePassportMarried.address};
console.log(passportMarried);
console.log(clonePassportMarried);