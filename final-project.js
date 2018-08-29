let students = []
let newName

let l = document.getElementById('list')
for(let i=0; i < students.length; i++){
	l.innerHTML += '<li>' + students[i] + '</li>'
}

let addName = document.getElementById('add-name')
addName.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
    newName = addName.value
	students.push(newName)
	l.innerHTML += '<li>' + newName + '</li>'
    }
});
let btn = document.getElementById('btn')

btn.addEventListener('click', function() {
	newName = addName.value
	students.push(newName)
	l.innerHTML += '<li>' + newName + '</li>'
})

let btnCall = document.getElementById("btn-call")
btnCall.addEventListener('click', function(){
	let calledStudent = students[Math.floor(Math.random() * students.length)]
	let selectStudent = document.getElementById("selected-student")
	selectStudent.innerHTML = calledStudent
})


