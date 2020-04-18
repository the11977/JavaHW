// Sightings 

// Declare variables
let tablebody = d3.select("tablebody");
// From data.js
var tableData = data;

// Function Build Table
function buildTable(data){
    // Clear Existing Data
    tablebody.html("");
    // Loop Through `data` 
    data.forEach((dataRow) => {
        // Append Table Row `tablerow` to the Table Body `tablebody`
        let row = tablebody.append("tablerow");
        // `Object.values` & `forEach` to Iterate Through Values
        Object.values(dataRow).forEach((val) => {
            // Append a Cell to the Row for Each Value
            let cell = row.append("td");
            cell.text(val);
        });
    })
}
// Event that Triggers a Function When the Button is Clicked
function handleClick(){
    // Prevents the Page from Refreshing
    d3.event.preventDefault();
    // Select HTML Input Element & Get the Value Property of that Input Element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

    // Check if a Date was Entered; Filter with that Date;
    if(date) {
        // Apply Filter -create filtered data -only keep rows with matching datetime value
        filterData = filterData.filter((row) => row.datetime === date);
    }
    // Build Table with Filtered Data
    buildTable(filterData);
}
// `on` Function to attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
// Build Table with data.js file 
buildTable(tableData);
