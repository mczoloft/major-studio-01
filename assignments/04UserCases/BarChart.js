
// 1. Our function will now return an object
// It's like we're defining a Class Chart
var BarChart = function(){
    // 2. This is the object it will return. It starts empty.
    var obj = {};
    // 3. These variables are shared across those functions,
    // that's why they go outside of them.
    // They are called Class variables.
    var margin = {top: 30, right: 50, bottom: 30, left: 0};
    var width = 280 - margin.left - margin.right;
    var height = 180 - margin.top - margin.bottom;
 
    var svg, chart;
    var xScale, yScale;
    var xAxis, yAxis;
    // Our Chart object will have 2 functions:
    // setup and update
    // They are called methods.
    // 4. Inside this: appending svg (g), chart (g),
    // and axis (g) — not scales!
    // These are the things that won't change.
    // Also, this function will receive the data
    // and pass it to the update
    obj.setup = function(){
        // 5. Don't forget to take out the var declarations!
        // Otherwise you'll be creating a new variable
        // instead of using the Class one.
        svg = d3.select('#viz2')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            ;
        // svg.call(tip);
        chart = svg.append('g')
            .attr('id', 'barcharts')
            .attr('transform', 'translate('+margin.left+', '+margin.top+')')
            ;
        // 5. Appending the axis
        // Take out any reference to the scale at this point
        chart.append('g')
            .attr('transform', 'translate(0, '+height+')')
            .attr('class', 'x axis')
            // .call(xAxis)
            ;
        chart.append('g')
            .attr('transform', 'translate('+width+', 0)')
            .attr('class', 'y axis')
            // .call(yAxis)
            ;
    }
    
    // 7. All the rest goes inside here. That includes:
    // scales, bars
    obj.update = function(dataset, isLog, type, color){
        console.log(dataset);

        // /*----- SCALES ----*/
        var min, max;
        if (type=="GDP") {
            min = 1;
            max = 10000;
        } else if (type=="ECI") {
            min = -2.5; 
            max = 0.5;
        } else {
            min = 0;
            max = 65;
        }
        // 9. As in setup, remember to take out the var
        // declarations so we don't mix up local
        // and Class variables — for scales and axis.
        
        // Log ou linear?
        yScale = isLog ? d3.scaleLog() : d3.scaleLinear();
        
        // Now let's define the input and output
        yScale.domain([min, max])   // input
            .range([height, 0])    // output
            ;

        xScale = d3.scaleBand()
            .domain(dataset.map(function (d){return d.year}))        
            .range([0, width])
            .paddingInner(0.1)
            ;
            
        /*----- AXIS -----*/
        
        xAxis = d3.axisBottom()
            .scale(xScale)
            .ticks(4)
            .tickValues([2000, 2005, 2010, 2015])
            ;
        yAxis = d3.axisRight()
            .scale(yScale)
            ;
            
        if (type=="GDP") {
                yAxis
                .ticks(5, '$')
                .tickValues([1, 10, 100, 1000, 10000])
        } else if (type=="ECI") {
                yAxis
                .ticks(5)
                .tickValues([-2.5, -1.5, -0.5, 0, 0.5])
        } else {
            yAxis
                .ticks(5)
        }
        // 10. Now that the scales are defined, we can
        // "call" them into out axis groups
        chart.select('.x.axis')
        // 16. Add transitions to the scales                    
            .transition()
            .duration(2000)
            .call(xAxis)
            ;
        chart.select('.y.axis')
            .transition()
            .duration(2000)                    
            .call(yAxis)
            ;
        
            
        /*----- DRAWING -----*/
        var bars = chart.selectAll(".bar").data(dataset);

        var barsEnterUpdate = bars
            .enter()
            .append("rect")
            .classed("bar", true)
            .on('mouseover', function(d) {
                d3.select(this)
                .classed('hover', true)
                .select('text')
                .attr('visibility', 'visible')
                ;
            })
            .on('mouseout', function(d) {
                d3.select(this)
                .classed('hover', false)
                .select('text')
                .attr('visibility', 'hidden')
                ;
            })
            .merge(bars)
            .transition()
            .duration(2000)
            .attr("x", function(d) { return xScale(d.year)})
            .attr("y", function(d) { return yScale(d.value)})
            .attr("height", function(d) { return height - yScale(d.value); })
            .attr("width", xScale.bandwidth())
            .attr("fill", color)
            ;
            
            
            
    }
    // 11. Nothing works if we don't
    // return the object in the end
    return obj;
}