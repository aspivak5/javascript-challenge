// from data.js
var tableData = data;

//reference tbody 
var tbody = d3.select("tbody");

// YOUR CODE HERE!
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

    var dateElement = d3.select("#datetime");
    var dateValue = dateElement.property("value");

    var cityElement = d3.select("#city");
    var cityValue = cityElement.property("value");

    var stateElement = d3.select("#state");
    var stateValue = stateElement.property("value");

    var countryElement = d3.select("#country");
    var countryValue = countryElement.property("value");

    var shapeElement = d3.select("#shape");
    var shapeValue = shapeElement.property("value");

    // if a filter exist, filter table to match the filter input
    if (cityValue) {
        filterdata = tableData.filter(table=> table.city === cityValue.toLowerCase());
        //tbody.html("");
    }
    else if (dateValue) {
        filterdata = tableData.filter(table=> table.datetime === dateValue);
        //tbody.html("");
    }
   
    else if (stateValue) {
        filterdata = tableData.filter(table=> table.state === stateValue.toLowerCase());
        //tbody.html("");
    }
    else if (countryValue) {
        filterdata = tableData.filter(table=> table.country === countryValue.toLowerCase());
        //tbody.html("");
    }
    else if (shapeValue) {
        filterdata = tableData.filter(table=> table.shape === shapeValue.toLowerCase());
        //tbody.html("");
    }
    // if no date input, then show table
    else{
        filterdata = tableData
        //tbody.html("")
    }
    
    tbody.html("")

    // run buildtable function for the filtertable
    createtable(filterdata);

    console.log(filterdata);
}
createtable(tableData); 

