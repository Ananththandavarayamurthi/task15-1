
function handlersubmit(){
var table=document.getElementById("ta");
var newrow=table.insertRow(table.length);

cell1=newrow.insertCell(0);
cell2=newrow.insertCell(1);
cell3=newrow.insertCell(2);
cell4=newrow.insertCell(3);
cell5=newrow.insertCell(4);
cell6=newrow.insertCell(5);
cell7=newrow.insertCell(6);
cell8=newrow.insertCell(7);

  var Firstname = document.myForm.Firstname.value;
  cell1.innerHTML= Firstname;
  console.log(Firstname);
  var Lastname =document.myForm.Lastname.value;
  cell2.innerHTML=Lastname;
  var Address=document.myForm.Address.value;
  cell3.innerHTML=Address;
  var Pincode=document.myForm.Pincode.value;
  cell4.innerHTML=Pincode;
  var gender=document.myForm.genVal.value;
  cell5.innerHTML=gender;
 var State1=document.myForm.State.value;
 cell6.innerHTML=State1;
 console.log(State1)
  var Country =document.myForm.Country.value;
  cell7.innerHTML=Country;
  var Food=document.getElementById("Food");
  cell8.innerHTML=Food.value;


  document.myForm.reset();
 

  return false;
  
 
}



  