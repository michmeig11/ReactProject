const instructors = [
    {name: 'Quincy', specialty:'Quantum Mechanics', medals: 7},
    {name: 'Kenn', specialty:'Norse Mythology', medals: 5},
    {name: 'Paul', specialty:'Tuvan Throat Singing', medals: 8},
    {name: 'Aaron', specialty:'Entomology', medals: 4},
    {name: 'Carolyn', specialty:'Kung Fu', medals: 2},
]

let instructor_names = [];

for (let i = 0; i < instructors_length; i++) {
    if(instructors[i].medals >= 5){
        instructor_names.push(instructors[i].name);
    }
}
console.log(instructor_names);

const instructorNames = instructors.filter(instructor => instructor.medals >= 5);
console.log(instructorNames);

const instructorInfo = instructor.filter(instructor => instructors.name = 'Aaron');
