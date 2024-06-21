var obj1 = {name: "Person 1", age: 5};
var obj2 = {age: 5, name: "person 1"};

var obj1String = JSON.stringify(obj1);
var obj2String = JSON.stringify(obj2);

if (obj1String === obj2String) {
    console.log("Objects do not have the same properties.");
} else {
    console.log("Objects have the same properties.");
}