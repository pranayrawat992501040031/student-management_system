let students = [
    {
        rollNo: 992501040031,
        name: "Pranay",
        age: 19
    }
];

displayStudents();

function addStudent(){

    let rollNo = Number(
        document.getElementById("rollNo").value
    );

    let name =
        document.getElementById("name").value;

    let age = Number(
        document.getElementById("age").value
    );

    if(!rollNo || !name || !age){
        alert("Please fill all fields");
        return;
    }

    let exists = students.find(
        student => student.rollNo === rollNo
    );

    if(exists){
        alert("Roll Number already exists");
        return;
    }

    students.push({
        rollNo,
        name,
        age
    });

    displayStudents();

    document.getElementById("rollNo").value="";
    document.getElementById("name").value="";
    document.getElementById("age").value="";
}

function displayStudents(){

    let table =
        document.getElementById("studentTable");

    table.innerHTML="";

    students.forEach((student,index)=>{

        table.innerHTML += `
        <tr>
            <td>${student.rollNo}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>

            <td>
                <button
                    class="edit-btn"
                    onclick="editStudent(${index})">
                    Edit
                </button>
            </td>

            <td>
                <button
                    class="delete-btn"
                    onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    });
}

function searchStudent(){

    let rollNo = Number(
        document.getElementById("searchRoll").value
    );

    let student = students.find(
        s => s.rollNo === rollNo
    );

    let result =
        document.getElementById("searchResult");

    if(student){

        result.innerHTML =
            `Found: ${student.name},
             Age: ${student.age}`;

    }else{

        result.innerHTML =
            "Student Not Found";
    }
}

function editStudent(index){

    let newRoll = prompt(
        "Enter New Roll Number",
        students[index].rollNo
    );

    let newName = prompt(
        "Enter New Name",
        students[index].name
    );

    let newAge = prompt(
        "Enter New Age",
        students[index].age
    );

    if(newRoll && newName && newAge){

        students[index].rollNo =
            Number(newRoll);

        students[index].name =
            newName;

        students[index].age =
            Number(newAge);

        displayStudents();
    }
}

function deleteStudent(index){

    let confirmDelete =
        confirm("Delete Student?");

    if(confirmDelete){

        students.splice(index,1);

        displayStudents();
    }
}
