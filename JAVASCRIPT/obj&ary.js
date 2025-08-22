// //object
let person = {
  name: "Ana",
  age: 21,
  hobbies: ["reading", "eating"],
  isStudent: true

};

console.log(person.name);       // Dot notation
console.log(person["age"]);
console.log(person["hobbies"]); // Bracket notation

// // Methods in Objects (Functions inside Objects)
let person1 = {
  name: "Ana",
  greet: function() {
    return "Hello, my name is " + this.name;
  }
};

console.log(person1.greet());

// //studentsRecordSystem
let students = [];
let count = parseInt(prompt("How many students do you want to enter?"));

for (let i = 0; i < count; i++) {
  let name = prompt(`Enter name of student ${i + 1}:`);
  let age = parseInt(prompt(`Enter age of ${name}:`));
  let course = prompt(`Enter course of ${name}:`);

  let student = {
    name: name,
    age: age,
    course: course,
    result: function () {
      return "Name: " + this.name + ", Age: " + this.age + ", Course: " + this.course;
    }
  };

  students.push(student);
  console.log(student.result());

}

// Student Grade System
let student = [];
let number = parseInt(prompt("Enter number of student:"));

for (let c = 1; c <= number; c++) {
  let name = prompt(`Enter name of student ${c}:`);
  let grade = parseInt(prompt(`Enter grade of ${name}:`));

  let Info = {
    name: name,
    grade: grade,
    status: function getStatus() {
      if (grade >= 75) {
        return "Name:" + this.name + " " + "Grade:" + this.grade + " " +"Status:PASSED" ;
      } else if (grade <= 75) {
       return "Name:" + this.name + " " + "Grade:" + this.grade + " " +"Status:FAILED" ;
      } else {
        return "EMPTY";
      }

    }
  };
  student.push(Info);
  console.log(Info.status());
}
let passCount = 0;
let failCount = 0;

for (let c of student) {
  if (c.grade >= 75) {
    passCount++;
  } else {
    failCount++;
  }
}

console.log(`\nTotal Passed: ${passCount}`);
console.log(`Total Failed: ${failCount}`);



