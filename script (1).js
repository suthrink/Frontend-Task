var inames = [];
var iprice = [];
var idesc = [];
var num = 0;
var ipage ;
var index;
var n = 1;
var x = 0;

function AddRow(){

    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);
    if( x == 0){
    	num = 0;
    }else {
    	num = x + 1;
    }
    NewRow.id = num;
    inames[x] = document.getElementById("pname").value;
    iprice[x] = document.getElementById("pprice").value;
    idesc[x] = document.getElementById("description").value;
   
    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);
   

    cel1.innerHTML = inames[x];
    cel2.innerHTML =  iprice[x];
    cel3.innerHTML =  idesc[x];
    cel4.innerHTML =  "<img src=\'"+ ipage.src  +"\' width=\"50px\" height=\"50px\">";
    cel5.innerHTML =  "<button class='btn btn-danger' onclick='delRow("+ num +")' >Remove</button>";

    n++;
    x++;
    

}


var loadFile = function(event) {
    ipage= document.getElementById('image');  
    ipage.src = URL.createObjectURL(event.target.files[0]);
    
};

function delRow(id){
var show = document.getElementById('show');
var row = document.getElementById(id);
/*var ts=show.rows.length;
console.log(ts);
for(var i=1;i<ts;i++){
    //show.deleteRow(i);
    var h=document.getElementById('show').rows[i].cells[5];
    console.log(h);
    
    
}*/
row.parentElement.removeChild(row); 
row.parentElement.insertRow(row);
}
