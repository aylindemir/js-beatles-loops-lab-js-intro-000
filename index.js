// add solution here
function theBeatlesPlay(musicians,instruments){
  var variable =[];
  for(let i=0;i<musicians.length;i++ ){
    var concanated = musicians[i]+" plays "+instruments[i]
    variable.push(concanated)
  }
  return variable
}

function johnLennonFacts(facts){
  for(let i=0;i<facts.length;i++){
    facts[i].concat(''!!!'')
  }
  return facts
}
