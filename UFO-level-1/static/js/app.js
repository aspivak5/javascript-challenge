// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
tableData.forEach((ufoReport)=>{
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key,value])=>{
        row.append("td").text(value);
    });
});
