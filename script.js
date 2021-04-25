var inames = [];
var iprice = [];
var idesc = [];

var ipage ;
var index;
var n = 1;
var x = 0;

function AddRow(){

    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);

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
    cel5.innerHTML =  "<button class='btn btn-danger' onclick='delRow()'>Remove</button>";

    n++;
    x++;


}


var loadFile = function(event) {
    ipage= document.getElementById('image');  
    ipage.src = URL.createObjectURL(event.target.files[0]);
    
};
var ha;
var ts;
var i=1;
var j=0;
    function delRow(){
        var row = document.getElementById('show');
      ts=row.rows.length;
   
      console.log(ts);
     for(i;i<ts;i++){
         
        
        
        row.deleteRow(i);
        row.insertRow(i);
         

    }
  
    }
