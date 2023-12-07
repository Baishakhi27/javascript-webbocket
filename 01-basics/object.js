const person={
    fname:"Baishakhi",
    lname:"Bhuyan",
    age:21,
    location :"bbsr",
    isLoggedIn:true,
    loginDays:["monday","friday"]
};

console.log(person);
console.log(person.lname);
console.log(person["fullname"]);

person.location="CTC";
console.log(person);

//console.log(Object.freeze(person));

person.fname= "Baishakhi";
console.log(person);
person.email="bbhuyan@gmail.com";
console.log(person);

person.greeting=function(){
    console.log("hello");
}
person.greetingTw0=function(){
    console.log(`good evening, ${person.fname}`);
}

person.greeting();
person.greetingTw0();


