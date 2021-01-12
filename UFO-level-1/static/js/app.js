// from data.js
var tableData = data;
//reference tbody 
var tbody = d3.select("tbody");
// YOUR CODE HERE!

//function for buildtable 
function createtable(table){
table.forEach((ufoReport)=>{
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key,value])=>{
        row.append("td").text(value);
    });
    });
};

var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click",runEnter);
form.on("submit",runEnter);

//function for form
function runEnter(){
    //prevent from refreshing
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var dateValue = inputElement.property("value");

    // if a date exist, filter table to match the date input 
    if (dateValue) {
        filterdata = tableData.filter(table=> table.datetime === dateValue);
        tbody.html("");
    }
    // if no date input, then show table
    else{
        filterdata = tableData
    }
    // run buildtable function for the filtertable
    createtable(filterdata);

    console.log(filterdata);
}
createtable(tableData);