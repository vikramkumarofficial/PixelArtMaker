
//*********PIXEL ART MAKER*********

function makeGrid(row,col) {
	//Making grid of rows and coloumns
	let grid=" ";
	for(let i=0;i<row;i++)
	{grid+="<tr>";
		for(j=0;j<col;j++)
		{grid+="<td></td>";
		}grid+="</tr>";
	}document.getElementById('pixelCanvas').innerHTML=grid;
}

$(document.body).on('click','td',function(e){
	//filling grid with colors
	let color=document.getElementById('colorPicker').value;
	$(e.target).css('background-color', color);
});

$("#submit").click(function(e){
	e.preventDefault();
	//picking Height and Width
	let height=document.getElementById('inputHeight').value;
	let width=document.getElementById('inputWidth').value;
	makeGrid(height,width);
});
