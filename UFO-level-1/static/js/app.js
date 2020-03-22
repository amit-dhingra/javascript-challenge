// from data.js
var tableData = data;

console.log(tableData);

// Get a reference to the table body
var tablebody = d3.select("tbody");

// UFO  values for each column
tableData.forEach(function(ufo) {
    console.log(ufo);
    // Append one table row `tr` 
    var row = tablebody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufo).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


  // Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

tablebody.html("");

// Select the input date node
var inputElementDate = d3.select("#datetime");

// Select the input city node
var inputElementCity = d3.select("#city");

// Get the value property of the input date
var inputValueDate = inputElementDate.property("value");

// Get the value property of the input city
var inputValueCity = inputElementCity.property("value");


// console.log input Date value
console.log("Date selected",inputValueDate);

// console.log input City value
console.log("City selected",inputValueCity);

if(inputValueCity === ''){
    console.log("Inside Date");
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValueDate);
}

else if(inputValueDate === ''){
    console.log("Inside City");
    var filteredData = tableData.filter(sighting => sighting.city === inputValueCity);
}

else {
    console.log("Inside City and Date");
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValueDate && sighting.city === inputValueCity );
}
    
// console.log filter values
console.log(filteredData);
filteredData.forEach(function(selections) {

console.log(selections);
// Append one table row `tr` for each UFO Sighting 
var row = tablebody.append("tr");
// Use `Object.entries` to console.log each UFO Sighting value
Object.entries(selections).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    var cell = row.append("td");
    cell.text(value);
});
});
});
