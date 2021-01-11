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
var form = d3.select(".form-group");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter(){
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    let dateValue = inputElement.property("value");
    let filterdata = tableData
    // if a date exist.....
    if (dateValue) {
        filterdata = filterdata.filter(table=> table.datetime === dateValue)
    }
    tbody.html("")
    buildtable(filterdata)

    console.log(filterdata)
}
buildtable(tableData)