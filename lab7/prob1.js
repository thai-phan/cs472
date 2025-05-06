function Student(studentId) {
    this.studentId = studentId;
    this.answers = [];

    this.addAnswer = function (question, answer) {
        this.answers.push({ qid: question.qid, answer: answer });
    };
}

function Question(qid, answer) {
    this.qid = qid;
    this.answer = answer;

    this.checkAnswer = function (studentAnswer) {
        return this.answer === studentAnswer;
    };
}

function Quiz(questionsArray, studentsArray) {
    this.questions = new Map();
    questionsArray.forEach(q => {
        this.questions.set(q.qid, q);
    });

    this.students = studentsArray;

    this.scoreStudentBySid = function (sid) {
        const student = this.students.find(s => s.studentId === sid);
        if (!student) return 0;

        let score = 0;
        student.answers.forEach(({ qid, answer }) => {
            const question = this.questions.get(qid);
            if (question && question.checkAnswer(answer)) {
                score++;
            }
        });
        return score;
    };

    this.getAverageScore = function () {
        if (this.students.length === 0) return 0;

        const totalScore = this.students.reduce((sum, student) => {
            return sum + this.scoreStudentBySid(student.studentId);
        }, 0);

        return totalScore / this.students.length;
    };
}




const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];

const questions =[
    new Question(1, 'b'),
    new Question(2, 'a'),
    new Question(3, 'b')
];
const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5