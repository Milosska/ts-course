// Task 1
let age: number;
age = 50;
let names: string;
names = "Max";
let toggle: boolean;
toggle = true;
let empty: null;
empty = null;
let notInitialize: undefined;
notInitialize = undefined;
let callback = (a: number): number => {
  return 100 + a;
};

// Task 2
let anything: any;
anything = -20;
anything = "Text";
anything = {};

// Task 3
let some: unknown;
some = "Text";

let str: string;
if (typeof some === "string") {
  str = some;
}

// Task 4
let person: [string, number];
person = ["Max", 21];

// Task 5
enum Pending {
  LOADING,
  READY,
}

const page = {
  load: Pending.READY,
};

if (page.load === Pending.LOADING) {
  console.log("Сторінка завантажується");
}
if (page.load === Pending.READY) {
  console.log("Сторінка завантажена");
}

// Task 6
let param: string | number;
param = "Hello!";
param = 5;

// Task 7
let literal: "enable" | "disable";
literal = "enable";

// Task 8
function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

// Task 9
type firstPage = {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
  details?: {
    createAt: string;
    updateAt?: string;
  };
};

const page1: firstPage = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
