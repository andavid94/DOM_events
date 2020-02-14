/*
** this function builds a table with a header row, given integer values for rows and columns
*/
function buildTable(rows, columns) {
    var table = document.createElement("table");
    table.setAttribute("id", "table");
    var tableBody = document.createElement("tbody");

    // create table with 4 rows/columns
    for (var i = 0; i < rows; i++) {
        var tableRow = document.createElement("tr");
        tableRow.setAttribute("id", "tableRow");

        for (var j = 1; j <= columns; j++) {
            
            // save cell information
            var cell = "";                         
            var cellData = "";

            if (i == 0)  {              
                cell = "th";                    
                cellData += ("Header " + j);
            } else {
                cell = "td";
                cellData += (i + ', ' + j);
            }

            // create cell given information about it's position
            var currCell = document.createElement(cell);
            var currCellData = document.createTextNode(cellData);

            currCell.style.border = "1px solid black";
            currCell.appendChild(currCellData);     // append the data as a child of currCell
            tableRow.appendChild(currCell);         // append currCell as a child of the tableRow
        }

        tableBody.appendChild(tableRow);       // append the tableRow as child of tableBody
    }

    table.appendChild(tableBody);         // append the tableBody as child of table
    document.body.appendChild(table);
}

/*
** this function builds the buttons used to navigate the table
*/
function buildButtons() {
    // build lists to represent different button attributes
    var id_list = ["up", "down", "left", "right", "mark"];
    var buttonData = ["Up", "Down", "Left", "Right", "Mark Cell"];

    // create each button by iterating over lists
    for (var i = 0; i < 5; i++) {
        var currButton = document.createElement("button");
        var currButtonData = document.createTextNode(buttonData[i]);
        currButton.setAttribute("id", id_list[i]);
        currButton.appendChild(currButtonData);
        document.body.appendChild(currButton);
    }
}

function moveUp(){
    curr = document.getElementById("this");            
    
    if (curr.parentNode.rowIndex > 1) {
        var colOffset = curr.cellIndex;                       
        curr.style.border = "1px solid black";    
        curr.removeAttribute("id");               
        
        // change curr to represent the cell before it in the column
        curr = curr.parentNode;
        curr = curr.previousElementSibling;
        curr = curr.firstElementChild;
        
        for (var i = 0; i < colOffset; i++) {
            curr = curr.nextElementSibling;
        }

        curr.style.borderWidth = "4px";
        curr.id = "this";
    }
}

function moveDown(){
    curr = document.getElementById("this");            
    
    if (curr.parentNode.rowIndex < (num_rows-1)) {
        var colOffset = curr.cellIndex;                       
        curr.style.border = "1px solid black";    
        curr.removeAttribute("id");               
        
        // change curr to represent the cell before it in the column
        curr = curr.parentNode;
        curr = curr.nextElementSibling;
        curr = curr.firstElementChild;
        
        for (var i = 0; i < colOffset; i++) {
            curr = curr.nextElementSibling;
        }

        curr.style.borderWidth = "4px";
        curr.id = "this";
    }
}

function moveLeft(){
    curr = document.getElementById("this");            
    
    if (curr.cellIndex > 0) {                    
        curr.style.border = "1px solid black";    
        curr.removeAttribute("id");               
        
        curr = curr.previousElementSibling;
        curr.style.borderWidth = "4px";
        curr.id = "this"; 
    }
}

function moveRight(){
    curr = document.getElementById("this");            
    
    if (curr.cellIndex < (num_columns-1)) {                    
        curr.style.border = "1px solid black";    
        curr.removeAttribute("id");               
        
        curr = curr.nextElementSibling;
        curr.style.borderWidth = "4px";
        curr.id = "this";  
    }
}

function markCell() {
    curr = document.getElementById("this");
    curr.style.backgroundColor = "#4DBE90";
}

var num_rows = 4;
var num_columns = 4;

buildTable(num_rows, num_columns);
buildButtons();

var curr = document.getElementsByTagName("td")[0];
curr.setAttribute("id", "this");
curr.style.borderWidth = "4px"; 

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("up").addEventListener("click", moveUp);
    document.getElementById("down").addEventListener("click", moveDown);
    document.getElementById("left").addEventListener("click", moveLeft);
    document.getElementById("right").addEventListener("click", moveRight);
    document.getElementById("mark").addEventListener("click", markCell);    
});

