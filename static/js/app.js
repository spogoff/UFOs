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

// Keep track of all filters
var filters = {
    date:null,
    city:null,
    state:null,
    country:null,
    shape:null
};

// This function will replace your handleClick function
function updateFilters() {
    // Save the element, value, and id of the filter that was changed

   let dateValue = d3.select("#datetime").property("value");
   let cityValue = d3.select("#city").property("value");
   let stateValue = d3.select("#state").property("value");
   let countryValue = d3.select("#country").property("value");
   let shapeValue = d3.select("#shape").property("value");
    

    
    // If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object
    if (dateValue){
        filters.date = dateValue;
    } else delete filters.date;

    if(cityValue){
        filters.city = cityValue;
    } else delete filters.city;

    if(stateValue){
        filters.state = stateValue;
    } else delete filters.state;

    if(countryValue){
        filters.country = countryValue;
    } else delete filters.country;

    if(shapeValue){
        filters.shape = shapeValue;
    } else delete filters.shape;

    filterTable();
}

function filterTable(){
    
    let filteredData = tableData;
    // Loop through all of the filters and keep any data that matches the filter values.
    
    Object.entries(filters).forEach(function([key,value])
    {filteredData = filteredData.filter(row => row[key] === value);
      
    });


    //  Rebuild the table by calling the buildTable(); function created earlier


    buildTable(filteredData);

}
    
d3.selectAll("#filter-btn").on("click", updateFilters);

buildTable(tableData);












// function handleClick(){
    // grab the datetime value from the filter
    // let date = d3.select("#datetime").property("value");
    //  if no date is entered, filtered data will be same as original table
    // let filteredData = tableData;
    
    // filter the table using the entry date 
    // and only keep the rows where date equals the filter
//     if (date) {
//         filteredData = filteredData.filter(row => row.datetime === date);
//     };
//     // rebuild the table with the filtered data
//     buildTable(filteredData);
// };

// //  attach an event to listen for a click on the webpage
// d3.selectAll("#filter-btn").on("click", handleClick);

// // build the table when the page loads
// buildTable(filtere);