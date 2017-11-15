var CountryData = [];

d3.json('CountryData.json', function(error, data) {
    if (error) throw error;

    CountryData.push(data);
    console.log(CountryData);
    
    var svg = d3.select('#viz1')
    .append('svg')
    .attr('width', 450)
    .attr('height', 840);
    
    var yScale1 = d3.scaleLinear()
    .domain([d3.min(data, function (d) { return d.eci_value}), d3.max(data, function(d) { return d.eci_value; })])
    .range([820, 0]);
    
    var yScale2 = d3.scaleLinear()
    .domain([d3.min(data, function (d) { return d.GDP_change_2016}), d3.max(data, function(d) { return d.GDP_change_2016; })])
    .range([820, 0]);
    
    var yScale3 = d3.scaleLinear()
    .domain([d3.min(data, function (d) { return d.Gini}), d3.max(data, function(d) { return d.Gini; })])
    .range([820, 0]);
    
        svg.selectAll('line#first')
        .data(data)
            .enter()
            .append("line")
                .attr("x1", 0)
                .attr("id", '#first')
                .attr("y1", function (d) {return yScale2(d.GDP_change_2016)})
                .attr("x2", 200)
                .attr("y2", function (d) {return yScale1(d.eci_value)})
                .attr("stroke-width", 1)
                .attr("stroke", "violet");

        svg.selectAll("line#second")
        .data(data)
            .enter()
            .append("line")
                .attr("x1", 250)
                .attr("id", '#second')
                .attr("y1", function (d) {return yScale1(d.eci_value)})
                .attr("x2", 500)
                .attr("y2", function (d) {return yScale3(d.Gini)})
                .attr("stroke-width", 1)
                .attr("stroke", "violet");

        svg.selectAll("text.labels")
        .data(data)
            .enter()
            .append("text")
                .attr("class", "labels")
                .text(function (d) {return d.country_eci})
                .attr("x", 225)
                .attr("y", function (d) {return yScale1(d.eci_value)+7})
                .attr('text-anchor', 'middle')
                .attr("visibility", "visible");

        // svg.selectAll(".labels")
        // .on('mouseon', function() {
        //           d3.select(this)
        //           .append("text.new")
        //           .text(function (d) {return d.eci_value})
        //           .attr("visibility", "visible").style('opacity', 1)
        //           .attr("x", 0)
        //           .attr("y", function (d) {return yScale2(d.GDP_change_2016)+7}); 
        //         })
        //         .on('mouseout', function() {
        //           d3.select(this).style('opacity', 1).attr('visibility', "inherit"); 
        //         });
                
        // svg.selectAll("line")
        // .on('mouseon', function() {
        //           d3.select(this).attr("visibility", "visible").style('opacity', 1); 
        //         })
        //         .on('mouseover', function() {
        //           d3.select(this).style('opacity', 1).attr('visibility', "inherit"); 
        //         });


    
    });
    
   
