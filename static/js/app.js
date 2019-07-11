// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    var row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
        cell.text(val);
      }
    );
  });
}

  // Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function handleclick() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

 // Grab the datetime value from the filter
 var date = d3.select("#datetime").property("value");
 let filteredData = tableData;


  //console.log(inputValue);
  //console.log(tableData);

  if (date) {
     filteredData = filteredData.filter(row => row.datetime === date);
  }
  
  
  console.log(filteredData);
 
  buildTable(filteredData);

});

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click");

// Build the table when the page loads
buildTable(tableData);


var submit1 = d3.select("#filter-btn1");

submit1.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Grab the datetime value from the filter
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  

   // Check to see if a date was entered and filter the
  // data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the
    // rows where the `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.city === date);
  }
    console.log(filteredData);

    // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will
  // just be the original tableData.
   buildTable(filteredData);
});

// Attach an event to listen for the form button
d3.selectAll("#filter-btn1").on("click");

// Build the table when the page loads
buildTable(tableData);


var submit2 = d3.select("#filter-btn2");

submit2.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Grab the datetime value from the filter
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  

  if (date) {
    filteredData = filteredData.filter(row => row.state === date);
  }
    console.log(filteredData);

   
   buildTable(filteredData);
});

d3.selectAll("#filter-btn2").on("click");

// Build the table when the page loads
buildTable(tableData);

var submit3 = d3.select("#filter-btn3");

submit3.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Grab the datetime value from the filter
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  

  if (date) {
    filteredData = filteredData.filter(row => row.country === date);
  }
    console.log(filteredData);
    
    buildTable(filteredData);
});

d3.selectAll("#filter-btn3").on("click");

// Build the table when the page loads
buildTable(tableData);

var submit4 = d3.select("#filter-btn4");

submit4.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Grab the datetime value from the filter
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  

  if (date) {
    filteredData = filteredData.filter(row => row.shape === date);
  }
    console.log(filteredData);

   
   buildTable(filteredData);
});

d3.selectAll("#filter-btn4").on("click");

// Build the table when the page loads
buildTable(tableData);

var submit5 = d3.select("#filter-btn5");

submit5.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Grab the datetime value from the filter
  var date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  

  if (date) {
    filteredData = filteredData.filter(row => row.durationMinutes === date);
  }
    console.log(filteredData);

   
   buildTable(filteredData);
});

d3.selectAll("#filter-btn5").on("click");

// Build the table when the page loads
buildTable(tableData);

