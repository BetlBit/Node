//npm install readline-sync -S
const readline = require('readline-sync');
const choice = readline.question("Choose gender (male/female): "); //Вопрос пола
const Persons = require("fs");

let text = Persons.readFileSync("ppl.csv", "utf8");
let textArr = text.split("\n");
let textArr2 = [];

textArr.forEach((e) => {
	textArr2.push(e.split(";"))
})
textArr2.forEach((e) => {
		e.pop()
})

let Person = class	{
		constructor(name, surname, gender, birth) {
				this.name = name;
				this.surname = surname;
				this.docName = `${this.surname} ${this.name[0]}`;
				this.birth = birth;
				this.gender = gender;
		}
}

let arrObj = [];
for (let i = 0; i < textArr2.length; i++) {
		arrObj.push(new Person(...textArr2[i]));
}
// console.log(arrObj);

// Пол
let male = [];
for (let i = 0; i < arrObj.length; i++) {
		if (arrObj[i].gender === "male") {
				male.push(arrObj[i].docName);
		}
}
// console.log(male);

let female = [];
for (let i = 0; i < arrObj.length; i++) {
		if (arrObj[i].gender === "female") {
				female.push(arrObj[i].docName);
		}
}
// console.log(female);

// Выбор пола
if (choice == "male"){
	console.log(male);
}
else {
	console.log(female);
}