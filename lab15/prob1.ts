type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

function describePerson(person: Person): string {
  return `${person.name} is ${person.age} years old and ${person.isStudent ? 'is a student.' : 'is not a student.'}`;
}

const person = { name: "Alice", age: 25, isStudent: true };
console.log(describePerson(person));
