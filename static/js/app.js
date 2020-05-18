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


function handleClick(){
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    //  if no date is entered, filtered data will be same as original table
    let filteredData = tableData;
    // filter the table using the entry date 
    // and only keep the rows where date equals the filter
    if (date) {
        filteredData.filter(row => row.datetime === date);
    };
    // rebuild the table with the filtered data
    buildTable(filteredData);
};

//  attach an event to listen for a click on the webpage
d3.selectAll("filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);