// from data.js
var tableData = data;
//reference tbody 
var tbody = d3.select("tbody");
// YOUR CODE HERE!

//function for buildtable 
function buildtable(table){
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
    let dateValue = inputElement.property("value");

    // if a date exist, filter table to match the date input 
    if (dateValue) {
        filterdata = tableData.filter(table=> table.datetime === dateValue);
    }
    //remove non-search dates 
    tbody.html("");
    // run buildtable function for the filtertable
    buildtable(filterdata);

    console.log(filterdata);
}
buildtable(tableData);