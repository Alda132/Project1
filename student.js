var students = [];


const  addStudent = (ev)=>{ 
  ev.preventDefault();
  var arrayPoints=[];


  //alert("hello");
var a = document.getElementById('fname').value;
var b =document.getElementById('subject1').value
var c =document.getElementById('subject2').value
var d =document.getElementById('subject3').value
var e =document.getElementById('subject4').value
console.log(a);

arrayPoints.push(b);
arrayPoints.push(c);
arrayPoints.push(d);
arrayPoints.push(e);
console.log("Vektori i pikeve qe u shtua: " ,arrayPoints);
var addElement={
name: a,
pike: arrayPoints 
}
students.push(addElement);
console.log("Vektori students  me objektet: ", students);
//document.querySelector('form').reset();
document.getElementById('forma2').reset();
return students;
}
document.addEventListener('DOMContentLoaded', ()=>{
  document.getElementById('submit').addEventListener('click', addStudent);
});
