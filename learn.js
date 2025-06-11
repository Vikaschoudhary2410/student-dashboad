let form = document.getElementById('studentForm');
let name = document.getElementById('name');
let marks = document.getElementById('marks');
let list = document.getElementById('ul');

let students = JSON.parse(localStorage.getItem("student")) || [];
renderStudents(students);

form.addEventListener('submit', function(e){
    e.preventDefault();

    let student = {
        name: name.value.trim(), 
        marks: marks.value
    };

    if(student.name === "" || isNaN(student.marks)){
        alert("enter valid details");
        return;
    }

    students.push(student);
    localStorage.setItem("student", JSON.stringify(students));
    renderStudents(students);

    name.value = "";
    marks.value = "";
})

function renderStudents(students){
    list.innerHTML = "";
    let passed = students.filter(stu => stu.marks > 35);

    passed.forEach(student => {
        let li = document.createElement('li');
        li.innerHTML = `${student.name} - ${student.marks}`;
        list.appendChild(li);
    });
}

