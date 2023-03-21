
// CREATE A DYNAMIC TABLE
// Write a Javascript function that will dynamiclly create a table User should input the number of Colums and Rows In every table cell print which row and column it is (ex. Row-3 Column-1)

// Don't forget to use google! :)

let userColums = parseInt (prompt('Enter number of columns'));
let userRows = parseInt (prompt('Enter number of rows'));

function createTable(numRows, numCols) {

 var table = document.createElement("table");
 var tbody = document.createElement("tbody");
 table.appendChild(tbody);
 for (var i = 0; i < numRows; i++) {
   var row = document.createElement("tr");
   for (var j = 0; j < numCols; j++) {
     var cell = document.createElement("td");
     cell.innerHTML = "Row-" + (i+1) + " Column-" + (j+1);
     row.appendChild(cell);
   }
   tbody.appendChild(row);
 }
 return table;
}

document.body.appendChild(createTable(userColums, userRows));