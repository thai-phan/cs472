
let student = {
    firstName: "",
    lastName: "",
    grades: [],

    inputNewGrade(newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    }
};


let student1 = Object.create(student);
student1.firstName = "Thai";
student1.lastName = "Phan";
student1.grades = [80, 90];
student1.inputNewGrade(85);

const student2 = Object.create(student);
student2.firstName = "Neng";
student2.lastName = "Hun";
student2.grades = [75, 95];
student2.inputNewGrade(100);


const student3 = Object.create(student);
student3.firstName = "Bobby";
student3.lastName = "Bui";
student3.grades = [65, 70];
student3.inputNewGrade(80);

let students = [];
students.push(student1, student2, student3);

let totalAverage = 0;
students.forEach(s => {
    totalAverage += s.computeAverageGrade();
});

const classAverage = totalAverage / students.length;

console.log("Class Average Grade:", classAverage);
