// import the data from data.js
const tableData = data;

// reference the HTML table using D3
var tbody = d3.select("tbody");


function buildTable(data){
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow)=> {
       let row = tbody.append("tr");
        // loop therough each field in the dataRow and add each value as a table cell
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
};
