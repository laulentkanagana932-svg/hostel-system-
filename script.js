//LOGIN
function login(){
    let u=document.getElementById("user").value;
    let p=document.getElementById("pass").value;

    if(u==="admin" && p==="1234"){
        alert("Login successful");
        window.location.href="dashboard.html";
    }else{
        alert("Wrong login details");
    }
}

//ADD STUDENT
function addStudent(){
    let name=document.getElementById("name").value;
    let room=document.getElementsById("room").value;

    let students=JSON.parse(localStorage.getItem("students"))||[];

    students.push({name, room});

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
}

//DISPLAY STUDENTS
function displayStudents(){
    let list=document.getElementById("list");
    if(!list) return;

    list.innerHTML="";

    let students=JSON.parse(localStorage.getItem("students"))||[];

    students.forEach((s, index)=>{
        list.innerHTML+=`
        <li>
            ${s.name}-Room ${s.room}
            <button onclick="deleteStudent(${index})">Delete</button>
        </li>
         `;
    });
}

//DELETE STUDENT
function deleteStudent(index){
    let students=JSON.parse(localStorage.getItem("students"));
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

//ADD ROOM
function addRoom(){
    let roomNo=document.getElementById("roomNo").value;

    let rooms=JSON.parse(localStorage.getItem("rooms"))||[];
    rooms.push(roomNo);

    localStorage.setItem("rooms", JSON.stringify(rooms));

    displayRooms();
}

//DISPLAY ROOMS
function displayRooms(){
    let roomList=document.getElementById("roomList");
    if(!roomList) return;

    roomList.innerHTML="";

    let rooms=JSON.parse(localStorage.getItem("rooms"))||[];

    rooms.forEach((r, i)=>{
        roomList.innerHTML+=`<li>${r}</li>`;
    });
}

//AUTO LOAD
window.onload=function(){
    displayStudents();
    displayRooms();
}