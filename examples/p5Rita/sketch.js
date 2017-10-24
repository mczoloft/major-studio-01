var input;
var ritaString;

function setup (){
    noCanvas();
    input = createInput();
    input.changed(rita); //reference p5
    
}

function rita(event) {
    
    var str = event.target.value;
    
    ritaString = RiString(str);
    
    var words = ritaString.words();
    
    console.log(words);
    
    words.forEach(function(element) {
        var features = RiString(element).features();
            console.log(features);
            
        var span = createElement('span', features.text);
        
        if (features.pos === 'nn')
            span.style('background', 'purple')
    });
}