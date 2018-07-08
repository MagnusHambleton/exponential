var question=d3.select('.question')

var percentageArray = [1,2,3,4,5,6,7,8,9,10,20,30,40,50];
var yearArray = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100];

var dollaramount=100;
var percentage=percentageArray[Math.floor(Math.random() * percentageArray.length)]/100;
var years = yearArray[Math.floor(Math.random() * yearArray.length)];
var correct_answer = Math.round(dollaramount*Math.pow(1+percentage,years));

window.onload = reset();



function reset() {
  dollaramount=100;
  percentage=percentageArray[Math.floor(Math.random() * percentageArray.length)]/100;
  years = yearArray[Math.floor(Math.random() * yearArray.length)];
  correct_answer = Math.round(dollaramount*Math.pow(1+percentage,years));
  question.text("How much will $"+dollaramount.toString()+ " become if you let it grow by \
  " +Math.round(percentage*100).toString() + "% per year for "+ years.toString() +" years?");
    d3.select("#indicator").text("");
}

function getAnswer() {
  var answer = d3.select("#text-input").property("value");
  if ((Math.abs(answer-correct_answer))<0.01*correct_answer) {
    var indicator = "correct";
    d3.select("#indicator").style("color","green");
  } else if ((Math.abs(answer-correct_answer))<0.2*correct_answer) {
    var indicator = "close enough, the answer is " + correct_answer.toString();
    d3.select("#indicator").style("color","green");
  }  else {
    var indicator = "Incorrect, the answer is " + correct_answer.toString();
    d3.select("#indicator").style("color","red");
  }
  d3.select("#indicator").text(indicator);
}

d3.select("#enter-button").attr("onclick", "getAnswer()");
d3.select("#reset-button").attr("onclick", "reset()");

var input = d3.select("#text-input");
// Execute a function when the user releases a key on the keyboard
d3.select("#text-input").on("keypress", function() {
    if(d3.event.keyCode === 32 || d3.event.keyCode === 13){
    getAnswer();
  }});

/*svg.append('text')
    .attr('id','average')
    .attr("y", height/2)
    .attr("x", 0)
    .text(average)
    .attr('font-size',bignumbersize)
    .attr('font-weight',bigweight);

svg.append('text')
    .attr("y", height*6/10)
    .attr("x", 0)
    .text('Median age at death:')
    .attr('font-size',height/10+'px')
    .attr('font-weight',smallweight);
*/
