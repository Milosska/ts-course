// Task 1
var age;
age = 50;
var names;
names = "Max";
var toggle;
toggle = true;
var empty;
empty = null;
var notInitialize;
notInitialize = undefined;
var callback;
callback = function (a) {
    return 100 + a;
};
// Task 2
var anything;
anything = -20;
anything = "Text";
anything = {};
// Task 3
var some;
some = "Text";
var str;
if (typeof some === "string") {
    str = some;
}
// Task 4
var person;
person = ["Max", 21];
// Task 5
var Pending;
(function (Pending) {
    Pending[Pending["LOADING"] = 0] = "LOADING";
    Pending[Pending["READY"] = 1] = "READY";
})(Pending || (Pending = {}));
// Task 6
var param;
param = "Hello!";
param = 5;
// Task 7
var literal;
literal = "enable";
// Task 8
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error("Error");
}
var page1 = {
    title: "The awesome page",
    likes: 100,
    accounts: ["Max", "Anton", "Nikita"],
    status: "open",
    details: {
        createAt: "2021-01-01",
        updateAt: "2021-05-01",
    },
};
var page2 = {
    title: "Python or Js",
    likes: 5,
    accounts: ["Alex"],
    status: "close",
};
