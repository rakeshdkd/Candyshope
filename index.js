class human {
  constructor(Gender) {
    this.gender = Gender;
  }

  printGender() {
    console.log(this.gender);
  }
}
class person extends human {
  constructor(Name, Age, Gender) {
    super(Gender);
    this.name = Name;
    this.age = Age;
    this.gender = "female";
  }
  printMyName() {
    console.log(this.name);
  }

  printMyAge() {
    console.log(this.age);
  }
}
const Person = new person("xyz", 36, "male");

Person.printMyName();
Person.printGender();
Person.printMyAge();

// Spraed operetor on Array
const num = [1, 2, 3];
const newNum = [...num, 4];
console.log(newNum);

// Spraed operetor on object
const pers = {
  name: "max",
};
const newPrs = {
  ...pers,
  age: 28,
};
console.log(newPrs);

// Rest operator using filter method
const myfncn = (...args) => {
  return args.filter((elem) => elem === 1);
};

console.log(myfncn(1, 2, 3, 4));

// Array destructuring

const nums = [1, 2, 3];
[num1, , num3] = nums;

console.log(num1);
console.log(num3);

// Object destructuring
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 39,
  city: "New York",
};

// Extracting properties using object destructuring
const { firstName, lastName, age } = person1;

console.log(firstName); // Output: John
console.log(lastName); // Output: Doe
console.log(age); // Output: 30

// Primitive data-type & Reffrence data-type

// Object ref datatype
const student = {
  name: "Yash",

  age: "25",
};

function changeAge(studentObj) {
  studentObj.age = "30";
}

changeAge(student);

console.log(student.age);

//-----------

const student1 = {
  name: "Yash",

  age: "25",
};

function changeAge(studentObj) {
  studentObj.age = "30";
}

changeAge({ ...student1 });

console.log(student1.age);

// Array ref data type
const studentArr = [
  {
    name: "Yash",

    age: "25",
  },

  {
    name: "Vaibhav",

    age: "23",
  },
];

function changeAge(studentObj) {
  studentObj.age = "30";
}

changeAge(studentArr[0]);

console.log(studentArr[0].age);
