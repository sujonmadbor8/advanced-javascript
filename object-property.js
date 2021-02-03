const students = [
    { id: 21, name: 'Omar Sunny' },
    { id: 31, name: 'Maannaa' },
    { id: 41, name: 'MOyouri' },
    { id: 71, name: 'deepjol' }
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id)
const bigger = students.filter(s => s.id > 40)
const bigger2 = students.find(s => s.id > 40)
console.log(bigger2);