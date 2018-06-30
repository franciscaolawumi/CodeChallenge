//var colorPicker, pixelCanvas, row, column, table;

var pixelCanvas = $("#pixelCanvas");



//pick a color
$(pixelCanvas).on("click",function(x){
  colorPicker = $("#colorPicker").val();
  $(x.target).css("background-color",colorPicker);
});

//change size
$("#sizePicker").on("submit",function(x){
   x.preventDefault(); 
   row = $("#inputHeight").val();
   column = $("#inputWeight").val();

  // When size is submitted by the user, call makeGrid()
   makeGrid(row,column); 
});
//build Grid
function makeGrid() {
  table = "<table class='table'>";
  //table+= "<tr></tr>";
 for (var i=0; i<row; i++){
   table+="<tr>";
   for (var y=0; y<column; y++){
     table+="<td class='cell'></td>";
   }
   table+= "</tr>";
 }
 table+= "</table>";
 $(pixelCanvas).html(table);
 
}



