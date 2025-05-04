function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];

    this.inputNewGrade = function(newGrade) {
        this.grades.push(newGrade);
    };

    this.computeAverageGrade = function() {
        if (this.grades.length === 0) return 0;
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return sum / this.grades.length;
    };
}

const student1 = new Student("Thai", "Phan");
student1.inputNewGrade(80);
student1.inputNewGrade(90);
student1.inputNewGrade(100);

const student2 = new Student("Hun", "Neng");
student2.inputNewGrade(75);
student2.inputNewGrade(85);
student2.inputNewGrade(95);

const student3 = new Student("Bobby", "Brown");
student3.inputNewGrade(60);
student3.inputNewGrade(70);
student3.inputNewGrade(65);

const students = [student1, student2, student3];

let total = 0;
students.forEach(s => {
    total += s.computeAverageGrade();
});

const classAverage = total / students.length;

console.log("Class Average Grade:", classAverage);
