// const person={
//     fname:"Baishakhi",
//     lname:"Bhuyan",
//     age:21,
//     location :"bbsr",
//     isLoggedIn:true,
//     loginDays:["monday","friday"]
// };
// const user={};
// user.userid=78654;
// user.userName="priyanshu";
// user.userStatus="Active";
// user.isLoggedIn=true;
// console.log(user);

// console.log(Object.entries(user));
// console.log(Object.keys(person));
// console.log(Object.values(person));

// console.log(person.hasownproperty("isLoggedIn"));
// console.log(person.hasownproperty("gender"));
// //CSSConditionRule.log(tret ufu.kkji...prompt);
const arrayObj=[{
id:101,
location:"bbsr"
},
{
    id:102,
    location:"ctc"
},
{
    id:103,
    location:"HYD"
}];

console.log(arrayObj);
console.log(arrayObj[2]);

//de-structuring of object
const courseDetails={
    courseName:"js",
    courseFee:"4000",
    providedBY:"WB"
};
console.log(courseDetails);
const{providedBY:PB}=courseDetails;

console.log(PB);
// PB="BL"We can only print the value by destructuring technique but cant change the value of a key by destructuring technique.
//console.log(PB);
